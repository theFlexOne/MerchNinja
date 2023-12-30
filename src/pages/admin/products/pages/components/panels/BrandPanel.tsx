import Select from '@/components/form/Select';
import Panel from '../../../../components/panel/Panel';
import PanelBody from '../../../../components/panel/PanelBody';
import PanelHeader from '../../../../components/panel/PanelHeader';

const brands = [
  { value: '', label: 'None' },
  { value: 'apple', label: 'Apple' },
  { value: 'samsung', label: 'Samsung' },
  { value: 'huawei', label: 'Huawei' },
  { value: 'xiaomi', label: 'Xiaomi' },
  { value: 'oppo', label: 'Oppo' },
  { value: 'vivo', label: 'Vivo' },
  { value: 'realme', label: 'Realme' },
  { value: 'oneplus', label: 'OnePlus' },
  { value: 'sony', label: 'Sony' },
  { value: 'nokia', label: 'Nokia' },
  { value: 'lg', label: 'LG' },
  { value: 'other', label: 'Other' },
];

const BrandPanel = () => {
  return (
    <Panel>
      <PanelHeader className='flex'>Brand</PanelHeader>
      <PanelBody>
        <div className='flex items-center'>
          <span className='mr-auto'>Select brand</span>
          <span className='text-xs text-amber-500/40'>Add New</span>
        </div>
        <Select options={brands} name='brand' id='brand' />
      </PanelBody>
    </Panel>
  );
};

export default BrandPanel;
