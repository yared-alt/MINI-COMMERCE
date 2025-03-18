
import React from 'react'

function recommendetion({maxw}) {
  return (
    <div className=" bg-white text-black pt-40  pb-96 px-2">
          <div className={` ${maxw} `}>
        <div className="second_card max-w-[570px] border-2 border-black">
          <div className="uppercase text-xs leading-7 tracking-widest opacity-75 md:opacity-100 md:font-bold " >
            <p className="">work and office attire</p>
          </div>
          <div className="capitalize brightness-200  leading-10 font-thin font-robotoSlab text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-[4rem] -tracking-wider md:tracking-wider italic ">
            <p>professional pinstripe blazzers collection</p>
          </div>
          <div className="text-s  tracking-widest opacity-80 font-serif mt-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa in asperiores expedita ullam culpa maiores, cumque voluptatem corporis odio.</p>
          </div>
          <div className="mt-5 tracking-widest from-neutral-50t-">
            <button className="text-center px-11 py-3 my-5 bg-transparent border-2 border-opacity-45 border-gray-900 hover:bg-gray-200 hover:text-black hover:transition-all duration-400">shop now</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default recommendetion
