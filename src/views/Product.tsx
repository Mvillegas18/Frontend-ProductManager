import { Link, useLoaderData } from 'react-router-dom';
import { ProductDetails } from '../components/ProductDetails';
import { getProducts } from '../services/productService';
import { type Product } from '../types';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
	const products = await getProducts();

	return products;
};

export function Product() {
	const products = useLoaderData() as Product[];

	return (
		<>
			<div className='flex justify-between items-center p-4'>
				<h2 className='text-4xl font-black text-slate-700'>Products</h2>
				<Link
					to={'/products/new'}
					className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all text-sm'>
					Add product
				</Link>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{products.map((product) => (
					<ProductDetails
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</>
	);
}
