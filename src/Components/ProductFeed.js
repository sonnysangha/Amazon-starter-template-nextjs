import React from 'react'
import Product from './Product'

function ProductFeed({products}) {
    return (
        <div>
            {products.map(({title,id,category,image,price,description})=>(
                
              <Product 
              key={id}
              title={title}
              category={category}
              image={image}
              price={price}
              description={description}
              />
             ) )}
        </div>
    )
}

export default ProductFeed
