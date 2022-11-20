import Image from "next/image";
import React from "react";
import Header from "../components/Header";

function Checkout() {
	return (
		<div className='bg-gray-100'>
			<Header />

			<main className='mx-auto lg:flex max-w-screen-2xl'>
				{/* Left */}
				<div className='flex-grow m-5 shadow-sm'>
					<Image
						src='https://links.papareact.com/ikj'
						width={1020}
						height={250}
						objectFit='contain'
					/>

					<div className='flex flex-col p-5 space-y-10 bg-white'>
						<h1 className="pb-4 text-3xl border-b">Your Shopping Basket</h1>
					</div>
				</div>

				{/* Right */}
				<div></div>
			</main>
		</div>
	);
}

export default Checkout;
