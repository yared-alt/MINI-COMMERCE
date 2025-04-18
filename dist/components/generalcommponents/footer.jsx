import React from 'react';
function footer() {
    return (<div className='box-border bg-gray-400'>
            <div className='max-w-[1280px]'>

                <div className="max-w-[880px] mx-auto footer py-24 text-white">
                    <div className="border-2 border-black flex">

                        <div className="one md:min-w-[50%] flex  flex-row  md:flex-col  px-2 text-center">
                            <div className=' flex mx-auto my-auto'>
                                <h1 className='font-robotoSlab tracking-wider my-auto font-thin '>MINI-COMMERCE</h1>
                            </div>
                        </div>
                        <div className=" w-[100%] md:flex md:flex-cols md:justify-around gap-2">
                            <div>
                                    <div className="title text-red-900 capitalize font-robotoSlab text-lg italic font-bold">
                                        <p>menu</p>
                                    </div>
                                    <div className="description opacity-45 font-roboto text-xs md:text-lg py-1">

                                        <ul className="tracking-wider text-xs capitalize ">
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">home</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">shop</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">about us</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">contact</li>
                                        </ul>
                                    </div>
                                    <div className="title text-red-900 capitalize font-robotoSlab text-lg italic font-bold">
                                        <p>catagories</p>
                                    </div>
                                    <div className="description opacity-45 font-roboto text-xs md:text-lg py-1">

                                        <ul className="tracking-wider text-xs  capitalize ">
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">sport</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">bussiness</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">comfort</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">lesiure</li>
                                        </ul>
                                    </div>
                                    <div className="title text-red-900 capitalize font-robotoSlab text-lg italic font-bold">
                                        <p>resources</p>
                                    </div>
                                    <div className="description opacity-45 font-roboto text-xs md:text-lg py-1">
                                        <ul className="tracking-wider text-xs  capitalize ">
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">contact support</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">FAQ</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">feadback</li>
                                            <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">return</li>
                                        </ul>
                                    </div>
                            </div>
                            <div className=" ">

                                <div className="title text-red-900 capitalize font-robotoSlab text-lg italic font-bold">
                                    <p>social media</p>
                                </div>
                                <div className="description opacity-45 font-roboto text-xs md:text-lg py-1">

                                    <ul className="tracking-wider text-xs capitalize w-[60%] mx-auto">

                                        <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">facebook</li>
                                        <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">X</li>
                                        <li className="hover:text-red-800 hover:opacity-50 hover:underline mt-2 cursor-pointer hover:transition-all duration-500">instagram</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
export default footer;
