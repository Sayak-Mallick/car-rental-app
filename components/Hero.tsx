'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/ui/Button';

const Hero = () => {
	const handleScroll = () => {
		window.scrollTo({
			top: window.innerHeight,
			behavior: 'smooth',
		});
	};
	return (
		<div className='hero'>
			<div className='flex-1 pt-36 padding-x'>
				<h1 className='hero__title'>Find, book, or rent a car - quickly and easily!</h1>
				<p className='hero__subtitle'>
					We offer a wide selection of vehicles for rent, from compact cars to luxury vehicles, at affordable
					prices.
				</p>
				<Button
					title='Exlpore Cars'
					containerStyles='bg-primary-blue text-white rounded-full mt-10'
					handleClick={handleScroll}
				/>
			</div>
			<div className='hero__image-container'>
				<div className='hero__image'>
					<Image src='/hero.png' alt='hero' fill className='object-contain' />
				</div>
				<div className='hero__image-overlay' />
			</div>
		</div>
	);
};

export default Hero;
