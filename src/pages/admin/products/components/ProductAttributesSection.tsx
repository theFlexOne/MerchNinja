import Button from '@/components/Button';
import { NewProduct, NewProductAttribute } from '@/types/types';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FaPen, FaMinusCircle } from 'react-icons/fa';
import { useState } from 'react';

const emptyAttribute: NewProductAttribute = {
  name: '',
  type: 'text',
  defaultValue: '',
};

const ProductAttributesSection = () => {
  const { control } = useFormContext<NewProduct>();
  const {
    fields: attributes,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'attributes',
  });

  const addAttribute = (
    name: string,
    type: (typeof emptyAttribute)['type']
  ) => {
    append({
      name,
      type,
    });
  };
  const removeAttribute = (id: number) => () => remove(id);

  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-2xl text-center text-amber-400/80 justify-self-start'>
        Product Attributes
      </h2>
      <div className='grid grid-cols-[1fr_.75fr_.25fr] text-center'>
        <div className='subgrid col-span-full text-gray-400 text-sm'>
          <span className='col-span-1 border border-gray-400'>Name</span>
          <span className='col-span-1 border border-gray-400'>Type</span>
          <span className='col-span-1 border border-gray-400'></span>
        </div>
        {attributes.map((attribute, index) => (
          <div className='subgrid col-span-full justify-items-center'>
            <span className='border border-gray-400 w-full'>
              {attribute.name}
            </span>
            <span className='border border-gray-400 w-full'>
              {attribute.type}
            </span>
            <span className='flex gap-4 border border-gray-400 w-full justify-center'>
              <button>
                <FaPen />
              </button>
              <button onClick={removeAttribute(index)}>
                <FaMinusCircle />
              </button>
            </span>
          </div>
        ))}
        <AddAttributeRow handleAddAttribute={addAttribute} />
      </div>
    </section>
  );
};

const AddAttributeRow = ({
  handleAddAttribute,
}: {
  handleAddAttribute: (
    name: string,
    type: (typeof emptyAttribute)['type']
  ) => void;
}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<(typeof emptyAttribute)['type']>('text');

  const handleClick = () => {
    handleAddAttribute(name, type);
    setName('');
    setType('text');
  };

  return (
    <div className='subgrid col-span-full'>
      <span className='w-full self-stretch border border-gray-400'>
        <input
          type='text'
          className='w-full'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </span>
      <span className='border border-gray-400'>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as typeof type)}
          className='h-full text-black'
        >
          <option value='text'>Text</option>
          <option value='number'>Number</option>
          <option value='checkbox'>Checkbox</option>
        </select>
      </span>
      <Button type='button' className='py-0 rounded-none' onClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

export default ProductAttributesSection;
