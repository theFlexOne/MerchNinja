import React, { ReactElement } from 'react';
import FormControl from '../utils/FormControl';
import useFormControlMap from '../hooks/useFormControlMap';
import cn from '@/utils/cn';

const Form = ({
  children,
  id,
  onSubmit,
  className,
  ...rest
}: FormProps): ReactElement => {
  const { formRef, formControlsRef } = useFormControlMap();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formValues = buildFormValues(formControlsRef.current);
    console.log('formControls', formControlsRef.current);
    console.log('formValues', formValues);
    onSubmit(formValues);
  };

  return (
    <form
      id={id}
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn(className)}
      {...rest}
    >
      {children}
    </form>
  );
};

function buildFormValues(formControls: FormControl[]): Record<string, unknown> {
  const formValues: Record<string, unknown> = {};
  Object.entries(formControls).forEach(([name, formControl]) => {
    const { value } = formControl;
    formValues[name] = value;
  });
  return formValues;
}

type FormProps = Omit<React.HTMLProps<HTMLFormElement>, 'onSubmit'> & {
  onSubmit: (formObject: Record<string, unknown>) => void;
};

export default Form;
