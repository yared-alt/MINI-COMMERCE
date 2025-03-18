"use client";
import React from 'react';
import Link from 'next/link';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
function sidbar() {
    return (<div className=' px-9 py-7 border-2 h-[100vh] bg-slate-600'>

    <div>
        <div className='capitalize'>
            <p className=' font-bold py-3'>catagory</p>
            <ul className='list-none flex-col flex gap-y-2 opacity-45'>
                <Link href="#"><li className='text-cyan-300 underline opacity-100!'>sport</li></Link>
                <Link href="#"><li>modern</li></Link>
                <Link href="#"><li>business</li></Link>
                <Link href="#"><li>leather</li></Link>
            </ul>
        </div>
        <div className='capitalize'>
            <p className='font-bold py-3'>color</p>
            <ul className=' list-none flex gap-y-2 flex-col opacity-45'>
                <Link href="#"><li>black</li></Link>
                <Link href="#"><li>blue</li></Link>
                <Link href="#"><li>red</li></Link>
                <Link href="#"><li>grey</li></Link>
            </ul>
        </div>
    </div>
    <div>
        <Slider range min={4} max={800} defaultValue={[300, 500]}/>
        <div className='flex  justify-between gap-7 mt-3'>
            <p className='opacity-80'>price $4 - $120</p>
            <button className='cursor-pointer bg-neutral-500 py-1 px-4'>filter</button>
        </div>
    </div>
    </div>);
}
export default sidbar;
