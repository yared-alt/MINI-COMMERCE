import Link from 'next/link'
import React from 'react'

function footer() {
    return (
        <div className='box-border bg-gray-400'>
            <div className='max-w-[1280px] mx-auto'>
                <div className=" footer py-24 text-white">
                    <div className="border-2 border-black flex flex-col p-4 md:flex-row ">
                        <div className="one md:min-w-[50%] flex  flex-row  md:flex-col  px-2 text-center">
                            <div className=' flex mx-auto my-auto'>
                                <h1 className='font-robotoSlab tracking-wider my-auto font-thin '>MINI-COMMERCE</h1>
                            </div>
                        </div>
                        <div className=" w-[100%] flex flex-cols justify-around gap-2">
                            <div>
                                <div className="title text-red-900 capitalize font-robotoSlab text-lg italic font-bold">
                                    <p>menu</p>
                                </div>
                                <div className="description  font-roboto text-lg md:text-lg py-1">

                                    <ul className="tracking-wider text-[.9rem] capitalize ">
                                        <Link href={"/home"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">home</li></Link>
                                        <Link href={"/products"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">shop</li></Link>
                                        <Link href={"/aboutus"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">about us</li></Link>
                                        <Link href={"/contact"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">contact</li></Link>
                                    </ul>
                                </div>
                                <div className="title text-red-900 capitalize font-robotoSlab text-lg italic font-bold">
                                    <p>catagories</p>
                                </div>
                                <div className="description  font-roboto text-lg md:text-lg py-1">

                                    <ul className="tracking-wider text-[.9rem]  capitalize ">
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">sport</li></Link>
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">bussiness</li></Link>
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">comfort</li></Link>
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">lesiure</li></Link>
                                    </ul>
                                </div>
                            </div>
                            <div className=" ">

                                <div className="title text-red-900 capitalize font-robotoSlab text-lg italic font-bold">
                                    <p>resources</p>
                                </div>
                                <div className="description  font-roboto text-lg md:text-lg py-1">
                                    <ul className="tracking-wider text-[.9rem]  capitalize ">
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">contact support</li></Link>
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">FAQ</li></Link>
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">feadback</li></Link>
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">return</li></Link>
                                    </ul>
                                </div>
                                <div className="title text-red-900 capitalize font-robotoSlab text-lg italic font-bold">
                                    <p>social media</p>
                                </div>
                                <div className="description  font-roboto text-lg md:text-lg py-1">
                                    <ul className="tracking-wider text-[.9rem] capitalize">

                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">facebook</li></Link>
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">X</li></Link>
                                        <Link href={"/"}><li className="hover:text-black  hover:underline -tracking-wider  mt-2 cursor-pointer hover:transition-all duration-500">instagram</li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
