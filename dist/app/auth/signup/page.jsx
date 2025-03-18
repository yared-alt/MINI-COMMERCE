"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const validet = () => {
        if (!email || !password || !name) {
            return false;
        }
        return true;
    };
    const handleSignup = async () => {
        const Isvalid = validet();
        if (Isvalid) {
            setLoading(true);
            const userr = {
                name, email, password
            };
            try {
                const response = await fetch("/api/user/signup", {
                    method: "POST",
                    headers: {
                        "content-type": "applicetion/json"
                    }, body: JSON.stringify(userr)
                });
                console.log(response);
                const res = await response.json();
                console.log(res);
                if (res.massage == "sucsesfully registerd") {
                    router.push("/auth/login");
                }
            }
            catch (error) {
                console.log(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        else {
            return console.log("user is not valid");
        }
    };
    return (<div className='flex md:flex-row '>
            <div className='w-[100%] border-2 md:w-[30%]   h-[calc(100svh)]  md:flex md:justify-center  text-black '>
                <div className=" login-card md:rounded-t-lg md:py-10 md:mx-5 md:bg-transparent backdrop-blur-2xl  ">
                    <div className='text-center text-yellow-100 capitalize mt-8 mb-7'>
                        <p className='text-xl font-mono'>create account</p>
                    </div>
                    <div className='px-2'>
                        <div className='my-5'>
                            <input type='email' className='px-3 w-[100%] py-2 rounded-md backdrop-blur-2xl  placeholder-red-black focus:duration-700' placeholder='name' value={name} onChange={(e) => {
            setName(e.target.value);
        }}></input>
                        </div>
                        <div className='my-5'>
                            <input type='email' className='px-3 w-[100%] placeholder-red-black py-2 rounded-md backdrop-blur-2xl  focus:duration-700' placeholder='email address' value={email} onChange={(e) => {
            setEmail(e.target.value);
        }}></input>
                        </div>
                        <div>
                            <input type='password' className='px-3 w-[100%] placeholder-red-black py-2 rounded-md backdrop-blur-2xl
                                focus:duration-700' placeholder='password' value={password} onChange={(e) => {
            setPassword(e.target.value);
        }}></input>
                        </div>
                        <div className='flex flex-col mt-6'>
                            <input onClick={handleSignup} readOnly type='submit' disabled={loading} value={loading ? "lodding..." : "signup"} className={`capitalize px-9 py-3 md:px-3  rounded-lg bg-green-400 hover:text-white      ${loading ? " cursor-wait" : "cursor-pointer"} `}/>
                            <button className='underline text-white mt-2'> <Link href="/auth/login">login in</Link></button>
                        </div>
                        <div className='mt-9 tracking-widest  text-center'>
                            <button className='rounded-full md:rounded-none w-[100%] py-3  bg-slate-300'>SignUp with google</button>
                            <button className='rounded-full md:rounded-none w-[100%] py-3 my-3  bg-slate-300'>SignUp with github</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:h-[calc(100svh)] md:w-[70%] md:bg-[url('/pexels-adrian-dorobantu-989175-2300334.jpg')] bg-cover ">
            </div>

        </div>);
};
export default page;
