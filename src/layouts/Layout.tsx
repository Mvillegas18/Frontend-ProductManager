import { Outlet } from 'react-router-dom';

export function Layout() {
	return (
		<>
			<header className='bg-slate-700 mx-2 my-2 rounded-md flex justify-center'>
				<div className='max-w-6xl py-5'>
					<h1 className='text-4xl font-extrabold text-white'>
						Product Manager
					</h1>
				</div>
			</header>

			<main className='mt-10 mx-auto max-w-6xl p-10 shadow-lg bg-white'>
				<Outlet />
			</main>
		</>
	);
}
