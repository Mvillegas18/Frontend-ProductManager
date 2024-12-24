import { array, boolean, InferOutput, number, object, string } from 'valibot';

export const DraftProductSchema = object({
	name: string('El nombre debe ser un texto'),
	price: number('El precio debe ser de tipo numerico'),
});

export const ProductSchema = object({
	id: number(),
	name: string(),
	price: number(),
	availability: boolean(),
});

export const ProductsSchema = array(ProductSchema);

export type Product = InferOutput<typeof ProductSchema>;
