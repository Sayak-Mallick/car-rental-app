import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
			<div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
				<div className='flex flex-col justify-start items-start gap-6'>
					<Image src='/logo.svg' alt='CarDekho Logo' width={118} height={18} className='object-contain' />
					<p className='text-base text-gray-700'>© 2024 CarDekho. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
