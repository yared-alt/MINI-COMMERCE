"use client";
// import SecureProduct from "$/app/product/page"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function SecureProduct({ products, maxw }) {
    return (<div className={`${maxw}`}>
      <div>
        <Swiper slidesPerView={1} navigation={true} spaceBetween={60} breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }} modules={[Pagination, Navigation]} className="mySwiper">
          <div className=' mx-auto'>
          {products && products.map((pro) => (<SwiperSlide key={pro.id}>

             <div key={pro.id} className="product__card ml-7 min-w-36  max-w-64   ">
             <div className=" border-2 pb-4 h-auto  bg-slate-100">
               <Link href={`/product/${pro.id}`}>
                 <div className="product__image overflow-hidden">
                   <Image src={'https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741891234/Screenshot_2025-03-13_213033_mglwkk.png'} className="block  brightness-100 hover:brightness-75 hover:transition-all duration-500 hover:scale-105 w-[260px] h-[179px] rounded-md mx-auto  " width="800" height="800" alt=""/>
                 </div>
                 <div className="product__catagory  opacity-25  font-bold text-center text-xs text-gray-700 py-2 ">
                   <p className="leading-3 break-words mx-auto max-w-[70%] block">{pro.category}</p>
                 </div>

                 <div className="product__name capitalize font-robotoSlab font-bold tracking-tighter md:text-lg text-center  leading-5">
                   <p className="max-w-[100%] mx-auto">{pro.title}</p>
                 </div>
                 <div className="product__price text-base text-center py-1 font-serif font-bold opacity-55 ">
                   <p className="tracking-wider">$<span>{pro.price}</span></p>
                 </div>
               </Link>
               <div className="product__size ">
                 <div className="grid gap-y-2 py-2 font-bold opacity-60 grid-cols-[repeat(auto-fit,minmax(60px,1fr))] text-xs md:text-sm ">

                   <p className=" text-center border-2 border-gray-300 hover:border-black  max-w-[60px] ">20-24</p>
                   <p className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">33</p>
                   <p className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">40-44</p>
                 </div>
               </div>
               <div className="product__color mt-3 max-w-[80%] mx-auto">
                 <div className=" grid gap-y-2 grid-cols-[repeat(auto-fit,minmax(30px,1fr))]">
                   <Link href={`product/product_id/{pro.color.id}`}>
                     <input type="radio" className="w-12 h-6 cursor-pointer selected " value="gray"></input>
                   </Link>
                   <Link href="product/product_id/color_name">
                     <input type="radio" className="w-12 cursor-pointer bg-gray-200 text-red-700 h-6 " value="blue"></input>
                   </Link>
                   <Link href="product/product_id/color_name">
                     <input type="radio" className="w-12 cursor-pointer bg-gray-200 h-6 " value="red"></input>
                   </Link>
                   <Link href="product/product_id/color_name">
                     <input type="radio" className="w-12 cursor-pointer bg-gray-200 h-6 " value="white"></input>
                   </Link>
                 </div>
               </div>
             </div>
           </div>
            {/* // <SwiperSlide key={pro.id}> */}

              <div key={pro.id} className="product__card ml-7 min-w-36  max-w-64   ">
                <div className=" border-2 pb-4 h-auto  bg-slate-100">
                  <Link href={`/product/${pro.id}`}>
                    <div className="product__image overflow-hidden">
                      <Image src={'https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741885732/Screenshot_2025-03-13_200321_flp3om.pnghttps://res.cloudinary.com/dr1ejpdn8/image/upload/v1741885730/Screenshot_2025-03-13_195847_hghadz.pnghttps://res.cloudinary.com/dr1ejpdn8/image/upload/v1741885730/Screenshot_2025-03-13_195909_qvc7yd.png'} className="block  brightness-100 hover:brightness-75 hover:transition-all duration-500 hover:scale-105 w-[260px] h-[179px]  rounded-md mx-auto  " width="800" height="800" alt=""/>
                    </div>
                    <div className="product__catagory  opacity-25  font-bold text-center text-xs text-gray-700 py-2 ">
                      <p className="leading-3 break-words mx-auto max-w-[70%] block">{pro.category}</p>
                    </div>

                    <div className="product__name capitalize font-robotoSlab font-bold tracking-tighter md:text-lg text-center  leading-5">
                      <p className="max-w-[100%] mx-auto">{pro.title}</p>
                    </div>
                    <div className="product__price text-base text-center py-1 font-serif font-bold opacity-55 ">
                      <p className="tracking-wider">$<span>{pro.price}</span></p>
                    </div>
                  </Link>
                  <div className="product__size ">
                    <div className="grid gap-y-2 py-2 font-bold opacity-60 grid-cols-[repeat(auto-fit,minmax(60px,1fr))] text-xs md:text-sm ">

                      <p className=" text-center border-2 border-gray-300 hover:border-black  max-w-[60px] ">20-24</p>
                      <p className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">33</p>
                      <p className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">40-44</p>
                    </div>
                  </div>
                  <div className="product__color mt-3 max-w-[80%] mx-auto">
                    <div className=" grid gap-y-2 grid-cols-[repeat(auto-fit,minmax(30px,1fr))]">
                      <Link href={`product/product_id/{pro.color.id}`}>
                        <input type="radio" className="w-12 h-6 cursor-pointer selected " value="gray"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 text-red-700 h-6 " value="blue"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 h-6 " value="red"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 h-6 " value="white"></input>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div key={pro.id} className="product__card ml-7 min-w-36  max-w-64   ">
                <div className=" border-2 pb-4 h-auto  bg-slate-100">
                  <Link href={`/product/${pro.id}`}>
                    <div className="product__image overflow-hidden">
                      <Image src={'https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741885732/Screenshot_2025-03-13_200321_flp3om.png'} className="block  brightness-100 hover:brightness-75 hover:transition-all duration-500 hover:scale-105 w-[260px] h-[179px] rounded-md mx-auto  " width="800" height="800" alt=""/>
                    </div>
                    <div className="product__catagory  opacity-25  font-bold text-center text-xs text-gray-700 py-2 ">
                      <p className="leading-3 break-words mx-auto max-w-[70%] block">{pro.category}</p>
                    </div>

                    <div className="product__name capitalize font-robotoSlab font-bold tracking-tighter md:text-lg text-center  leading-5">
                      <p className="max-w-[100%] mx-auto">{pro.title}</p>
                    </div>
                    <div className="product__price text-base text-center py-1 font-serif font-bold opacity-55 ">
                      <p className="tracking-wider">$<span>{pro.price}</span></p>
                    </div>
                  </Link>
                  <div className="product__size ">
                    <div className="grid gap-y-2 py-2 font-bold opacity-60 grid-cols-[repeat(auto-fit,minmax(60px,1fr))] text-xs md:text-sm ">

                      <p className=" text-center border-2 border-gray-300 hover:border-black  max-w-[60px] ">20-24</p>
                      <p className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">33</p>
                      <p className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">40-44</p>
                    </div>
                  </div>
                  <div className="product__color mt-3 max-w-[80%] mx-auto">
                    <div className=" grid gap-y-2 grid-cols-[repeat(auto-fit,minmax(30px,1fr))]">
                      <Link href={`product/product_id/{pro.color.id}`}>
                        <input type="radio" className="w-12 h-6 cursor-pointer selected " value="gray"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 text-red-700 h-6 " value="blue"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 h-6 " value="red"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 h-6 " value="white"></input>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div key={pro.id} className="product__card ml-7 h-[459px] min-w-36  max-w-64   ">
                <div className=" border-2 pb-4 h-auto  bg-slate-100">
                  <Link href={`/product/${pro.id}`}>
                    <div className="product__image overflow-hidden">
                      <Image src={'https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741695003/mini-commerce/rz4xotboh303eqbjrpjn.jpg'} className="block  brightness-100 hover:brightness-75 hover:transition-all duration-500 hover:scale-105 w-[260px] h-[179px] rounded-md mx-auto  " width="800" height="800" alt=""/>
                    </div>
                    <div className="product__catagory  opacity-25  font-bold text-center text-xs text-gray-700 py-2 ">
                      <p className="leading-3 break-words mx-auto max-w-[70%] block">{pro.category}</p>
                    </div>

                    <div className="product__name capitalize font-robotoSlab font-bold tracking-tighter md:text-lg text-center  leading-5">
                      <p className="max-w-[100%] mx-auto">{pro.title}</p>
                    </div>
                    <div className="product__price text-base text-center py-1 font-serif font-bold opacity-55 ">
                      <p className="tracking-wider">$<span>{pro.price}</span></p>
                    </div>
                  </Link>
                  <div className="product__size ">
                    <div className="grid gap-y-2 py-2 font-bold opacity-60 grid-cols-[repeat(auto-fit,minmax(60px,1fr))] text-xs md:text-sm ">

                      <p className=" text-center border-2 border-gray-300 hover:border-black  max-w-[60px] ">20-24</p>
                      <p className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">33</p>
                      <p className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">40-44</p>
                    </div>
                  </div>
                  <div className="product__color mt-3 max-w-[80%] mx-auto">
                    <div className=" grid gap-y-2 grid-cols-[repeat(auto-fit,minmax(30px,1fr))]">
                      <Link href={`product/product_id/{pro.color.id}`}>
                        <input type="radio" className="w-12 h-6 cursor-pointer selected " value="gray"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 text-red-700 h-6 " value="blue"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 h-6 " value="red"></input>
                      </Link>
                      <Link href="product/product_id/color_name">
                        <input type="radio" className="w-12 cursor-pointer bg-gray-200 h-6 " value="white"></input>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>))}
          
          </div>

        </Swiper>





        {/* ................................................... */}
        {/* </div> */}
      </div>
    </div>);
}
export default SecureProduct;
