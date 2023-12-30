import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

const TestPage2 = () => {
  const methods = useForm();

  useEffect(() => {
    // console.log('methods', methods);
    // console.log('methods.formState', methods.formState);
    console.log('methods.control', methods.control);
    console.log(methods.getFieldState('test1'));
    // console.log(methods.getFieldState('test2'));
    // console.log(methods.formState.defaultValues);
    // console.log(methods.formState.errors);

    console.log(useFieldArray);
  }, [methods]);

  methods.register('test2');

  return (
    <div>
      <h1>Test Page 2</h1>
      <form onSubmit={methods.handleSubmit(console.log)}>
        <input
          {...methods.register('test1', {
            value: 'testing',
            validate: (value) => {
              return value === 'test1' ? true : 'error';
            },
          })}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TestPage2;
