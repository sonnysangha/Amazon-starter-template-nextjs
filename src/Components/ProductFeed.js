import React from 'react'
import Product from './Product'
// Slice used to display different products
function ProductFeed({products}) {
    return (
        <div className="  grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto" >
            {products.slice(0,4).map(({title,id,category,image,price,description})=>(
                
              <Product 
              key={id}
              title={title}
              category={category}
              image={image}
              price={price}
              description={description}
              />
             ) )}
              <img className="md:col-span-full" src="https:links.papareact.com/dyz" alt="" />
          <div className=" md:col-span-2" >
          {products.slice(4,5).map(({title,id,category,image,price,description})=>(
                
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
          {products.slice(5,products.length).map(({title,id,category,image,price,description})=>(
                
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
