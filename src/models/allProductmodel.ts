import mongoose from "mongoose"

const AllProductSchema = new mongoose.Schema({
    ProductName:{
        type: String,
        required: [true, "name is not stated"]
    },
    FrontImage:{
        type: String,
        required: [true, "image is not stated"]
    },
    ProductImage:{
        type:[String],
    },
    ProductCatagory:{
        type: String,
        required: [true, "catagory is not stated"]
    },
    ProductDescription:{
        type: String,
        required: [true, "description is not stated"]
    },
    ProductPrice:{
        type: Number,
        required: [true, "price is not stated"]
    },
    ProductColors:{
        type: [String],
    },
    ProductSize:{
        type: [String],
    },
    IsNew:{
        type: Boolean,
        default:true
    },
    Review:{
        type: Number,
    },
    IsPopular:{
        type: Boolean,
        default:false
    },
    ProductQuantity:{
        type: Number,
        required: [true, "quantity is not stated"]
    },
    InStock:{
        type: Boolean,
        default:true
    },
    Gender:{
        type: String,
        default:"unisex"
    },
})

const Allproduct=mongoose.models.allproduct || mongoose.model("allproduct",AllProductSchema);

export default Allproduct;