import React from 'react'
import Image from "next/image"
import { MenuAlt1Icon, MenuIcon, SearchCircleIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
function Header() {
    return (
        <header>
            <div className=" flex items-center bg-amazon_blue  flex-grow p-1 py-2 " >
                <div className=" mt-2 flex items-center sm:flex-grow-0 " >
                    <Image src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer" />
                </div>

                <div className=" hidden sm:flex items-center h-10 rounded-md
                   cursor-pointer flex-grow  bg-yellow-400 hover:bg-yellow-500 " >
                    <input className="  flex-grow p-2 h-full w-6 flex-shrink rounded-l-md  focus:outline-none" type="text" />
                    {/* <SearchCircleIcon /> */}
                    <SearchIcon className=" h-12 p-4 " />
                </div>
                <div className="  flex items-center text-xs space-x-6 text-white px-6 whitespace-nowrap  " >
                    <div className="  link " >
                        <p>Hello Atul Yadav</p>
                        <p className=" font-extrabold md:text-sm" > Account & Lists</p>
                    </div>
                    <div className="  link" >
                        <p>Returns</p>
                        <p className=" font-extrabold md:text-sm" >&Orders</p>
                    </div>
                    <div className="   flex items-center relative" >
                        {/* absolute without parent Relative will be absolute to the screen */}
                        <span className=" absolute top-0 right-0 md:right-10 h-4 w-4
                           bg-yellow-400  text-center rounded-full  font-bold " >0</span>
                        <ShoppingCartIcon className=" h-10 " />
                        <p className=" font-extrabold md:text-sm hidden md:inline mt-2 " >Basket</p>
                    </div>

                </div>
            </div>

            <div className=" flex items-center space-x-3  p-2 pl-3 bg-amazon_blue-light text-white text-small " >
                  <p className="link flex" >
                      <MenuIcon className =" h-6 pr-1 " />
                      All
                  </p>
                 <p className="link" >Prime Video</p>
                 <p className="link" >Amazon Business</p>
                 <p className="link" >Todays Deals</p>
                 <p className="link hidden lg:inline-flex" >Eletronics</p>
                 <p className="link hidden lg:inline-flex" >Food & Grocery</p>
                 <p className="link hidden lg:inline-flex" >Buy Again</p>
                 <p className="link hidden lg:inline-flex" >Shopper Toolkit</p>
                 <p className="link hidden lg:inline-flex" >Health And Personal Care</p>
            </div>
        </header>
    )
}

export default Header
