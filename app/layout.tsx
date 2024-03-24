import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';

export const metadata: Metadata = {
	title: 'CarDekho: New Cars, Car Prices, Buy & Sell Used Cars in India',
	description:
		'Thinking of buying a car? At CarDekho.com, buy new and used cars, search by filter and preferences, compare cars, read latest news and updates, see 360 views & more!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='relative'>
				<Navbar />
				{children} 
                <Footer />
			</body>
		</html>
	);
}
