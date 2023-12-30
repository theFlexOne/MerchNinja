import { HTMLProps } from 'react';

export type FormInputElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export type FormControl = {
  uuid: string;
  name: string;
  path: string;
  value: string;
  checked: boolean | undefined;
  registered: boolean;
  htmlElement: FormInputElement;
};

export type FormControlMapKey = MapKeyType<FormControlMap, FormControl>;
export type MapKeyType<T, Z> = T extends Map<infer K, Z> ? K : never;
export type FormControlMap = Map<string, FormControl>;

export type FormControlElementBase<T> = HTMLProps<T> & {
  'data-forminput'?: boolean;
};
