import { AiOutlineLoading } from 'react-icons/ai';

export default function Loading() {
	return (
		<div className='h-full grid relative top-[46vh] place-content-center'>
			<AiOutlineLoading className='text-5xl animate-spin' />
		</div>
	);
}
