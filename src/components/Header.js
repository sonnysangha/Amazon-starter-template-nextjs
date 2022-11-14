import React from "react";
import Image from "next/image";
import {
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	Bars3Icon,
} from "@heroicons/react/24/outline";

function Header() {
	return (
		<header>
			{/* Top nav */}
			<div className='flex items-center flex-grow p-1 py-2 bg-amazon_blue'>
				<div className='flex items-center flex-grow mt-2 sm:flex-grow-0'>
					<Image
						src='https://links.papareact.com/f90'
						width={150}
						height={40}
						objectFit='contain'
						className='cursor-pointer'
					/>
				</div>

				{/* Search bar  */}
				<div className='items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500'>
					<input
						className='flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none'
						type='text'
					/>
					<MagnifyingGlassIcon className='h-12 p-4' />
				</div>

				{/* Right */}
				<div className='flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap'>
					<div className='link'>
						<p>Hello Seyma Ciftci</p>
						<p className='font-extrabold md:text-sm'>Account & Lists</p>
					</div>

					<div className='link'>
						<p>Returns</p>
						<p className='font-extrabold md:text-sm'>& Orders</p>
					</div>

					<div className='relative flex items-center link'>
						<span className='absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10'>
							0
						</span>
						<ShoppingCartIcon className='h-8' />
						<p className='hidden mt-2 font-extrabold md:inline md:text-sm'>Basket</p>
					</div>
				</div>
			</div>

			{/* Bottom nav */}
			<div className='flex items-center p-2 pl-6 space-x-3 text-sm text-white bg-amazon_blue-light'>
				<p className='flex items-center link'>
					<Bars3Icon className='h-6 mr-1' />
					All
				</p>

				<p className='link'>Prime Video</p>
				<p className='link'>Amazon Business</p>
				<p className='link'>Today's Deals</p>

				<p className='hidden lg:inline link'>Electronics</p>
				<p className='hidden lg:inline link'>Food & Grocery</p>
				<p className='hidden lg:inline link'>Prime</p>
				<p className='hidden lg:inline link'>Buy Again</p>
				<p className='hidden lg:inline link'>Shopper Toolkit</p>
				<p className='hidden lg:inline link'>Health & Personal Care</p>
			</div>
		</header>
	);
}

export default Header;
