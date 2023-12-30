import { NewProduct, NewProductVariant } from '@/types/types';
import cn from '@/utils/cn';
import {
  useFieldArray,
  UseFormRegister,
  useFormContext,
} from 'react-hook-form';
import Panel from '../../components/panel/Panel';
import Button from '@/components/Button';
import TextInput from '@/components/form/TextInput';

const ProductVariantsForm = ({
  variantSpecNames,
}: {
  variantSpecNames: string[];
}) => {
  const { register, control } = useFormContext<NewProduct>();
  const { fields: variants, append } = useFieldArray({
    control,
    name: 'variants',
  });

  function handleAddVariant() {
    const emptyVariant = variantSpecNames.reduce((acc, specName) => {
      return {
        ...acc,
        [specName]: '',
      };
    }, {} as NewProductVariant);
    append(emptyVariant);
  }

  return (
    <div className={cn(['flex flex-col gap-4'])}>
      <Panel className='justify-center'>
        {variants.length > 0 ? (
          variants.map((variant, i) => {
            return (
              <ProductVariantInputs
                key={variant.id}
                register={register}
                variantSpecNames={variantSpecNames}
                index={i}
              />
            );
          })
        ) : (
          <div className='p-8 text-lg'>
            <span>Add your first variant!</span>
            <Button onClick={handleAddVariant}>Add Variant</Button>
          </div>
        )}
      </Panel>
    </div>
  );
};

const ProductVariantInputs = ({
  register,
  variantSpecNames,
  index,
}: {
  register: UseFormRegister<NewProduct>;
  variantSpecNames: string[];
  index: number;
}) => {
  return (
    <div className='flex flex-col gap-4'>
      {variantSpecNames.map((specName) => {
        return (
          <div key={specName} className='flex gap-4'>
            <TextInput
              label={specName}
              {...register(`variants.${index}.${specName}`)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductVariantsForm;
