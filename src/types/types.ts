import React, { HTMLProps } from 'react';

export type Category = {
  id: number;
  name: string;
  parentId: number | null;
};

export type ParentCategory = {
  id: number;
  name: string;
  children: Category[];
};

export type Brand = {
  id: number;
  name: string;
};

export type InputComponentProps = HTMLProps<HTMLFormElement> & {
  label: string;
  width?: 'full' | 'default';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

export type NewProduct = {
  name: string;
  shortDescription: string;
  description: string;
  status: 'draft' | 'published';
  brandId: number | null;
  categoryId: number | null;
  basePrice: number | null;
  thumbnail: string | null;
};

export type NewProductAttribute = {
  name: string;
  type: 'text' | 'number' | 'boolean';
  defaultValue?: string | number | boolean;
};

export type NewProductSpec = {
  name: string;
  value?: string;
  variant: boolean;
};

export type NewProductVariant = {
  price: string;
  quantity: string;
  [key: string]: string;
};

export type UUID = string;

export type NewCategory = Omit<Category, 'id'>;

export type HTMLFormField =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

export type SelectOption = {
  label: string;
  value: string | number;
};

export type FadeBaseProps = {
  children: React.ReactNode;
  delay: number;
  timingFunction?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
};
