import Select from '@/components/form/Select';
import Panel from '../../../../components/panel/Panel';
import PanelBody from '../../../../components/panel/PanelBody';
import PanelHeader from '../../../../components/panel/PanelHeader';

const CategoryPanel = () => {
  const categories = [
    { value: 'electronics', label: 'Electronics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'food', label: 'Food' },
    { value: 'health', label: 'Health' },
    { value: 'sports', label: 'Sports' },
    { value: 'outdoor', label: 'Outdoor' },
    { value: 'home', label: 'Home' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Panel>
      <PanelHeader className='flex'>Category</PanelHeader>
      <PanelBody>
        <div className='flex items-center'>
          <span className='mr-auto'>Select category</span>
          <span className='text-xs text-amber-500/40'>Add New</span>
        </div>
        <Select options={categories} name='category' id='category' />
      </PanelBody>
    </Panel>
  );
};

export default CategoryPanel;
