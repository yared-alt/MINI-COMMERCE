import Link from 'next/link'
import React from 'react'
// import { useRouter } from 'next/navigation';
// import { NextResponse } from 'next/server';
// import { headers } from 'next/headers'

async function NotFound() {
  // const headerList=await headers();
  // const domain=await headerList.get("host");
  // const data=await getSiteData(domain);
  // console.log(data)
  // NextResponse.redirect('/')

  return (
    <div className='text-center py-[200px]'>
      <div className='w-[200px] mx-auto'>
        <p className='text-2xl text-red-400 capitalize'> could not found requested resourse!</p>🔙
        <Link href="/home" className='underline  text-cyan-200'>back to home</Link>
      </div>
    </div>
  )
}

export default NotFound
