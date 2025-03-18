"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
const blankUploadForm = ({ product, bg }) => {
    const [name, setName] = useState(product ? product.name : "");
    const [price, setPrice] = useState(product ? product.price : "");
    const [description, setDescription] = useState(product ? product.description : "");
    const [isNew, setIsNew] = useState(product ? product.isNew : false);
    const [IsPopular, setIsPopular] = useState(product ? product.isPopular : true);
    const [colors, setColors] = useState(product ? product.colors : []);
    const [sizes, setSizes] = useState(product ? product.colors : []);
    const [frontImage, setFrontImage] = useState(product ? product.frontImage : null);
    const [otherImages, setOtherImages] = useState(product ? product.otherImages : null);
    const [catagory, setCatagory] = useState(product ? product.isNew : "");
    const [Instock, setInstock] = useState(product ? product.isNew : true);
    const [quantity, setquantity] = useState(product ? product.quantity : 1);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, price, description, isNew, IsPopular, colors, sizes, frontImage, otherImages, catagory);
        if (!frontImage || !name || !catagory || !price || !description || colors || !sizes || !isNew || !IsPopular) {
            // return console.log("incomplate frontend data")
        }
        const formData = new FormData();
        formData.append("name", name);
        formData.append("catagory", catagory);
        formData.append("price", price);
        formData.append("quantity", quantity);
        formData.append("Instock", Instock.toString());
        formData.append("description", description);
        formData.append("new", isNew.toString());
        formData.append("Popular", IsPopular.toString());
        // Append colors and sizes
        colors.forEach((color) => formData.append("colors", color));
        sizes.forEach((size) => formData.append("sizes", size));
        // Append files
        if (frontImage)
            formData.append("frontImage", frontImage);
        otherImages.forEach((file) => formData.append("otherImages", file));
        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                const result = await response.json();
                console.log("Product uploaded successfully:", result);
                alert("Product uploaded successfully!");
            }
            else {
                console.error("Failed to upload product");
                alert("Failed to upload product");
            }
        }
        catch (error) {
            console.error("Error uploading product:", error);
            alert("Error uploading product");
        }
    };
    return (<div className="min-h-[calc(100dvh]">
            <form onSubmit={handleSubmit} className=" w-[100%] py-10    bg-slate-100">
                <Link href={"/dashboard"}>
                    <ChevronLeft className="relative top-2 left-0 md:left-7 w-12 text-red-400  h-12"/>
                </Link>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] mt-3 mx-auto max-w-[1200px] border-black  text-black  gap-y-5 ">

                    <div className=" w-[100%] max-w-96 border-2 px-2 py-1 border-black rounded-lg">
                        <label className="text-gray-700 font-medium">Description</label>
                        <textarea rows={4} className="w-full h-[60%] md:h-[70%] mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="write description..." required onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                        <input className="px-10 py-2 w-full bg-cyan-200 rounded-3xl border-y-teal-800 border-x-red-500 border outline-violet-300 cursor-pointer" type="button" value={"Generate auto discription"}></input>
                    </div>

                    <div className=" w-96 border-2 px-2 py-1 border-black rounded-lg">
                        <div>
                            <label className="text-gray-700 font-medium">Product Name:</label>
                            <input type="text" className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} value={name}/>
                        </div>
                        <div>
                            <label className="text-gray-700 font-medium">Product quantity:</label>
                            <input type="text" className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your name" required onChange={(e) => setquantity(e.target.value)} value={quantity}/>
                        </div>
                        <div>
                            <label className="text-gray-700 font-medium">Product Catagory:</label>
                            <select className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" value={catagory} onChange={(e) => setCatagory(e.target.value)}>
                                <option>sport</option>
                                <option>sport</option>
                                <option>sport</option>
                                <option>sport</option>
                            </select>
                        </div>
                    </div>

                    <div className=" w-96 border-2 px-2 py-1 border-black rounded-lg">
                        <div>
                            <label className="text-gray-700 font-medium pr-1">Price</label>
                            <input className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>

                        <div className="flex justify-around py-3">
                            <div>
                                <label className="text-gray-700 font-medium pr-1">Is New</label>
                                <input checked={isNew} type="checkbox" onChange={(e) => setIsNew(e.target.checked)}/>
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium pr-1">In stock</label>
                                <input checked={Instock} type="checkbox" onChange={(e) => setInstock(e.target.checked)}/>
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium pr-1">IsPopular</label>
                                <input type="checkbox" checked={IsPopular} onChange={(e) => setIsPopular(e.target.checked)}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="text-gray-700 font-medium">Colors:</label>
                                <input className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" type="text" onChange={(e) => setColors(e.target.value.split(","))} placeholder="Enter colors separated by commas"/>
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Sizes:</label>
                                <input className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" type="text" onChange={(e) => setSizes(e.target.value.split(","))} placeholder="Enter sizes separated by commas"/>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className=" w-96 px-2 py-1 border-x-2 border-t-2 border-black rounded-lg">
                            <label className="text-gray-700 font-medium">Front Image:</label>
                            <input type="file" className="w-full mt-1 p-3 border border-cyan-500 rounded-lg  outline-none" onChange={(e) => setFrontImage(e.target.files?.[0] || null)}/>
                        </div>
                        <div className=" w-96 px-2 py-1 border-x-2 border-b-2 border-black rounded-lg">
                            <label className="text-gray-700 font-medium">Additional Images:</label>
                            <input className="w-full mt-1 p-3 border border-cyan-500 rounded-lg outline-none" type="file" multiple onChange={(e) => setOtherImages(e.target.files ? Array.from(e.target.files) : [])}/>
                        </div>
                    </div>
                    {bg ?
            <input type="submit" className={`px-14 py-3 cursor-pointer rounded-md ${bg == "edit" ? "bg-yellow-300" : "bg-cyan-500"}`} value={bg == "edit" ? "Edit Product" : "Upload Product"}></input>
            : ""}
                </div>
            </form>
            <div className="w-[100%] text-center bg-cyan-950 flex justify-center align-middle ">
                <p className="font-robotoSlab capitalize py-5 tracking-wider text-yellow-200 my-auto ">admin dashbard</p>
            </div>
        </div>);
};
export default blankUploadForm;
