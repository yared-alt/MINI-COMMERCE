"use client";
import Image from "next/image";
import React from 'react';
import Sidbar from "../productlistsMAin/sidbar";
import { useCart } from "$/context/cartContext";
import Link from "next/link";
function procuctdetail({ info }) {
    const { addtocart, removeFromCart, individualcart } = useCart();
    const productcartinfo = individualcart(info.id);
    return (<div className="">
      <div className=" max-w-[1280px] md:flex  gap-9 left-0  md:py-11 mx-auto  ">
        <div>
          <div className="card px-1 md:px-0 md:flex md:flex-row  md:mx-auto ">
            <div className=" md:border-0 ">
              <div className="back_icon absolute  md:hidden">
                <p className="text-white">🔙sssssssss</p>
              </div>
              <div className=" md:flex md:flex-col border-y-2 border-l-2 w-[100%] md:w-[380px] h-[100%]">
                <div className="image block h-80  w-[100%] md:mr-5 bg-[url('https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741695003/mini-commerce/rz4xotboh303eqbjrpjn.jpg')]  md:bg-center bg-cover bg-repeat-x bg-center">
                {/* /pexels-melvin-buezo-1253763-2529148.jpg' */}
                </div>
                <div className=" flex overflow-x-scroll scrollbar-thin text-justify overflow-y-hidden gap-x-4 border-x-2 border-y-2 md:border-x-0 md:max-w-96   py-2">
                  <div className="flex-none w-20 h-20 bg-red-400"></div>
                  <div className="flex-none w-20 h-20 bg-red-400"></div>

                </div>
              </div>
            </div>
            <div className="px-2 border-2 ">
              <div>
                <div className="product_info border-b-2 md:border-b-0 md:py-4 border-gray-400">
                  <div className="flex flex-cols justify-between">
                    <div className="Productname ">
                      <p className="capitalize text-xl">{info.title}</p>
                      <div className="flex flex-cols justify-between  flex-wrap my-2">
                        <input className="w-24 h-7 px-2 uppercase" disabled value="200 sold"/>
                        <p className="ml-1 mt-2">⭐ 4.3 (53 reviews )</p>
                      </div>
                    </div>
                    <div className="favoriteIcon md:mr-8 ">
                      <p>❤️</p>
                    </div>
                  </div>
                </div>
                <div className="Product_discription border-b-2 border-gray-300 pb-2">
                  <div>
                    <p className="text-lg">Description</p>
                  </div>
                  <div>
                    <p className="text-sm mt-1">Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Recus andae, et duc imus laborum asperiores odit dolo rem maiores cupi ditate modi odio fac ilis!</p>
                  </div>
                  <div className="md:border-b-0 md:py-4 grid  gap-x-5 grid-cols-[repeat(auto-fit,minmax(130px,1fr))] ">
                    <div className="size">
                      <p className="capitalize text-lg">size</p>
                      <ul className="flex gap-1 text-sm">
                        <li className="border-2 border-gray-300 rounded-full py-[5px] px-2 hover:bg-gray-400 hover:text-black transition-all duration-1000 cursor-pointer">32</li>
                        <li className="border-2 border-gray-300 rounded-full py-1 px-2 hover:bg-gray-400 hover:text-black transition-all duration-1000 cursor-pointer">44</li>
                        <li className="border-2 border-gray-300 rounded-full py-1 px-2 hover:bg-gray-400 hover:text-black transition-all duration-1000 cursor-pointer">43</li>
                        <li className="border-2 border-gray-300 rounded-full py-1 px-2 hover:bg-gray-400 hover:text-black transition-all duration-1000 cursor-pointer">41</li>
                      </ul>
                    </div>
                    <div className="color">
                      <p className="capitalize text-lg">color</p>
                      <ul className="flex gap-1 text-sm text-black">
                        <li className="border-2 bg-yellow-100  border-gray-300 rounded-full py-[5px] px-2 hover:bg-yellow-200 hover: transition-all duration-1000 cursor-pointer">32</li>
                        <li className="border-2 bg-red-300  border-gray-300 rounded-full py-1 px-2 hover:bg-red-500 hover: transition-all duration-1000 cursor-pointer">44</li>
                        <li className="border-2 bg-gray-200  border-gray-300 rounded-full py-1 px-2 hover:bg-gray-400 hover:text-black transition-all duration-1000 cursor-pointer">43</li>

                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 md:border-b-0 md:py-4 grid  gap-x-5 grid-cols-[repeat(auto-fit,minmax(130px,1fr))] ">
                    {/* flex flex-wrap mt-4 gap-3 justify-between */}
                    <p className="text-lg capitalize">quantity</p>
                    <div className="">
                      <input className="bg-slate-300 px-6 text-start py-1 text-black border-b-2" type="button" readOnly defaultValue={productcartinfo[0]?.quantity ? productcartinfo[0]?.quantity : "0"}></input>
                      <div className="relative -translate-y-8 translate-x-16 font-bold  text-white">
                        <button onClick={() => removeFromCart(info)} className="hover:text-red-600 px-1  text-2xl ">-</button>
                        <button onClick={() => addtocart(info)} className="hover:text-red-600 px-1  text-2xl ml-3 ">+</button>
                      </div>
                      {productcartinfo[0] && (<p>total Price : ${productcartinfo[0]?.totalPrice}</p>)}
                    </div>
                  </div>
                </div>
                <div className="call_action flex  flex-wrap justify-between  mt-2 pb-6">
                  <div>
                    <p className="text-sm opacity-40 ml-1">price</p>
                    <p className="text-lg text-gray-200">${info.price}</p>
                  </div>
                  <div className="flex">
                    <input type="submit" onClick={() => addtocart(info)} className="cursor-pointer z-0 px-8 my-auto w-40 py-1 bg-yellow-400 text-black" value={"add to cart"}>
                    </input>
                    <span className="relative top-[9px] -translate-x-9 ml-2 ">🛒</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-11 mx-auto'>
            <div className='w-[100%] h-2 bg-slate-900'></div>
            <div className='flex justify-between py-5'>
              <div className=''><p className='capitalize text-2xl font-robotoSlab text-white'>most choosen products</p></div>
            </div>
            <div className='cards grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2'>
              <div className="card rounded-sm bg-slate-400 w-36">
                <div className='p-2'>
                  <div className='mx-auto'>
                    <Image src="/df.jpg" className='bg-slate-100 w-full' width={100} height={100}></Image>
                  </div>
                  <div className='text-xs'>
                    <p className='uppercase font-bold'>nike ait max 270 react eng</p>
                    <p>❤️❤️❤️❤️</p>
                    <p className='mt-3 text-cyan-500 font-extrabold text-sm'>$299.43</p>
                    <p className='text-red-500 text-xs'><span className='opacity-40  line-through mr-3'>$654.77</span> 24% off</p>
                  </div>
                </div>
              </div>
              <div className="card rounded-sm bg-slate-400 w-36">
                <div className='p-2'>
                  <div className='mx-auto'>
                    <Image src="/df.jpg" className='bg-slate-100 w-full' width={100} height={100}></Image>
                  </div>
                  <div className='text-xs'>
                    <p className='uppercase font-bold'>nike ait max 270 react eng</p>
                    <p>❤️❤️❤️❤️</p>
                    <p className='mt-3 text-cyan-500 font-extrabold text-sm'>$299.43</p>
                    <p className='text-red-500 text-xs'><span className='opacity-40  line-through mr-3'>$654.77</span> 24% off</p>
                  </div>
                </div>
              </div>
              <div className="card rounded-sm bg-slate-400 w-36">
                <div className='p-2'>
                  <div className='mx-auto'>
                    <Image src="/df.jpg" className='bg-slate-100 w-full' width={100} height={100}></Image>
                  </div>
                  <div className='text-xs'>
                    <p className='uppercase font-bold'>nike ait max 270 react eng</p>
                    <p>❤️❤️❤️❤️</p>
                    <p className='mt-3 text-cyan-500 font-extrabold text-sm'>$299.43</p>
                    <p className='text-red-500 text-xs'><span className='opacity-40  line-through mr-3'>$654.77</span> 24% off</p>
                  </div>
                </div>
              </div>
              <div className="card rounded-sm bg-slate-400 w-36">
                <div className='p-2'>
                  <div className='mx-auto'>
                    <Image src="/df.jpg" className='bg-slate-100 w-full' width={100} height={100}></Image>
                  </div>
                  <div className='text-xs'>
                    <p className='uppercase font-bold'>nike ait max 270 react eng</p>
                    <p>❤️❤️❤️❤️</p>
                    <p className='mt-3 text-cyan-500 font-extrabold text-sm'>$299.43</p>
                    <p className='text-red-500 text-xs'><span className='opacity-40  line-through mr-3'>$654.77</span> 24% off</p>
                  </div>
                </div>
              </div>
              <div className="card rounded-sm bg-slate-400 w-36">
                <div className='p-2'>
                  <div className='mx-auto'>
                    <Image src="/df.jpg" className='bg-slate-100 w-full' width={100} height={100}></Image>
                  </div>
                  <div className='text-xs'>
                    <p className='uppercase font-bold'>nike ait max 270 react eng</p>
                    <p>❤️❤️❤️❤️</p>
                    <p className='mt-3 text-cyan-500 font-extrabold text-sm'>$299.43</p>
                    <p className='text-red-500 text-xs'><span className='opacity-40  line-through mr-3'>$654.77</span> 24% off</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center py-9'><Link href={"#"}><span className='underline tracking-wider text-blue-300 '>See More</span></Link></div>

          </div>
        </div>
        <Sidbar />
      </div>

    </div>);
}
export default procuctdetail;
