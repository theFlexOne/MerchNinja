import Button from '@/components/Button';
import ImageUploadInput from '@/components/form/old/ImageUploadInput';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const ProductImagesSection = () => {
  const { register, setValue } = useFormContext();
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  const { onChange, ...rest } = register('thumbnail');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    e.target.files && setThumbnailUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleReset = () => {
    setThumbnailUrl(null);
    setValue('thumbnail', null);
  };

  console.log(thumbnailUrl);

  return (
    <section className='flex flex-col gap-4 w-full place-self-start h-full'>
      <h2 className='text-2xl text-center text-amber-400/80'>Images</h2>
      {thumbnailUrl ? (
        <div className='flex flex-col gap-2'>
          <img
            src={thumbnailUrl}
            alt='Thumbnail'
            className='max-w-1/2 mx-auto max-h-[500px]'
          />
          <Button
            type='button'
            color='danger'
            className='w-1/2 mx-auto'
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      ) : (
        <div className='flex flex-col'>
          <ImageUploadInput
            className='max-h-[290px]'
            onChange={handleChange}
            {...rest}
          />
        </div>
      )}
    </section>
  );
};

export default ProductImagesSection;
