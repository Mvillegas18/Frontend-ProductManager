import { createBrowserRouter } from 'react-router-dom';
import { action as newProductAction } from './components/ProductForm';
import { Layout } from './layouts/Layout';
import { NewProduct } from './views/NewProduct';
import { Product, loader as productsLoader } from './views/Product';
import { action as deleteProductAction } from './components/ProductDetails';
import {
	EditProduct,
	loader as editProductLoader,
	action as editProductAction,
} from './views/ProductEdit';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Product />,
				loader: productsLoader,
			},
			{
				path: 'products/new',
				element: <NewProduct />,
				action: newProductAction,
			},
			{
				path: 'products/:id/:edit',
				element: <EditProduct />,
				loader: editProductLoader,
				action: editProductAction,
			},
			{
				path: 'products/:id/delete',
				action: deleteProductAction,
			},
		],
	},
]);
