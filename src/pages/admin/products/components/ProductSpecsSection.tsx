import Button from '@/components/Button';
import { NewProduct } from '@/types/types';
import ProductAttributeInputs from './ProductAttributeInputs';
import { useFieldArray, useFormContext } from 'react-hook-form';

const ProductSpecsSection = () => {
  const { control, register } = useFormContext<NewProduct>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'specs',
  });

  const addSpec = () => {
    append({ name: '', value: '', variant: false });
  };

  const removeSpec = (id: number) => () => {
    remove(id);
  };

  return (
    <section className='flex flex-col gap-6 grow mx-4'>
      <h2 className='text-2xl text-center text-amber-400/80'>Product Specs</h2>
      <p className='text-gray-400 max-w-screen-md'>
        Define the shared attributes that all your product variants inherit.
        These are attributes that will not change from one variant to another.
        EX: Material, Manufacturer, etc.
      </p>
      <div className='grid grid-cols-[repeat(5,_auto)] gap-4'>
        <div className='subgrid col-span-full text-gray-400 text-sm justify-items-center mx-4'>
          <span className='col-span-1'>Variant?</span>
          <span className='col-span-1'>Name</span>
          <span className='col-span-1'>Value</span>
          <span className='col-span-1'>Type</span>
          <span className='col-span-1'></span>
        </div>
        {fields.map((spec, index, arr) => (
          <ProductAttributeInputs
            key={spec.id}
            id={index}
            removeAttribute={removeSpec(index)}
            disableDelete={arr.length === 1}
            register={register}
          />
        ))}
      </div>
      <Button
        color='tertiary'
        size='sm'
        className='self-end mt-auto'
        onClick={addSpec}
      >
        Add Spec
      </Button>
    </section>
  );
};

export default ProductSpecsSection;
