import React from 'react'
import Image from 'next/image'

function showcase({maxw}) {
  return (
    <div className='bg-gradient-to-l from-zinc-800  via-zinc-400 via-70% to-slate-300:'>
            <div className={`${maxw} show_case  py-7 pb-24 px-5 md:flex md:justify-end`}>
        <div className="show_case_card w-[90%] mx-auto md:mx-0  max-w-[380px] border-2 pb-4">
          <div className="show_case_Image">
            <Image src={'/close-up-person-wearing-futuristic-sneakers.jpg'} className="block  hover:brightness-75 hover:transition-all duration-500  mx-auto  w-full h-auto" width="130" height="220" alt="" />
          </div>
          <div className="show_case_title capitalize w-[100%] text-center py-3 px-1">
            <p className="text-2xl md:text-3xl italic font-thin bg-clip-text  bg-gradient-to-tr from-black from-40% brightness-200 via-red-700 to-yellow-400 text-transparent -tracking-wider font-robotoSlab">explore our exquistic shoes collection now!</p>
          </div>
          <div className="show_case_action_btn  text-center font-mono">
            <button className="py-1 md:py-2 px-5 md:px-9 text-sm md:text-lg tracking-widest bg-transparent border-2 border-opacity-25 border-gray-900 hover:bg-gray-200 hover:border-white hover:brightness-200 hover:transition-all duration-400
            
            bg-clip-text  bg-gradient-to-tr from-yellow-500 from-50% brightness-200 via-red-700 to-yellow-400 text-transparent
            
           "> view collection</button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default showcase
