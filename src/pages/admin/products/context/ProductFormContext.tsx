import { createContext } from 'react';
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  UseFormReturn,
  useForm,
} from 'react-hook-form';

type ProductFormContextType = {
  methods: UseFormReturn<FieldValues>;
};

export const ProductFormContext = createContext<ProductFormContextType | null>(
  null
);

export default function ProductFormProvider<T extends FieldValues>({
  children,
  defaultValues,
}: {
  children: React.ReactNode;
  defaultValues?: DefaultValues<T>;
}) {
  const formMethods = useForm<T>({ defaultValues });

  return (
    <ProductFormContext.Provider value={null}>
      <FormProvider {...formMethods}>{children}</FormProvider>
    </ProductFormContext.Provider>
  );
}
