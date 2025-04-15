"use client"
import Link from 'next/link'
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Image from 'next/image';


type NewProduct={
  FrontImage:string
  ProductImage:string[]
  ProductName:string
  Review:number
  ProductDescription:string
}

function newproducts({ newProduct,maxw }:{newProduct:NewProduct,maxw:string}) {
  // console.log(maxw)
  return (
    <div className=' bg-gray-200 text-black pb-20'>
      <div className={`${maxw} newest_product`}>
        <div className="pt-7  ml-6`">
          <div className="capitalize tracking-tighter pt-6 pb-16 text-center text-4xl italic font-robotoSlab font-extrabold">
            <p className=''>newest products</p>
          </div>
          <div className="">
            <Swiper
              slidesPerView={1}
              navigation={true}
              spaceBetween={60}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className='ml-6'>
                <div className="product__card w-44   md:w-72 md:max-w-80  ">
                  <div className=" border-2 border-black pb-4   bg-slate-100">
                    <div className="product__image min-h-96">
                      <Link href="#">
                        <Image src={'https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741694998/mini-commerce/bufabebocllwdpbzzq8v.jpg'} className="block brightness-100 hover:brightness-75 hover:transition-all duration-500 md:mx-0  w-full h-[100%]" width="300" height="700" alt="" />
                      </Link>
                    </div>
                    <div className="product__catagory  opacity-25  font-bold text-center text-xs text-gray-700 py-2 ">
                      <p className="leading-3 break-words mx-auto max-w-[70%] block">Work & busssiness</p>
                    </div>
                    <div className="product__name capitalize font-robotoSlab font-bold tracking-tighter text-lg text-center  leading-5">
                      <p className="max-w-[100%] mx-auto">timeless classic collection</p>
                    </div>
                    <div className="product__price text-base text-center py-1 font-serif font-bold opacity-55 ">
                      <p className="tracking-wider">$<span>400.33</span></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product__card w-44  md:w-72 md:max-w-80  ">
                  <div className=" border-2 border-black pb-4  bg-slate-100">
                    <div className="product__image">
                      <Link href="#">
                        <Image src={'https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741695003/mini-commerce/k0axpyevow5otnd80dak.jpg'} className="block brightness-100 hover:brightness-75 hover:transition-all duration-500 md:mx-0  w-full h-auto" width="300" height="300" alt="" />
                      </Link>
                    </div>
                    <div className="product__catagory  opacity-25  font-bold text-center text-xs text-gray-700 py-2 ">
                      <p className="leading-3 break-words mx-auto max-w-[70%] block">Work & busssiness</p>
                    </div>
                    <div className="product__name capitalize font-robotoSlab font-bold tracking-tighter text-lg text-center  leading-5">
                      <p className="max-w-[100%] mx-auto">timeless classic collection</p>
                    </div>
                    <div className="product__price text-base text-center py-1 font-serif font-bold opacity-55 ">
                      <p className="tracking-wider">$<span>400.33</span></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product__card w-44  md:w-72 md:max-w-80  ">
                  <div className=" border-2 border-black pb-4  bg-slate-100">
                    <div className="product__image">
                      <Link href="#">
                        <Image src={'https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741694998/mini-commerce/bufabebocllwdpbzzq8v.jpg'} className="block brightness-100 hover:brightness-75 hover:transition-all duration-500 md:mx-0  w-full h-auto" width="230" height="220" alt="" />
                      </Link>
                    </div>
                    <div className="product__catagory  opacity-25  font-bold text-center text-xs text-gray-700 py-2 ">
                      <p className="leading-3 break-words mx-auto max-w-[70%] block">Work & busssiness</p>
                    </div>
                    <div className="product__name capitalize font-robotoSlab font-bold tracking-tighter text-lg text-center  leading-5">
                      <p className="max-w-[100%] mx-auto">timeless classic collection</p>
                    </div>
                    <div className="product__price text-base text-center py-1 font-serif font-bold opacity-55 ">
                      <p className="tracking-wider">$<span>400.33</span></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>
      </div>

    </div >
  )
}

export default newproducts
