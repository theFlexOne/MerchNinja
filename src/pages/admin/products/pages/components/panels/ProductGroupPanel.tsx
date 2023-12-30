import Select from '@/components/form/Select';
import Panel from '@/pages/admin/components/panel/Panel';
import PanelBody from '@/pages/admin/components/panel/PanelBody';
import PanelHeader from '@/pages/admin/components/panel/PanelHeader';
import { useFormContext } from 'react-hook-form';

const OPTIONS = [
  {
    label: 'None',
    value: '',
  },
  {
    label: 'Product Group 1',
    value: 'product-group-1',
  },
  {
    label: 'Product Group 2',
    value: 'product-group-2',
  },
];

const ProductGroupPanel = () => {
  const { register, getValues } = useFormContext();

  return (
    <Panel>
      <PanelHeader>Product Group</PanelHeader>
      <PanelBody>
        <Select
          value={getValues('productGroup')}
          options={OPTIONS}
          {...register('productGroup')}
        />
      </PanelBody>
    </Panel>
  );
};

export default ProductGroupPanel;
