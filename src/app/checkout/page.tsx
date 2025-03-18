"use client" 
// this should be ssr after
import { useCart } from '$/context/cartContext'
import Image from 'next/image';
import Link from 'next/link';
import Form from "$/components/checkoutcommponent/dataEntryForm/form"

function page() {

    const { cart, removesinglePro, getTotalPrice } = useCart();
    const total = getTotalPrice();
    const shipping = 8.00;
    const discount = 0.00;
    console.log("total", total)
    // console.log(cart)
    return (
        <div className='bg-slate-100 py-6'>
            <div className='md:flex md:mx-auto gap-x-11   md:flex-row max-w-[1100px] justify-between'>
                <Form/>
                <div className='min-w-[50%] '>
                    <div className='px-2 p-1 pb-3  bg-zinc-200 text-black mt-5 rounded-md h-auto'>
                        <div className='capitalize text-lg font-bold border-b-2 border-gray-400 py-1'>
                            <p>item</p>
                        </div>
                        <div className='border-b-2 md:max-h-[300px] overflow-y-scroll scrollbar-thin border-gray-400 py-1 pb-4'>
                            {
                                cart && cart.map(pro => (

                                    <div key={pro.id} className='mt-4 '>
                                        <div className='flex flex-row justify-between border-b border-red-200  align-middle'>
                                                <div className='w-20 h-16  relative -translate-y-5  rounded-md '>
                                                    <span className='relative z-50 -right-2 top-3 float-right px-2 py-1 bg-black text-white text-xs rounded-full'>{pro.quantity}</span>
                                                    <Image src={`https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741885737/Screenshot_2025-03-13_200710_cs5lmi.png`} className='rounded-md  relative -top-1 -z-50 h-[100%]  ' width={100} height={100} alt={'image'}></Image>
                                                </div>
                                            <div className='text-xs  my-auto w-28'>
                                                <p className='font-bold'>{pro.title}</p>
                                                <p className='mt-2  hover:underline hover:text-red-600'>
                                                    <span onClick={() => removesinglePro(pro.id)} className='opacity-65 hover:cursor-pointer '>✖️ remove</span>
                                                </p>
                                            </div>
                                            <div className='w-16 border-2 my-auto mr-1 text-end'>
                                                <span className='font-bold'>${pro.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='mt-9'>
                                <div className='flex flex-row justify-between align-middle'>
                                    <div>
                                        <div className='w-16 h-11 rounded-md bg-slate-600'>
                                            <span className='relative -top-2 left-14 px-2 py-1 bg-black text-white text-xs rounded-full'>3</span>
                                            <Image src={`https://res.cloudinary.com/dr1ejpdn8/image/upload/v1741695003/mini-commerce/rz4xotboh303eqbjrpjn.jpg`} className='min-w-[100%] min-h-[100%] block' width={100} height={100} alt={'image'}></Image>
                                        </div>
                                    </div>
                                    <div className='text-xs'>
                                        <p className='font-bold'>Lorem ipsum dolor sit.</p>
                                        <p className='mt-2  hover:underline hover:text-red-600'>
                                            <span className='opacity-65 hover:cursor-pointer '>✖️ remove</span>
                                        </p>
                                    </div>
                                    <div>
                                        <span className='font-bold'>$140.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='capitalize text-sm mt-2 border-b-2 border-gray-400 py-1 pb-3'>
                            <div className='pt-2 flex justify-between'>
                                <p className='opacity-75'>subtotal</p>
                                <p className='font-bold'>${total ? total : 0.00}</p>
                            </div>
                            <div className='pt-2 flex justify-between'>
                                <p className='opacity-75'>discount</p>
                                <p className='font-bold'>${discount ? discount : 0.00}</p>
                            </div>
                            <div className='pt-2 flex justify-between'>
                                <p className='opacity-75'>shiping</p>
                                <p className='font-bold'>${shipping ? shipping : 0.00}</p>
                            </div>
                        </div>
                        <div>
                            <div className='capitalize pt-2 flex justify-between'>
                                <p className='opacity-75 font-bold '>total</p>
                                <p className='font-bold'>${total - (discount) + shipping}</p>
                            </div>
                            <div className='mt-8 w-[85%] text-center mx-auto'>
                                <Link href="#" >
                                    <input type='submit' className=' tracking-widest bg-yellow-300  hover:bg-slate-300   outline-none    cursor-pointer capitalize px-11 py-1  text-black rounded-xl ' value={"checkout"}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
