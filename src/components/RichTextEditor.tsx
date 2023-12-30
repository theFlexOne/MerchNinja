import cn from '@/utils/cn';
import { Editor } from '@tinymce/tinymce-react';
import React, { LegacyRef, forwardRef, useRef } from 'react';

const RichTextEditor = forwardRef(
  (
    {
      name,
      label,
      className,
      ...props
    }: Omit<React.HTMLProps<HTMLInputElement>, 'type'> & {
      label: string;
    },
    ref: React.Ref<Editor>
  ) => {
    const hiddenInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (content: string) => {
      if (!hiddenInputRef.current) return;
      hiddenInputRef.current.value = content;
      const changeEvent = new Event('change', { bubbles: true });
      console.log('changeEvent', changeEvent);
      hiddenInputRef.current.dispatchEvent(changeEvent);
    };

    return (
      <div className='flex flex-col gap-2'>
        <span className='text-gray-400 text-sm'>{label}</span>
        <Editor
          ref={ref as LegacyRef<Editor>}
          apiKey='c33s97gmlb441zk6twafr9usqem6zjgctl2h069w9diktfcn'
          initialValue=''
          init={{
            height: '300',
            menubar: false,
            toolbar: 'undo redo | bold italic underline | outdent indent',
            content_style:
              'body { font-family:Montserrat,Arial,sans-serif; font-size:14px; font-weight:500; }',
          }}
          onChange={(e) => handleChange(e.target.getContent())}
        />
        <input
          type='hidden'
          className={cn('opacity-0 absolute', className)}
          ref={hiddenInputRef}
          name={name}
          {...props}
        />
      </div>
    );
  }
);

export default RichTextEditor;
