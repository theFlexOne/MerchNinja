import AdminPageHeader from '@/pages/admin/components/AdminPageHeader';
import Button from '@/components/Button';
import BasicInfoPanel from './components/panels/BasicInfoPanel';
import ImagesPanel from './components/panels/ImagesPanel';
import StatusPanel from './components/panels/StatusPanel';
import CategoryPanel from './components/panels/CategoryPanel';
import TagsPanel from './components/panels/TagsPanel';
import ProductGroupPanel from './components/panels/ProductGroupPanel';
import Form from '@/components/form/Form';
import MoreInfoPanel from './components/panels/GeneralInfoPanel';
import BrandPanel from './components/panels/BrandPanel';

export default function CreateProduct() {
  function handleSubmit(formObject: Record<string, unknown>) {
    console.log('formObject', formObject);
  }

  const handleSaveDraft = () => {};

  return (
    <div className='grow flex flex-col gap-6'>
      <AdminPageHeader saved={true}>
        <span className=''>Create Product</span>
      </AdminPageHeader>
      <Form
        className='grid grid-cols-[3fr,1fr] gap-6 max-w-screen-2xl mx-auto px-6'
        onSubmit={handleSubmit}
        devtools={true}
      >
        <div className='flex flex-col gap-6'>
          <BasicInfoPanel />
          <ImagesPanel />
          <MoreInfoPanel />
        </div>
        <div className='flex flex-col gap-6'>
          <StatusPanel />
          <ProductGroupPanel />
          <CategoryPanel />
          <TagsPanel />
          <BrandPanel />
        </div>
        <Button className='col-span-full' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
