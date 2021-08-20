import { Currency, CurrencyRupeeIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
const Max_Rating=5;
const Min_Rating=5;
function Product({title,id,category,image,price,description}) {
  
     const [rating] = useState( Math.floor(Math.random()*(Max_Rating-Min_Rating+1) +Min_Rating))
     const [hasPrime] = useState(Math.random()<0.5)
     return (
        <div>
            <p>{category}</p>
             <Image src={image} height={200} width={200} objectFit="contain" />

             <h4>{title}</h4>
             <div className=" flex" >{
                  Array(rating).
                  fill().
                  map((_,i) => (      
                  <StarIcon className="h-5 "  />
                  ))}
              <p>{description}</p>
             <div className="  " >
                
                 <Currency quantity={price}  />
             </div>
                </div>
        </div>
    )
}

export default Product
