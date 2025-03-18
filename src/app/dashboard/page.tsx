// import Buttons from '$/components/dashboardcommponent/buttons';
import { BadgePlus, ChevronDown, ChevronsUpDown, Eye, Pencil, Trash2 } from 'lucide-react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "$/components/ui/pagination"

import Link from 'next/link'
import React from 'react'
async function page({ searchParams }: { searchParams: { page: string } }) {

    const page = parseInt((await searchParams).page || "1")
    const limit = 2;
    const {totalpages,products}= await fetcher(page, limit);
    const catagory = "all";
    return (
        <div className='text-black h-[100vh-2rem] bg-gray-200 font-normal'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='text-end pt-2'>
                    <p className='capitalize text-blue-800 font-bold'>dashboard</p>
                </div>
                <div className='flex justify-between  text-sm py-3 my-5'>
                    <div className='uppercase inline-flex gap-3'>
                        <div className=''>
                            <Link href={"/dashboard/upload"} className='flex gap-x-1' >
                                <p className=''>enter new </p>
                                {/* <Buttons type={"BadgePlus"} /> */}
                                <BadgePlus />
                            </Link>
                        </div>
                    </div>
                    <div className='capitalize inline-flex gap-3'>
                        <div className=''>
                            <Link href={"/"}>
                                <div className='flex gap-x-1'>
                                    <ChevronDown />
                                    {/* <Buttons type={"ChevronDown"}/> */}
                                    <p className=''> all <span className='opacity-30'>filter</span></p>
                                </div>
                            </Link>
                        </div>
                        <div className='uppercase'>
                            <Link href={"/"}>
                                <div className='flex gap-x-1'>
                                    <ChevronDown />
                                    {/* <Buttons type={"ChevronDown"}/> */}
                                    {/* // <ChevronDown /> */}
                                    <p> a-z <span className='opacity-30'>sort</span></p>
                                    {/* <Buttons type={"ChevronsUpDown"} /> */}
                                    <ChevronsUpDown />
                                    {/* < className='opacity-50' /> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='px-4 mb-3'>
                        <div className=' capitalize font-semibold'>
                            <ul className='flex justify-between'>
                                <li className='w-28'>action</li>
                                <li>last edited</li>
                                <li>title</li>
                                <li>date created</li>
                                <li>catagory</li>
                            </ul>
                        </div>
                    </div>
                    <div className='h-[calc(100vh-13rem)] border-x-2 border-l-red-200 border-yellow-400 overflow-y-scroll scrollbar-thin '>

                        {products && products.map((e)=>(

                            <div key={e?.id} className='px-4 py-5 bg-white mb-2'>
                                <div>
                                    <ul className='flex justify-between'>
                                        <li className='inline-flex w-20  gap-[0.25rem]'>
                                            <Link href={"/dashboard/watch"} >
                                                <Eye />
                                                {/* <Buttons type={"Eye"} /> */}
                                            </Link>
                                            <Link href={"/dashboard/edit"}>
                                                <Pencil />
                                                {/* <Buttons type={"Pencil"} /> */}
                                            </Link>
                                            <Link href={"/"}>
                                                <Trash2 />
                                                {/* <Buttons type={"Trash2"} /> */}
                                            </Link>
                                        </li>
                                        <li>{e?.id}</li>
                                        <li>nike</li>
                                        <li>{e?.catagory}</li>
                                        <li>{e?.name}</li>
                                    </ul>
                                </div>
                            </div>
                         ) )
                        }

                    </div>
                    <div className='px-4 pb-3'>
                        <div className='text-start inline-flex gap-x-2 capitalize'>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        {
                                            page && page <= 1 ? "" :
                                                <PaginationPrevious href={`/dashboard?page=${page - 1}&limit=${limit}`} />
                                        }
                                    </PaginationItem>
                                    {/* <PaginationItem>
                                        <PaginationLink href={`/dashboard?page=${page + 1}&limit=${limit}`}>{page+1}</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href={`/dashboard?page=${page + 2}&limit=${limit}`}>{page +2}</PaginationLink>
                                    </PaginationItem> */}
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        {
                                            page && page == totalpages ? "" :
                                                <PaginationNext href={`/dashboard?page=${page + 1}&limit=${limit}`} />
                                        }
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;


async function fetcher(page: number, limit: number) {
    const product = [
        {
            "id":1,
            "name": "abc",
            "catagory": "dd",
        },
        {
            "id":2,
            "name": "efg",
            "catagory": "bb",
        },
        {
            "id":3,
            "name": "h",
            "catagory": "cc",
        }
        , {
            "id":4,
            "name": "c",
            "catagory": "eed",
        },
        {
            "id":5,
            "name": "sc",
            "catagory": "ff",
        },
        {
            "id":6,
            "name": "ac",
            "catagory": "gg",
        },
        {
            "id":7,
            "name": "abc",
            "catagory": "kk",
        },
        {
            "id":8,
            "name": "bl",
            "catagory": "ll",
        },
        {
            "id":9,
            "name": "ssbc",
            "catagory": "dddd",
        },
        {
            "id":10,
            "name": "asc",
            "catagory": "a",
        },
        {
            "id":11,
            "name": "rrec",
            "catagory": "mm",
        },
        {
            "id":12,
            "name": "zbc",
            "catagory": "aadd",
        }
    ]
    // console.log("limit",limit)
    const totalpro = product.length;
    const pagess = Math.round(totalpro / limit);
    const currentpagePro = (page * limit);

    const pro = [];
    let count = 0;
    
    for (let i = currentpagePro; i < totalpro; i++) {
        count += 1;
        if (!(count > limit)) {
            pro.push(product[i])
        } else {
            break;
        }
    }
    console.log(pagess)
    return ({totalpages:pagess, products:pro});
}
