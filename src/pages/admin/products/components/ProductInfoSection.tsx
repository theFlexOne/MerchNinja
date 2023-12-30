import BrandSelectInput from '@/pages/admin/products/components/BrandSelectInput';
import TextInput from '@/components/form/TextInput';
import CategorySelectInput from '@/pages/admin/products/components/CategorySelectInput';
import { useFormContext } from 'react-hook-form';
import { NewProduct } from '@/types/types';
import Textarea from '@/components/form/Textarea';
import NumberInput from '@/components/form/NumberInput';

const ProductInfoSection = () => {
  const { register } = useFormContext<NewProduct>();
  return (
    <section className='flex flex-col gap-2 h-full'>
      <h2 className='text-2xl text-center text-amber-400/80'>Basic Info</h2>
      <TextInput id='nameInput' label='Product Name' {...register('name')} />
      <BrandSelectInput id='brandSelect' />
      <CategorySelectInput id='categorySelect' />
      <NumberInput
        id='basePriceInput'
        label='Base Price'
        decimalLength={2}
        fixedDecimalLength={true}
        {...register('basePrice')}
      />
      <Textarea
        className='h-full'
        id='descriptionInput'
        label='Description'
        {...register('description')}
      />
    </section>
  );
};

export default ProductInfoSection;
