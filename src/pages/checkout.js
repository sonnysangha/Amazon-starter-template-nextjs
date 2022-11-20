import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

function Checkout() {
	const { data: session } = useSession();

	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);

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
						<h1 className='pb-4 text-3xl border-b'>
							{items?.length === 0 ? "Your Amazon Basket is empty" : "Shopping Basket"}
						</h1>
						{console.log("items", items)}
						{items?.map((item, index) => (
							<CheckoutProduct
								key={index}
								id={item.id}
								title={item.title}
								price={item.price}
								rating={item.rating}
								description={item.description}
								category={item.category}
								image={item.image}
								hasPrime={item.hasPrime}
							/>
						))}
					</div>
				</div>

				{/* Right */}
				<div className='flex flex-col p-10 bg-white shadow-md'>
					{items.length > 0 && (
						<>
							<h2 className='whitespace-nowrap'>
								Subtotal ({items.length}):{" "}
								<span className='font-bold'>
									<Currency quantity={total} currency='EUR' />
								</span>
							</h2>
							<button
								disabled={!session}
								className={`button mt-2 ${
									!session &&
									"from-gray-300 to-gray-500 border-gray-50 text-gray-300 cursor-not-allowed"
								}`}
							>
								{!session ? "Sign in to checkout" : "Proceed to checkout"}
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	);
}

export default Checkout;
