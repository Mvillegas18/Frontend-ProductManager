import { Link } from 'react-router-dom';
import { ProductForm } from '../components/ProductForm';

export function NewProduct() {
	return (
		<>
			<div className='flex justify-between items-center'>
				<h2 className='text-4xl font-black text-slate-700 pb-3'>
					Register product
				</h2>
				<Link
					to={'/'}
					className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-all text-sm'>
					Go to products
				</Link>
			</div>

			<ProductForm />
		</>
	);
}
