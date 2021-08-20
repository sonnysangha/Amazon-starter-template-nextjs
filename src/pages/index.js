import Head from "next/head";
import Banner from "../Components/Banner";
import Header from "../Components/Header"
export default function Home() {
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
        </main>
    
    </div>
  );
}
