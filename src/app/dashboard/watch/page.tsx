import BlankUploadForm from "$/components/dashboardcommponent/blankUploadForm";

import React from 'react'

function page() {

   type Product={
        name:string
        description:string
        price:number
        isNew:boolean
        isPopular:boolean
        inStock:boolean
        quantity:number
        frontImage:string
        otheImages:string[]
    }

    const product:Product={
        name:"abcd",
        description:" ldskncd vjdnvjdowmekwmdms dcsdcnsdjcndjvndvioe e",
        price:222,
        isNew:false,
        isPopular:true,
        inStock:false,
        quantity:33,
        frontImage:"andcmscsd/csdlckosd/scsodc",
        otheImages:["andcmscsd/csdlckosd/scsodc"],
    }
    return (
        <BlankUploadForm product={product} />
    )
}

export default page;
