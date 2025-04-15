"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import Header from "./generalcommponents/header";
import Footer from "./generalcommponents/footer";

function ClientLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname=usePathname();

    const excludedpath=["/auth/login","/auth/signup", "/dashboard","/dashboard/upload","/dashboard/watch","/dashboard/edit"]
  
    const allowedPath=!excludedpath.includes(pathname);
  
    return (
          <div className=" bg-transparent mx-auto px-2 md:px-7 lg:px-11">
            {
              allowedPath &&  <Header />
            }
              <main>
                {children}
              </main>
            {
              allowedPath && <Footer/>
            }
          </div>
    );
}

export default ClientLayout
