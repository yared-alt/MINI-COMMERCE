import Link from 'next/link'
import bgimg from "/public/pexels-adrian-dorobantu-989175-2300334.jpg"
import React from 'react'

function hero({ maxw }) {
    return (
        <div
            style={{
                backgroundImage: `url(domino-studio-164_6wVEHfI-unsplash.jpg)`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: "center",
                backgroundRepeat: ' no-repeat',
            }}
            className="">
            <div className={`hero ${maxw} min-h-[590px]`} >
                <div className="text-center w-[90%] md:w-[80%] max-w-[900px] mx-auto ">
                    <div className="py-28 mb-28 px-5 opacity-100 brightness-200">
                        <div className="uppercase text-xs leading-7  tracking-widest opacity-100 font-mono ">
                            <p className=" shadow-sm  text-cyan-700">style & everyday</p>
                        </div>
                        <div className="capitalize brightness-200  leading-10 font-thin font-robotoSlab text-3xl md:text-4xl lg:text-5xl ">
                            <p>effortlessly blend comfort & style</p>
                        </div>
                        <div className="  mt-4 tracking-widest text-2xl font-extrabold leading-8">
                            <p >
                                Lorem ipsum ddolor sit, solfufta dignigos errofr cfonsectetur maiores, sapiente in molestiae assperiores, odfido vidtae deserundt quasid satque alaiquid, vedsdsro sint animi non laboriosam!
                            </p>
                        </div>
                        <div className="mt-5 tracking-widest from-neutral-50t-">
                            <Link href="/product">
                                <button className="text-center text-sm md:text-lg px-9 md:px-11 py-2 md:py-4 bg-transparent border-2 border-opacity-45 border-gray-200 hover:bg-gray-200 hover:text-black transition-all duration-1000">view collection</button>
                            </Link>
                            {/* trnsition in tailwind animation and fonts */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default hero
