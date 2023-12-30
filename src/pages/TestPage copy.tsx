import Button from '@/components/Button';
import Page from '@/components/layout/Page';
import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

const TestPage = () => {
  const { control, handleSubmit, register, unregister, getValues, watch } =
    useForm<FormData>({
      defaultValues: {
        specs: [
          {
            name: '',
            value: '',
            variant: false,
          },
        ],
        variants: [],
      },
    });

  const {
    fields: specs,
    append: appendSpec,
    remove: removeSpec,
  } = useFieldArray({
    control,
    name: 'specs',
  });

  const {
    fields: variants,
    append: appendVariant,
    remove: removeVariant,
    replace: replaceVariant,
  } = useFieldArray({
    control,
    name: 'variants',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleAddVariant = () => {
    const newVariant: Variant = {
      price: 0,
      quantity: 0,
    };
    const currentSpecs = getValues('specs');
    currentSpecs.forEach((spec: Spec) => {
      if (spec.variant) {
        newVariant[spec.name] = spec.value as string | number | boolean;
      }
    });
    appendVariant(newVariant);
  };

  useEffect(() => {
    const sub = watch((value, { name, type }) => {
      if (type !== 'change' || !name?.match(/specs\.\d+\.variant/)) return;
      if (!value.specs) return;
      const variantSpecs = value.specs.filter((spec) => spec?.variant);
      const currentVariants = getValues('variants');
      const newVariants = currentVariants.map((variant: Variant) => {
        const newVariant: Variant = { price: 0, quantity: 0 };
        variantSpecs.forEach((spec) => {
          if (!spec) return;
          newVariant[spec.name!] =
            variant[spec.name!] || (spec.value as string | number | boolean);
        });
        return newVariant;
      });
      currentVariants.forEach((variant: Variant, index: number) => {
        Object.keys(variant).forEach((key) => {
          if (variantSpecs.find((spec: Spec) => spec.name === key)) return;
          removeVariant(index);
        });
      console.log(newVariants);
      replaceVariant(newVariants);
    });

    return () => {
      sub.unsubscribe();
    };
  }, [watch, replaceVariant, getValues]);

  return (
    <>
      <Page className='bg-gray-800 flex flex-col gap-8 text-white justify-center items-center'>
        <h1>Test Page</h1>
        <div className='flex flex-col gap-4'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex gap-4'>
            <div className='bg-gray-200/20 rounded-md p-4 flex flex-col gap-4'>
              {specs.map((spec, index) => (
                <div key={spec.id} className='flex gap-2'>
                  <label htmlFor={`specs.${index}.name`}>Name</label>
                  <input
                    type='text'
                    {...register(`specs.${index}.name` as const)}
                  />
                  <label htmlFor={`specs.${index}.value`}>Value</label>
                  <input
                    type='text'
                    {...register(`specs.${index}.value` as const)}
                  />
                  <label htmlFor={`specs.${index}.variant`}>Variant</label>
                  <input
                    type='checkbox'
                    {...register(`specs.${index}.variant` as const)}
                  />
                  <Button
                    className='bg-red-500'
                    onClick={() => removeSpec(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                onClick={() =>
                  appendSpec({ name: '', value: '', variant: false })
                }
              >
                Add Spec
              </Button>
            </div>
            <div className='bg-gray-200/20 rounded-md p-4 flex flex-col gap-4'>
              {variants.map(({ id, ...variant }, index) => (
                <div key={id} className='flex gap-2'>
                  {Object.keys(variant).map((key) => (
                    <div key={key} className='flex gap-2'>
                      <label htmlFor={`variants.${index}.${key}`}>{key}</label>
                      <input
                        type='text'
                        {...register(`variants.${index}.${key}` as const)}
                      />
                    </div>
                  ))}
                </div>
              ))}
              <Button onClick={handleAddVariant} className='bg-green-500'>
                Add Variant
              </Button>
            </div>
          </form>
        </div>
      </Page>
      <DevTool control={control} />
    </>
  );
};

type FormData = {
  specs: Spec[];
  variants: Variant[];
};

type Spec = {
  name: string;
  value: string;
  variant: boolean;
};

type Variant = {
  price: number;
  quantity: number;
  [key: string]: string | number | boolean;
};

export default TestPage;
