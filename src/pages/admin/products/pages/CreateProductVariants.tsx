import {
  RegisterOptions,
  UseFormRegister,
  WatchObserver,
  useFieldArray,
  useFormContext,
} from 'react-hook-form';
import Panel from '../../components/panel/Panel';
import AdminPage from '../components/AdminPage';
import { NewProduct, NewProductVariant } from '@/types/types';
import TextInput from '@/components/form/TextInput';
import Button from '@/components/Button';
import { useEffect } from 'react';

const CreateProductVariants = () => {
  const { control, getValues } = useFormContext<NewProduct>();
  const { fields: variants, append } = useFieldArray({
    control,
    name: 'variants',
  });

  const handleAddVariant = () => {
    const attributes = getValues('attributes');
    const emptyVariant = {} as NewProductVariant;
    attributes.forEach((attribute) => {
      emptyVariant[attribute.name] = '';
    });
    console.log('emptyVariant', emptyVariant);
    append(emptyVariant);
  };

  console.log('variants', variants);

  return (
    <AdminPage>
      <Panel className='flex flex-col gap-8'>
        <h2 className='text-2xl text-center text-amber-400/80'>
          Product Variants
        </h2>
        <div>
          {variants.map(({ id, ...variant }, index) => (
            <div key={id}>
              {Object.entries(variant).map(([key]) => (
                <VariantInput
                  key={key}
                  label={key}
                  {...control.register(`variants.${index}.${key}`)}
                />
              ))}
            </div>
          ))}
          <Button color='primary' onClick={handleAddVariant}>
            Add Variant
          </Button>
        </div>
      </Panel>
    </AdminPage>
  );
};

const VariantInput = ({
  label,
  variantKey,
}: {
  label: string;
  variantKey: `variants.${number}.${string}`;
}) => {
  const { register } = useFormContext<NewProduct>();
  const { ref, ...registerProps } = register(variantKey);

  return <TextInput ref={ref} label={label} {...registerProps} />;
};

export default CreateProductVariants;
