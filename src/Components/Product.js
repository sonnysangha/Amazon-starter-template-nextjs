import Currency from "react-currency-formatter"
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import { addToBasket } from "../slices/basketSlice"
import { useDispatch } from "react-redux"
function Product({ title, id, category, image, price, description }) {
    const dispatch = useDispatch()
    const [rating] = useState(Math.floor(Math.random() * 5) + 1)
    const [hasPrime] = useState(Math.random() < 0.5)
    //dispatch an action to dispatch into the store act as a gun 
    // It gets triggered on add items tobasket
    const addItemsToBasket = () => {
        const product = {
            title, id, category, image, price, description,rating,hasPrime
        }
        //Sending the productto the redux store
        dispatch(addToBasket(product))
    }
    return (
        <div className=" relative flex flex-col bg-white m-5 z-30 p-10 " >
            <p className=" absolute top-2 right-2 text-xs italic text-gray-400 " >{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className=" my-3 " >{title}</h4>
            <div className=" flex" >{
                Array(rating).
                    fill().
                    map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500 " />
                    ))}
            </div>
            <p className=" text-xs mt-2 mb-2 line-clamp-2 " >{description}</p>
            <div className=" m-5  " >

                <Currency quantity={price} currency="INR" />
            </div>
            {hasPrime && (
                <div className=" flex items-center space-x-2 -mt-5 " >
                    <img className=" w-12 " src="https://links.papareact.com/fdw" alt="" />
                    <p className=" text-xs text-gray-500 " >Free Next-day Delivery</p>
                </div>
            )}
            <button onClick={addItemsToBasket} className=" mt-auto button " > Add to Basket </button>
        </div>

    )
}

export default Product
