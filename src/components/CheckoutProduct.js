import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ReviewStars from "./ReviewStars";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
	id,
	title,
	price,
	rating,
	description,
	category,
	image,
	hasPrime,
}) {
	const dispatch = useDispatch();

	const addItemToBasket = () => {
		const product = {
			id,
			title,
			price,
			rating,
			description,
			category,
			image,
			hasPrime,
		};
		dispatch(addToBasket(product));
	};

	const removeItemFromBasket = () => {
		dispatch(removeFromBasket(id));
	};

	return (
		<div className='grid grid-cols-5'>
			<Image src={image} height={200} width={200} objectFit='contain' />

			{/* Middle section */}
			<div className='col-span-3 mx-5'>
				<p>{title}</p>
				<ReviewStars rating={rating} />
				<p className='my-2 text-xs line-clamp-3'>{description}</p>
				<Currency quantity={price} currency='EUR' />

				{hasPrime && (
					<div className='flex items-center space-x-2'>
						<img
							className='w-12'
							loading='lazy'
							src='https://links.papareact.com/fdw'
							alt=''
						/>
						<p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
					</div>
				)}
			</div>

			{/* Right add/remove buttons */}
			<div className='flex flex-col my-auto space-y-2 justify-self-end'>
				<button className='button' onClick={addItemToBasket}>
					Add to Basket
				</button>
				<button className='button' onClick={removeItemFromBasket}>
					Remove from Basket
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
