import Panel from '../../components/panel/Panel';
import ProductImagesSection from './ProductImagesSection';
import ProductInfoSection from './ProductInfoSection';
import ProductSpecsSection from './ProductSpecsSection';

const ProductForm = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-[1fr,_.7fr] gap-4'>
        <Panel className=''>
          <ProductImagesSection />
        </Panel>
        <Panel className='p-4 flex flex-col'>
          <ProductInfoSection />
        </Panel>
      </div>
      <Panel className='basis-0 grow'>
        <ProductSpecsSection />
      </Panel>
    </div>
  );
};

export default ProductForm;
