import React from 'react'
import Sidbar from './sidbar';
import { ArrowDownWideNarrow, Filter, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function productlistPageMain() {
    return (
        <div className='bg-slate-500'>
            <div className='max-w-[1120px]  mx-auto pt-4 pb-11'>
                <div className='flex justify-between flex-wrap'>
                    <div>
                        <input type='text' className="px-9 font-bold text-xs py-3 capitalize" placeholder='nike air max'></input>
                        <Search className='text-blue-400 relative h-7 -top-9 left-2' />
                    </div>
                    <div className='inline-flex justify-between gap-2'>
                        <Link href="#"><ArrowDownWideNarrow className='h-8 w-8' /></Link>
                        <Link href="#"><Filter className='h-8 w-8 text-violet-500' /></Link>
                    </div>
                </div>
                <div className='capitalize md:w-[70%] flex justify-between py-5'>
                    <div className='opacity-50 text-gray-100'><p>123 result</p></div>
                    <div className='inline-flex gap-1  font-bold'>
                        <select className='capitalize cursor-pointer bg-transparent'>
                            <option className='bg-black outline-none'>men shoes</option>
                            <option className='bg-black outline-none'>women shoes</option>
                        </select>
                    </div>
                </div>
                <div className='md:flex flex-row justify-between'>
                    <div className='md:w-[70%]'>
                        <div className='cards place-items-center grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-2 gap-y-3'>
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                            <div className="card  bg-slate-400 w-36">
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
                        <div >
                            <div className='pt-11'>
                                <div className='w-[100%] h-2 bg-slate-900'></div>
                                <div className='flex justify-between py-5'>
                                    <div className=''><p className='text-2xl font-robotoSlab underline text-white'>Related results</p></div>
                                </div>
                                <div className='cards  grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-2'>
                                    <div className="card rounded-md  bg-slate-400 w-36">
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
                                    <div className="card rounded-md  bg-slate-400 w-36">
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
                                    <div className="card rounded-md  bg-slate-400 w-36">
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
                                    <div className="card rounded-md  bg-slate-400 w-36">
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
                                    <div className="card rounded-md  bg-slate-400 w-36">
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
                                    <div className="card rounded-md  bg-slate-400 w-36">
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
                            <div className='pt-11'>
                                <div className='w-[100%] h-2 bg-slate-900'></div>
                                <div className='flex justify-between py-5'>
                                    <div className=''><p className='text-2xl font-robotoSlab text-white'>Commenly Used Products</p></div>
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
                    </div>
                    <Sidbar />
                </div>
            </div>
        </div>

    )
}

export default productlistPageMain
