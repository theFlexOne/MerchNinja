import cn from '@/utils/cn';
import { HTMLProps } from 'react';

const InputFieldWrapper = ({
  children,
  className,
}: HTMLProps<HTMLDivElement>) => {
  className = cn(
    [
      'text-neutral-200 bg-f1-dark-field tracking-wide',
      'border border-f1-dark-bg/80 rounded',
      'focus-within:outline-none focus-within:border-primary-500/40 focus-within:ring-1 focus-within:ring-primary-500/40',
      'transition-colors duration-200 ease-in-out',
    ],
    className
  );

  return <div className={className}>{children}</div>;
};

export default InputFieldWrapper;
