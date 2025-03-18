import { connect } from "$/dbConfig/connector";
import Allproduct from "$/models/allProductmodel";
await connect();



 const getProductById= async(id:string)=>{

    const result=await Allproduct.find({
        _id:id
    })
    if(!result){
        console.log("product not find!")
    }
}

 const getProductByReview= async(Review:number)=>{
    const result=await Allproduct.find({
        Review:Review
    })
    if(!result){
        console.log("product not find!")
    }
}

const getProductByDate=async(IsNew:boolean)=>{
    const result=await Allproduct.find({
        IsNew:IsNew
    })
    if(!result){
        console.log("product not find!")
    }
}



async function getProduct( params:{ Review: number,id: string, IsNew?: boolean}) {
    const {Review,id,IsNew}=params;
try {
   
    if(Review){
        return await getProductByReview(Review);
    }else if(id){
        return await getProductById(id);
    }else if(IsNew){
        return await getProductByDate(IsNew);
    }
    } catch (error) {
        console.log(error);
    }


}

const result=await getProduct({id:4.5});
console.log(result);
export default getProduct;