import React from 'react';
function service({ maxw }) {
    return (<div className=' bg-slate-50 text-black'>
           <div className={`${maxw} service py-24`}>
        <div className="flex justify-around flex-row gap-4 flex-wrap">
          <div className="one max-w-64 px-2 border-2 text-center">
            <div className="icon text-3xl md:text-4xl py-3">
              <p>🔐</p>
            </div>
            <div className="title capitalize font-robotoSlab text-xl italic font-bold">
              <p>secure payment</p>
            </div>
            <div className="description opacity-45 font-roboto text-sm md:text-lg py-4">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis!</p>
            </div>
          </div>
          <div className="one max-w-64 px-2 border-2 text-center">
            <div className="icon text-3xl md:text-4xl py-3">
              <p>🚛</p>
            </div>
            <div className="title capitalize font-robotoSlab text-xl italic font-bold">
              <p>free shiping</p>
            </div>
            <div className="description opacity-45 font-roboto text-sm md:text-lg py-4">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis!</p>
            </div>
          </div>
          <div className="one max-w-64 px-2 border-2 text-center">
            <div className="icon text-3xl md:text-4xl py-3">
              <p>🎈</p>
            </div>
            <div className="title capitalize font-robotoSlab text-xl italic font-bold">
              <p>order tracking</p>
            </div>
            <div className="description opacity-45 font-roboto text-sm md:text-lg py-4">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis!</p>
            </div>
          </div>
          <div className="one max-w-64 px-2 border-2 text-center">
            <div className="icon text-3xl md:text-4xl py-3">
              <p>🔁</p>
            </div>
            <div className="title capitalize font-robotoSlab text-xl italic font-bold">
              <p>easy return</p>
            </div>
            <div className="description opacity-45 font-roboto text-sm md:text-lg py-4">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis!</p>
            </div>
          </div>
        </div>
      </div>

    </div>);
}
export default service;
