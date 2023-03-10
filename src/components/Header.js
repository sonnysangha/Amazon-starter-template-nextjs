import Image from "next/image";
import { SearchIcon , ShoppingCartIcon ,MenuIcon} from "@heroicons/react/outline"
function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0" >
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input type='text' className="p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Sandhya</p>
            <p className="font-extrabold md:text-sm ">Accounts & Lists</p>
          </div>
          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className=" relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
            <ShoppingCartIcon className="h-10"/>
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>

          </div>
        </div>
      </div>


      <div className="flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"/>All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>

      </div>
      
    </header>

  )
}
export default Header