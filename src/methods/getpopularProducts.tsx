import { connect } from "$/dbConfig/connector";
import Allproduct from "$/models/allProductmodel";
await connect();


export async function getPopularProducts() {
    const num=4;
    const result = await Allproduct.find({ Review: { $gte: num } }).exec();
    return result;
}

export async function getNewProducts() {
    const newt=true;
    const result = await Allproduct.find({ IsNew: newt }).exec();
    return result;
}

export async function getSingleProduct(id: string) { 
    const result = await Allproduct.findOne({ _id: id }).lean().exec();
    return  JSON.parse(JSON.stringify(result));
}

export async function getRelatedProducts(mainProductId: string) {
    // First get the main product to know its category
    const mainProduct = await getSingleProduct(mainProductId);
    if (!mainProduct) {
        return [];
    }
    
    // Find products with the same subcategory, excluding the main product
    const result = await Allproduct.find({
        subCategory: mainProduct.subCategory,
        _id: { $ne: mainProductId }
    }).limit(5).exec(); 
    
    return result;
}

export async function getDiscountedProducts() {
    const result = await Allproduct.find({ 
        discountPercentage: { $gt: 0 } 
    })
    .sort({ discountPercentage: -1 }) 
    .exec();
    
    return result;
}

// export async function youMightAlsoLoveProducts(userId?: string) {
//     //  Random sampling from different categories
    
//     // Simple implementation - random 5 products from different collection
//     const result = await RelatedProduct.aggregate([
//         { $sample: { size: 5 } } // Get 5 random documents
//     ]).exec();
    
//     return result;
// }