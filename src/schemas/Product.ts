import { z } from 'zod';

export const BaseProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  description: z.string(),
  images: z.array(z.string()),
  specs: z.record(z.string()),
});

export const ProductFormSchema = BaseProductSchema.extend({
  brandId: z.number().nullable(),
  categoryId: z.number().nullable(),
});

export const CategorySchema: z.ZodTypeAny = z.lazy(() =>
  z.object({
    id: z.number(),
    name: z.string(),
    parent: z.optional(CategorySchema),
  })
);

export const ProductSchema = ProductFormSchema.extend({
  id: z.number(),
  brand: z.object({
    id: z.number(),
    name: z.string(),
  }),
  category: CategorySchema,
});
