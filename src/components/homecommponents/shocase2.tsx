import React from 'react'
import Image from 'next/image'

function shocase2({maxw}) {
  return (
    <div>
    <div className='bg-gradient-to-r from-zinc-800  via-zinc-400 via-70% to-slate-300 '>
        <div className={` ${maxw} show_case   py-7 pb-24 px-5 `}>
          <div className="show_case_card w-[90%] mx-auto md:mx-0  max-w-[380px] border-2 pb-4 relative -top-28">
            <div className="show_case_Image ">
              <Image src={'/pexels-melvin-buezo-1253763-2529148.jpg'} className="block  hover:brightness-75 hover:transition-all duration-500  mx-auto  w-full h-auto" width="130" height="220" alt="" />
            </div>
            <div className="show_case_title capitalize w-[100%] text-center py-3 px-1">
              <p className="text-2xl md:text-3xl italic font-thin bg-clip-text  bg-gradient-to-tr from-white from-40% brightness-200 via-red-700 to-yellow-400 text-transparent -tracking-wider font-robotoSlab">discover the allure of modern shoes</p>
            </div>
            <div className="text-sm text-center  tracking-widest opacity-80 font-serif my-2 mb-8">
              <p>dive into theworld of style with our latest collection! Shop now and redefine your wardrob narrative!</p>
            </div>
            <div className="show_case_action_btn  text-center font-mono">
              <button className="uppercase py-1 md:py-2 px-5 md:px-9 text-sm md:text-lg tracking-widest bg-transparent border-2 border-opacity-25 border-gray-900 hover:bg-gray-200 hover:border-white hover:brightness-200 hover:transition-all duration-400
            
            bg-clip-text  bg-gradient-to-tr from-yellow-500 from-50% brightness-200 via-red-700 to-yellow-400 text-transparent
            
           "> shop now</button>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default shocase2
