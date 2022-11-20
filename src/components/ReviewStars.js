import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

function ReviewStars({ rating }) {
	return (
		<div className='flex'>
			{Array(Number(rating))
				.fill()
				.map((_, index) => (
					<StarIcon key={index} className='h-5 text-yellow-500' />
				))}
		</div>
	);
}

export default ReviewStars;
