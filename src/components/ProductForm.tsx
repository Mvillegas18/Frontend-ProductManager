import {
	ActionFunctionArgs,
	Form,
	useActionData,
	redirect,
} from 'react-router-dom';
import { ErrorMessage } from './ErrorMessage';
import { addProduct } from '../services/productService';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }: ActionFunctionArgs) => {
	const data = Object.fromEntries(await request.formData());

	let error = '';
	if (Object.values(data).includes('')) {
		error = 'Todos los campos son obligatorios';
	}

	if (error.length) return error;

	await addProduct(data);

	return redirect('/');
};

export const ProductForm = () => {
	const error = useActionData() as string;

	return (
		<>
			<div className='max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md'>
				<Form
					className='space-y-6'
					method='POST'>
					{error && <ErrorMessage>{error}</ErrorMessage>}
					{/* Name Field */}
					<div>
						<label
							htmlFor='name'
							className='block text-slate-600 font-medium mb-2'>
							Product Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='Enter product name'
						/>
					</div>

					{/* Price Field */}
					<div>
						<label
							htmlFor='price'
							className='block text-slate-600 font-medium mb-2'>
							Price
						</label>
						<input
							type='number'
							id='price'
							name='price'
							className='w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='Enter product price'
						/>
					</div>

					{/* Submit Button */}
					<div>
						<input
							type='submit'
							className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all font-semibold'
							value={'Add product'}
						/>
					</div>
				</Form>
			</div>
		</>
	);
};
