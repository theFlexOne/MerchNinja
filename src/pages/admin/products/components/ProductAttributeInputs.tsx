import { AiOutlineClose as DeleteIcon } from 'react-icons/ai';
import TextInput from '@/components/form/TextInput';
import { NewProduct, NewProductVariant } from '@/types/types';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Select from '@/components/form/Select';
import { useRef } from 'react';

const ProductAttributeInputs = ({
  id,
  removeAttribute,
  disableDelete = false,
}: {
  id: number;
  removeAttribute: () => void;
  disableDelete?: boolean;
}) => {
  const { watch, control, register } = useFormContext<NewProduct>();
  const { fields: variants, replace } = useFieldArray({
    control,
    name: 'variants',
  });
  const currentNameRef = useRef<string | undefined>();

  const { onBlur: onNameBlur, ...nameProps } = register(
    `attributes.${id}.name`
  );

  const handleNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onNameBlur(e);
    const oldName = currentNameRef.current as string;
    const name = e.target.value;
    if (oldName === name) return;
    currentNameRef.current = name;

    const newVariants = variants.map(
      (variant: NewProductVariant, index: number) => {
        Object.entries(variant).forEach(([key, value]) => {
          if (key === oldName) {
            delete variant[oldName];
            variant[name] = value;
          }
        });
        return variant;
      }
    );

    replace(newVariants);
  };

  return (
    <div className='subgrid col-span-3 justify-items-center'>
      <TextInput
        id='specNameInput'
        className='max-w-[20ch]'
        onBlur={handleNameBlur}
        {...nameProps}
      />
      <Select
        id='specTypeSelect'
        className='text-sm'
        value={watch(`attributes.${id}.type`) || 'text'}
        containerProps={{ className: 'max-w-[10ch]' }}
        options={[
          { value: 'text', label: 'Text' },
          { value: 'number', label: 'Number' },
          { value: 'boolean', label: 'Checkbox' },
        ]}
        {...register(`attributes.${id}.type`)}
      />
      <button
        className='text-xl text-gray-400/50 hover:text-amber-400/80 disabled:text-gray-400/20'
        disabled={disableDelete}
        onClick={removeAttribute}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default ProductAttributeInputs;
