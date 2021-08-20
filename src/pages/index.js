import Head from "next/head";
import Banner from "../Components/Banner";
import Header from "../Components/Header"
import ProductFeed from "../Components/ProductFeed";
export default function Home({products}) {
  return (
    <div className=" bg-gray-100" >
      <Head>
       <title>E commerce</title>
      </Head>
        <Header />

        <main className=" max-w-screen-2xl  mx-auto " >
          <Banner />
          {/* {Banner} */}
          {/* Product feed */}
          <ProductFeed products={products}  />
         
        </main>
    
    </div>
  );
}
  export async function getServerSideProps(context){
    const products = await fetch("https://fakestoreapi.com/products").then(
      (res)=>res.json()
    )
    return {
      props:{
        products
      }
    }
  
}


