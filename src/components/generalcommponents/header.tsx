"use client"
import { ShoppingCart,Menu,X ,Search} from "lucide-react";
import { useState,useEffect } from "react"
import Link from "next/link"

function header() {
  const [toggle,setToggle]=useState(false)
  const [prevScroll,setPrevScroll]=useState(0)
  const [allow,setAllow]=useState(false);
  const [num,setNum]=useState(0)
  useEffect(()=>{
    const handleScroll=()=>{
      
      const currentScroll=window.scrollY;
  
      const scrollup=currentScroll < prevScroll;
      if (scrollup) {
        setAllow(true);
      }else if(currentScroll >100){
        setAllow(false)
      }
      setPrevScroll(currentScroll)
    }
    setNum(window.scrollY)
    setPrevScroll(window.scrollY)

    window.addEventListener("scroll",handleScroll)

    return()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[prevScroll])

  return (
    <div >
      {/* ...........................header................................. */}
      <div className="header">
        <div className={`max-w-[1580px] w-[100%]   transition-transform   duration-700 ease-in-outz-50 bg-black/50 backdrop-blur-md mx-auto `}>
        {/* ${allow ? `top-[${num}px] translate-y-[100%]  `:"-translate-y-[50%]"} */}
          <div className="flex justify-between">

            <div className={`fixed top-0 my-auto } text-white md:block md:relative md:bg-transparent h-[100%] w-[100%] md:w-auto  md:h-auto`}>
              <div className="text-center  hidden md:block font-sans font-semibold py-8 md:py-0 ">
                <ul className={` flex flex-col md:flex-row md:flex-wrap-reverse md:gap-x-7 gap-y-5`}>
                  <Link href="/home"><input type="button" className="cursor-pointer transition-all duration-500 hover:underLinkne hover:text-gray-500 active:text-gray-600" value="Home"></input></Link>
                  <Link href="/product"><input type="button" className="cursor-pointer transition-all duration-500 hover:underLinkne hover:text-gray-500 active:text-gray-600" value="Shop"></input></Link>
                  <Link href="/aboutus"><input type="button" className="cursor-pointer transition-all duration-500 hover:underLinkne hover:text-gray-500 active:text-gray-600" value="About us"></input></Link>
                  <Link href="/contact"><input type="button" className="cursor-pointer transition-all duration-500 hover:underLinkne hover:text-gray-500 active:text-gray-600" value="Contact"></input></Link>
                </ul>
              </div>
            </div>
            {/* .............     sidbar............................. */}
            <div className={`fixed top-0 my-auto ${toggle ? "visible z-50" : "hidden"}  md:hidden md:bg-transparent bg-red-400   left-0 border-2 border-green-400    text-white  md:relative  h-[100vh] w-[100%] md:w-auto  md:h-auto`}>
              <div className=" px-4 mb-4 pt-3 md:hidden ">
                <button className={`text-xs font-thin font-mono bg-transparent hover:text-lg transition-all duration-500 ${toggle ? "block" : "hidden"} `} onClick={() => (setToggle(false))}><X/></button>
              </div>
              <div className="text-center   font-sans font-semibold py-8 mt-24 md:py-0 ">
                <ul className={`  flex flex-col md:flex-row md:flex-wrap-reverse md:gap-x-7 gap-y-5`}>
                  <Link href="/home" ><input onClick={() => (setToggle(false))} type="button" className="cursor-pointer transition-all duration-500 hover:underline hover:text-gray-500 active:text-gray-600" value="Home"></input></Link>
                  <Link href="/product"><input onClick={() => (setToggle(false))} type="button" className="cursor-pointer transition-all duration-500 hover:underline hover:text-gray-500 active:text-gray-600" value="Shop"></input></Link>

                  <Link href="/checkout"><input onClick={() => (setToggle(false))} type="button" className="cursor-pointer transition-all duration-500 hover:underline hover:text-gray-500 active:text-gray-600" value="cart"></input></Link>

                  <Link href="/aboutus"><input onClick={() => (setToggle(false))} type="button" className="cursor-pointer transition-all duration-500 hover:underline hover:text-gray-500 active:text-gray-600" value="About us"></input></Link>
                  <Link href="/contact"><input onClick={() => (setToggle(false))} type="button" className="cursor-pointer transition-all duration-500 hover:underline hover:text-gray-500 active:text-gray-600" value="Contact"></input></Link>
                </ul>
              </div>
            </div>
            <div className="text-center relative md:right-14 lg:right-4">
              <Link href="/">
                <p className="text-sm font-mono font-extrabold">MINI</p>
                <p className="text-lg font-san font-black">E-commerce
                </p>
                <p className="border-b-2 w-5 m-auto mt-1"></p>
              </Link>
            </div>
            <div className=" flex justify-end my-auto w-[20%] ">
              <div className=" md:visible invisible flex flex-row justify-end gap-x-4 w-[100%] ">
                <div className="flex mr-2">
                  <Search className="relative top-4 text-cyan-200"/>
                  {/* <input className="cursor-pointer text-xl text-red-400" type="button" value="Q"></input> */}
                </div>
                <div className="flex ml-2">
                  <Link href="/checkout" className="">
                  <div>
                  <ShoppingCart className="relative -left-4 top-4"/>
                  <span className="relative cursor-pointer  -right-1 -top-4 text-black text-sm bg-emerald-400 rounded-full h-[50%] overflow-hidden px-[0.32rem] text-center">2</span>
                  </div>
                  </Link>
                </div>

              </div>
              <div className={`my-auto flex justify-center  absolute  md:hidden ${toggle ? "hidden" : " visible"}`}>
              <div className="flex">
                  <Link href="/checkout">
                  <div>
                    <ShoppingCart className="relative top-3 -left-5"/>
                  <span className="relative ursor-pointer  -translate-x-2 -top-6 text-black text-sm bg-emerald-400 rounded-full h-[50%] overflow-hidden px-[0.4rem] text-center">2</span>
                  </div>
                  </Link>

                </div>
                <input type="button" className="border-2 text-lg p-2 cursor-pointer " onClick={() => setToggle(!toggle)} value={toggle ? "✖️" : "🟰"}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default header
