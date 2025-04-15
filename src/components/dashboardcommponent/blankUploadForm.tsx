"use client"
import { BackpackIcon, ChevronLeft, Link2 } from "lucide-react";
import { model } from "mongoose";
import Link from "next/link";
import React, { useState } from "react";
import { generateResponse } from "./fetcher";
import { string } from "zod";


type Data = {
    name: string
    price: number
    new: boolean
    InStock: boolean
    quantity: number
    sizes: string[]
    colors: string[]
    popular: boolean
    catagory: string
    description: string
    frontImage: string
    otherImages: string[]
}

async function upload( formdata : FormData ) {
    try {
        // setUploading(true);
        const response = await fetch("/api/upload", {
            method: "POST",
            body: formdata,
        });
        if (response.ok) {
            const result = await response.json();
            console.log("Product uploaded successfully:", result);
            alert("Product uploaded successfully!");
        } else {
            console.error("Failed to upload product");
            alert("Failed to upload product");
        }
    } catch (error) {
        console.error("Error uploading product:", error);
        alert("Error uploading product");
    }
    //  finally {
    // setUploading(true);
    // }
}

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


const blankUploadForm = ({ bg }: {  bg: string | null }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [isNew, setIsNew] = useState( false);
    const [Instock, setInstock] = useState(true);
    const [quantity, setquantity] = useState<number>(1);
    const [sizes, setSizes] = useState<string[]>([]);
    const [colors, setColors] = useState<String[]>([]);
    const [IsPopular, setIsPopular] = useState(true);
    const [catagory, setCatagory] = useState("sport");
    const [description, setDescription] = useState("");
    const [frontImage, setFrontImage] = useState<File | null>(null);
    const [otherImages, setOtherImages] = useState<File[] | null>(null);
    const [generating, setGenerating] = useState<boolean>(true);
    const [uploading, setUploading] = useState<boolean>(false)



    const validate = (auto?: boolean) => {

        if (auto) {
            if (!frontImage || !name || !catagory || !price || !colors || !sizes) {
                return false;
            }
            const formData = new FormData();
            formData.append("name", name);
            formData.append("catagory", catagory);
            formData.append("price", price.toString());
            formData.append("quantity", quantity.toString());
            formData.append("Instock", `${Instock}`);
            formData.append("description", description);
            formData.append("new", isNew.toString());
            formData.append("Popular", `${IsPopular}`);
            colors.forEach((c) => formData.append("colors", c as string));
            sizes.forEach((size) => formData.append("sizes", size));
            if (frontImage) formData.append("frontImage", frontImage);
            otherImages?.forEach((file) => formData.append("otherImages", file));
            return formData;

        }
        if (!frontImage || !name || !catagory || !price || !colors || !sizes) {
            console.log("incomplate frontend data")
            console.log("frontImage",frontImage,"name",name,"catagory",catagory,"price",price,"colors",colors,"sizes",sizes)
            return false;
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("catagory", catagory);
        formData.append("price", price.toString());
        formData.append("quantity", quantity.toString());
        formData.append("Instock", Instock.toString());
        formData.append("description", description);
        formData.append("new", isNew.toString());
        formData.append("Popular", IsPopular.toString());
        colors.forEach((color) => formData.append("colors", color as string));
        sizes.forEach((size) => formData.append("sizes", size));
        if (frontImage) formData.append("frontImage", frontImage);
        otherImages?.forEach((file) => formData.append("otherImages", file));
        return formData;
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formdata = validate();
        if (!formdata){
            console.log("formdata is not valid")
            return;
        } else{
            console.log(formdata);
        }
            
        await upload(formdata);
    };

    const generateAutoSescription = async (): Promise<void> => {
        // const data = validate(true);
        // console.log(data)
        const st=" hy how are you nice to meet you";
        const d = await generateResponse(st);
        console.log(d)

    }
    return (
        <div className=" bg-fuchsia-600">
            <form onSubmit={handleSubmit} className=" w-[100%] py-10 h-[calc(100dvh-4rem)] overflow-y-scroll tiny-scroll  bg-slate-100">
                <Link href={"/dashboard"}>
                    <ChevronLeft className="relative top-2 left-0 md:left-7 w-12 text-red-400  h-12" />
                </Link>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] mt-3 mx-auto max-w-[1200px] border-black  text-black  gap-y-5 ">

                    <div className=" w-[100%] max-w-96 border-2 px-2 py-1 border-black rounded-lg">
                        <label className="text-gray-700 font-medium">Description</label>
                        <textarea
                            rows={4}
                            className="w-full h-[60%] md:h-[70%] mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                            placeholder="write description..."
                            required
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        ></textarea>
                        {
                            bg && (
                                <>
                                    {
                                        generating ? (
                                            <input
                                                onClick={generateAutoSescription}
                                                className="px-10 py-2 w-full bg-cyan-200 rounded-3xl border-y-teal-800 border-x-red-500 border outline-violet-300 cursor-pointer"
                                                type="button"
                                                value={"Generate auto discription"}
                                            />
                                        ) : (
                                            <input
                                                disabled
                                                className="px-10 py-2 w-full bg-cyan-600 rounded-3xl border-y-teal-800 border-x-red-500 border outline-violet-300 cursor-wait"
                                                type="button"
                                                value={"generating..."}
                                            />)

                                    }
                                </>

                            )
                        }
                    </div>

                    <div className=" w-96 border-2 px-2 py-1 border-black rounded-lg">
                        <div>
                            <label className="text-gray-700 font-medium">Product Name:</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                placeholder="Enter your name"
                                required
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 font-medium">Product quantity:</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                placeholder="Enter your name"
                                required
                                onChange={(e) => setquantity(Number(e.target.value))}
                                value={quantity}
                            />
                        </div>
                        <div>
                            <label className="text-gray-700 font-medium">Product Catagory:</label>
                            <select
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                value={catagory}
                                onChange={(e) => setCatagory(e.target.value)}>
                                <option value={"sport"}>sport</option>
                                <option value={"sport"}>sport</option>
                                <option value={"sport"}>sport</option>
                                <option value={"sport"}>sport</option>
                            </select>
                        </div>
                    </div>

                    <div className=" w-96 border-2 px-2 py-1 border-black rounded-lg">
                        <div>
                            <label className="text-gray-700 font-medium pr-1">Price</label>
                            <input
                                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                        </div>

                        <div className="flex justify-around py-3">
                            <div>
                                <label className="text-gray-700 font-medium pr-1">Is New</label>
                                <input
                                    checked={isNew}
                                    type="checkbox"
                                    onChange={(e) => setIsNew(e.target.checked)}
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium pr-1">In stock</label>
                                <input
                                    checked={Instock}
                                    type="checkbox"
                                    onChange={(e) => setInstock(e.target.checked)}
                                />
                            </div>
                            <div >
                                <label className="text-gray-700 font-medium pr-1">IsPopular</label>
                                <input
                                    type="checkbox"
                                    checked={IsPopular}
                                    onChange={(e) => setIsPopular(e.target.checked)}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="text-gray-700 font-medium">Colors:</label>
                                <input
                                    className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    type="text"
                                    onChange={(e) => setColors(e.target.value.split(","))}
                                    placeholder="Enter colors separated by commas"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Sizes:</label>
                                <input
                                    className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    type="text"
                                    onChange={(e) => setSizes(e.target.value.split(","))}
                                    placeholder="Enter sizes separated by commas"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className=" w-96 px-2 py-1 border-x-2 border-t-2 border-black rounded-lg">
                            <label className="text-gray-700 font-medium">Front Image:</label>
                            <input
                                type="file"
                                className="w-full mt-1 p-3 border border-cyan-500 rounded-lg  outline-none"
                                onChange={(e) => setFrontImage(e.target.files?.[0] || null)}
                            />
                        </div>
                        <div className=" w-96 px-2 py-1 border-x-2 border-b-2 border-black rounded-lg">
                            <label className="text-gray-700 font-medium">Additional Images:</label>
                            <input
                                className="w-full mt-1 p-3 border border-cyan-500 rounded-lg outline-none"
                                type="file"
                                multiple
                                onChange={(e) =>
                                    setOtherImages(e.target.files ? Array.from(e.target.files) : [])
                                }
                            />
                        </div>
                    </div>
                    {
                        bg ?
                            <input
                                type="submit"
                                className={`px-14 py-3 cursor-pointer hover:bg-[rgba(0,255,0,0.2)] duration-200 rounded-md ${bg == "edit" ? "bg-yellow-300" : "bg-cyan-500"}`}
                                value={bg == "edit" ? "Edit Product" : "Upload Product"}
                            ></input>
                            : ""
                    }
                </div>
            </form >
            <div className="w-[100%] text-center bg-cyan-950 flex justify-center align-middle ">
                <p className="font-robotoSlab capitalize py-5 tracking-wider text-yellow-200 my-auto ">admin dashbard</p>
            </div>
        </div>
    );
};

export default blankUploadForm;