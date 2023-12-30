import { useEffect, useState } from 'react';
import { Brand, NewProduct } from '@/types/types';
import useAdminStore from '@/context/admin/useAdminStore';
import TextField from '@/components/form/old/TextField';
import Button from '@/components/Button';
import Modal from '@/components/overlay/Modal';
import Select from '@/components/form/Select';
import { useFormContext } from 'react-hook-form';

const BrandSelectInput = ({ id }: { id?: string }) => {
  const [brands, setBrands] = useState<Brand[] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newBrandName, setNewBrandName] = useState('');

  const { register, watch } = useFormContext<NewProduct>();

  /* Store */
  const { getAllBrands, createNewBrand } = useAdminStore();

  /* Effects */
  useEffect(() => {
    (async () => {
      const brands = await getAllBrands();
      brands && setBrands(brands);
    })();
  }, [getAllBrands]);

  return (
    brands && (
      <>
        <Select
          id={id}
          value={watch('brand') ? '' + watch('brand') : '' + brands[0].id}
          label='Brand'
          options={
            brands.map(({ id, name }) => ({
              value: '' + id,
              label: name,
            })) || []
          }
          {...register('brand')}
        />
        <Modal open={modalOpen} closeModal={() => setModalOpen(false)}>
          <form
            className='flex flex-col gap-4 items-center'
            onSubmit={() => console.log('submit')}
            id='newBrandForm'
          >
            <h2 className='text-xl font-semibold'>Create New Brand</h2>
            <TextField
              onChange={(value: string) => setNewBrandName(value)}
              value={newBrandName}
              label='Brand Name'
            />
            <div className='flex gap-4 justify-center'>
              <Button color='secondary' onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button type='submit' form='newBrandForm'>
                Create
              </Button>
            </div>
          </form>
        </Modal>
      </>
    )
  );
};
export default BrandSelectInput;
