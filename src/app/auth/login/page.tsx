"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);


    const validet = () => {
        if (!email || !password) {
            return false;
        }
        return true
    }

    const handleLogin = async () => {
        const Isvalid = validet();
        if (Isvalid) {
            setLoading(true);
            const userr = {
                email,password
            }
            try {
                const response = await fetch("/api/user/login", {
                    method: "POST",
                    headers: {
                        "content-type": "applicetion/json"
                    }, body: JSON.stringify(userr)
                })
                console.log(response)
                const res = await response.json();
            } catch (error: any) {
                console.log(error.message);
            } finally {
                setLoading(false)
            }
        }else{
            return console.log("invalid user data")
        }

    }
    return (
        <>
  
            <div className='flex md:flex-row '>
            <div className='w-[100%] border-2 md:w-[30%]  h-[calc(100svh)]  md:flex md:justify-center  text-black '>
                <div className=" login-card md:rounded-t-lg md:py-10 md:mx-5 md:bg-transparent backdrop-blur-2xl  ">
                    <div className='text-center text-yellow-100 capitalize mt-8 mb-7'>
                        <p className='text-xl font-mono'>login in</p>
                    </div>
                    <div className='px-2'>
                        <div className='my-5'>
                            <input type='email' className='px-3 w-[100%] placeholder-red-black py-2 rounded-md backdrop-blur-2xl focus:bg-slate-200 focus:transition-all focus:duration-700' placeholder='email address' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        <div>
                            <input type='password' className='px-3 w-[100%] placeholder-red-black py-2 rounded-md backdrop-blur-2xl focus:bg-slate-200 focus:transition-all focus:duration-700' placeholder='password' value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }}></input>
                            <p className='text-sm text-blue-400 underline'><Link href="/resetpass">forget password</Link></p>
                        </div>
                        <div className='flex flex-col mt-3 '>
                            <input onClick={handleLogin} readOnly type='submit' disabled={loading} value={loading ? "lodding..." : "login"} className={`capitalize px-9 py-3 md:px-3  rounded-lg bg-green-400 hover:text-white transition-all duration-100 ${loading ? " cursor-wait" : "cursor-pointer"} `} />
                            <button className='underline text-white mt-2'><Link href="/auth/signup">dont have account  sign up</Link></button>
                        </div>

                    </div>

                </div>
                {/* md:bg-[url('/pexels-adrian-dorobantu-989175-2300334.jpg')]   */}
            </div>
            <div className="md:h-[calc(100svh)] md:w-[70%] md:bg-[url('/pexels-adrian-dorobantu-989175-2300334.jpg')] bg-cover " >
            </div>

        </div>
        </>
    )
}


export default page