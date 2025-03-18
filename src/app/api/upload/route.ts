import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import Product from "$/models/productModel";
import { connect } from "$/dbConfig/connector";
import util from 'node:util';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

interface CloudinaryResult {
  public_id: string,
  [key: string]: any,
}


export async function POST(request: NextRequest) {

  try {
    const formdata = await request.formData();
    const FrontImagefile = formdata.get("frontImage") as File | null;
    const otherImages = formdata.getAll("otherImages") as File[];
    const name = formdata.get("name") as String;
    const catagory = formdata.get("catagory") as String;
    const price = formdata.get("price");
    const description = formdata.get("description");
    const colors = formdata.getAll("colors") as String[];
    const sizes = formdata.getAll("sizes") as String[];
    const isNew = formdata.get("new");
    const IsPopular = formdata.get("Popular");
    const quantity = formdata.get("quantity");
    const Instock = formdata.get("Instock");
    var FrontimagePublic_id;
    var OtherimagesPublic_id = [];

    // console.log(name,price,description,isNew,IsPopular,colors,sizes,FrontImagefile,otherImages,catagory,Instock)

    if (!FrontImagefile || !name || !catagory || !price || !description || colors || !sizes) {
      console.log("Incommplete data")
      // return NextResponse.json({ error: "incomplete data" }, { status: 400 })
    }
    try {
      const byte = await FrontImagefile.arrayBuffer();
      const buffer = Buffer.from(byte); // or Uint8Array in the browser

      const frontresult = await new Promise<CloudinaryResult>(
        (resolve, rejects) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            {
              folder: "mini-commerce",
              transformation: [
                { width: 800, height: 600, crop: "limit" },
                { quality: "auto" }
              ]
            },
            (error, result) => {
              if (error) rejects(error);
              else resolve(result as CloudinaryResult);
            }
          );
          uploadStream.end(buffer)
        }
      )
      // console.log(frontresult)
      FrontimagePublic_id = frontresult.public_id;
    } catch (error) {
      console.error("Error reading file:", error);
      return NextResponse.json({ error: "error ocured on uploding image" }, { status: 500 });
    }
    // additinal image s upload
    // return;
    try {

      const otherImagesResults = await Promise.all(
        otherImages.map(async (file) => {
          const buffer = Buffer.from(await file.arrayBuffer());
          return new Promise<CloudinaryResult>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { folder: "mini-commerce" },
              (error, result) => {
                if (error) reject(error);
                else resolve(result as CloudinaryResult);
              }
            );
            uploadStream.end(buffer);
          });
        })
      );
      otherImagesResults.map((each) => {
        OtherimagesPublic_id.push(each.public_id)
      })
    } catch (error) {
      return NextResponse.json({ error: "error ocured on uploading support images" }, { status: 500 })
    }

    // replace the slash in public_id with A so mini-commerce/ will be mini-commerceA
    const replaceSlash = (x: any) => {
      if (Array.isArray(x)) {
        var replacedString_id = [];
        x.forEach((el) => {
          replacedString_id.push(el.replace("mini-commerce/", "mini-commerceA"));
        })
        return replacedString_id;
      } else {

        return x.replace("mini-commerce/", "mini-commerceA")
      }
    }
    const frontPic = replaceSlash(FrontimagePublic_id);
    const otherPic = replaceSlash(OtherimagesPublic_id);
    // return;
    try {
      connect();
      const product = new Product({
        ProductName: name,
        ProductImage: [frontPic.toString(), otherPic.toString()],
        ProductCatagory: catagory,
        ProductDescription: description,
        ProductPrice: price,
        ProductColors: colors,
        ProductSize: sizes,
        IsNew: isNew,
        IsPopular: IsPopular,
        ProductQuantity: quantity,
        InStock: Instock,
      })
      await product.save();
      return NextResponse.json({ message: "product created sucsessfuly" }, { status: 200 })
    } catch (error) {
      console.log("errorrroror",error)
      return NextResponse.json({error:"error ocured ooon uploading saving other images"},{status:500})
    }
  } catch (error) {
    console.log("upload faild", error);
    return NextResponse.json({ error: "faild on server" }, { status: 500 })
  }
}

