import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from "react-currency-formatter"
import { addToBasket } from '../slices/basketSlice'
function CheckoutProduct({ title, id, category, image, rating, price, description, hasPrime }) {
  
    const dispatch = useDispatch()
    const addItemsToBasket =()=>
   {
    const product = {
        title, id, category, image, price, description,rating,hasPrime
    }
            dispatch(addToBasket(product))
   }
    return (
        <div className="grid grid-cols-5" >
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div className=" col-span-3" >
                <p>{title}</p>
                <div className=" flex" >{
                    Array(rating).
                        fill().
                        map((_, i) => (
                            <StarIcon className="h-5 text-yellow-500 " />
                        ))}
                </div>
                <p className=" text-xs my-2 line-clamp-3" >{description}</p>
                <Currency quantity={price} currency="INR" />
                {hasPrime && (
                    <div className=" flex items-center space-x-2" >
                        <img
                            loading="lazy"
                         className="w-12"
                         src="https://links.papareact.com/fdw" alt="" />
                   <p className=" text-xs text-gray-500 " >Free Next day Delivery</p>
                   
                    </div>
                   
                )}
              
            </div>
            <div className=" flex flex-col space-y-2 justify-end my-auto " >
                    <button onClick={addItemsToBasket} className="button"  >Add to Basket</button>
                    <button className="button" >Remove from Basket</button>
                </div>
        </div>
    )
}

export default CheckoutProduct
