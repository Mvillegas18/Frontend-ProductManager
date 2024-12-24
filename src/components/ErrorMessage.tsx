import { PropsWithChildren } from 'react';

export const ErrorMessage = ({ children }: PropsWithChildren) => {
	return (
		<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm'>
			{children}
		</div>
	);
};
