import BlankUploadForm from "$/components/dashboardcommponent/blankUploadForm";
import React from 'react'


type Product = {
  name: string
  price: number
  isNew: boolean
  inStock: boolean
  quantity: number
  size: string[]
  colors: string[]
  isPopular: boolean
  catagory: string
  description: string
  frontImage: string
  otherImages: string[]
}
function page() {

  const product: Product = {
    name: "abcd",
    description: " ldskncd vjdnvjdowmekwmdms dcsdcnsdjcndjvndvioe e",
    price: 222,
    isNew: false,
    size: ["22", "33"],
    colors: ["blue", "red"],
    catagory:"sport",
    isPopular: true,
    inStock: false,
    quantity: 33,
    frontImage: "andcmscsd/csdlckosd/scsodc",
    otherImages: ["andcmscsd/csdlckosd/scsodc"],
  }
  return (
    <BlankUploadForm product={product as Product} bg={"edit"} />
  )
}

export default page
