import Link from 'next/link';
import Image from 'next/image';
import Button from '@/ui/Button';

const Navbar = () => {
	return (
		<header className='w-full absolute z-10'>
			<nav
				className='max-w-[1440px] flex mx-auto justify-between items-center sm:px-16
             px-16 py-4'
			>
				<Link href='/' className='flex justify-center items-center'>
					<Image src='/logo.svg' alt='CarDekho Logo' width={118} height={18} className='object-contain' />
				</Link>
                <Button title='Sign in' btnType="button" containerStyles='text-primary-blue bg-white rounded-full min-w-[130px]' />
			</nav>
		</header>
	);
};

export default Navbar;
