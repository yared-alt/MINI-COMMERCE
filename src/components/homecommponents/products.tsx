// import SecureProduct from "$/app/product/page"
import Link from 'next/link'
// import { useCart } from '$/context/cartContext'

import Swiper from "$/components/homecommponents/swiper"
import Image from 'next/image'

type Products={
  _id:string
  ProductCatagory:string
  ProductPrice:number
  ProductSize:string[]
  ProductColors:string[]
  FrontImage:string
  ProductImage:string[]
  ProductName:string
  Review:number
  ProductDescription:string
}

function SecureProduct({ products, maxw }:{products:Products[],maxw:string}) {
const data=products;
// console.log(data)
  return (
    <div className={`${maxw}`}>
      <div className="swiper-container">
        <div className="swiper-wrapper ">
          {
            data && data.map((pro) => (
              <div key={pro._id} className="swiper-slide  w-[100%]  sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="product__card  mx-auto h-[459px] min-w-36   max-w-64   ">
                  <div className=" border-2 pb-4 h-auto bg-slate-100">
                    <Link href={`/product/${pro._id}`}>
                      <div className="product__image overflow-hidden">
                        <Image src={`https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741885737/${pro.FrontImage}`} className="block  brightness-100 hover:brightness-75 hover:transition-all duration-500 hover:scale-105 w-[260px] h-[179px] rounded-md mx-auto  " width="800" height="800" alt={pro.ProductName} />
                      </div>
                      <div className="product__catagory  opacity-25  font-bold text-center text-xs text-gray-700 py-2 ">
                        <p className="leading-3 break-words mx-auto max-w-[70%] block">{pro.ProductCatagory}</p>
                      </div>
                      <div className="product__name capitalize font-robotoSlab font-bold tracking-tighter md:text-lg text-center  leading-5">
                        <p className="max-w-[100%] mx-auto">{pro.ProductName}</p>
                      </div>
                      <div className="product__price text-base text-center py-1 font-serif font-bold opacity-55 ">
                        <p className="tracking-wider">$<span>{pro.ProductPrice}</span></p>
                      </div>
                    </Link>
                    <div className="product__size  h-16">
                      <div className="grid gap-y-2 py-2 font-bold opacity-60 grid-cols-[repeat(auto-fit,minmax(60px,1fr))] text-xs md:text-sm ">
                        {pro.ProductSize && pro.ProductSize.map((size,i)=>(
                          <p key={i} className="text-center border-2 border-gray-300 hover:border-black max-w-[60px]">{size}</p>
                        ))}
                      </div>
                    </div>
                    <div className="product__color mt-3 max-w-[80%] mx-auto text-center">
                      <div className=" grid gap-y-2 grid-cols-[repeat(auto-fit,minmax(30px,1fr))]">
                        {
                          pro.ProductColors && pro.ProductColors.map((color,i)=>(
                        <Link key={i} href={`product/${pro._id}}`}>
                          <input type="button" className="w-auto  py-1 border border-black px-4  inline-flex align-middle cursor-pointer selected" value={color}></input>
                        </Link>

                          ))
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <Swiper />
    </div>
  )
}

export default SecureProduct
