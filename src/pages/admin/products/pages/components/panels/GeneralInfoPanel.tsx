import Tabs from '@/components/navigation/Tabs';
import Panel from '@/pages/admin/components/panel/Panel';
import PanelBody from '@/pages/admin/components/panel/PanelBody';
import PanelHeader from '@/pages/admin/components/panel/PanelHeader';
import { useState } from 'react';

const tabs = [
  { name: 'General Info', element: GeneralInfoTab },
  { name: 'Product Specs', element: ProductSpecsTab },
];

const MoreInfoPanel = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  const displayTab = () => {
    return <activeTab.element />;
  };

  return (
    <Panel>
      <PanelHeader className='relative'>
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(tab: Tab) => setActiveTab(tab)}
          className='absolute inset-0'
        />
      </PanelHeader>
      <PanelBody>{displayTab()}</PanelBody>
    </Panel>
  );
};

function GeneralInfoTab() {
  return <div>General Info</div>;
}

function ProductSpecsTab() {
  return <div>Product Specs</div>;
}

export type Tab = { name: string; element: React.FC };

export default MoreInfoPanel;
