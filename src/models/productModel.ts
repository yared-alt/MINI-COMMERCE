import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: [true, "name is not stated"]
    },
    ProductImage: {
        type: [String],
        required: [true, "image is not stated"]
    },
    ProductCatagory: {
        type: String,
        required: [true, "catagory is not stated"]
    },
    ProductDescription: {
        type: String,
        required: [true, "description is not stated"]
    },
    ProductPrice: {
        type: Number,
        required: [true, "price is not stated"]
    },
    ProductColors: {
        type: [String],
        required: [true, "color is not stated"]
    },
    ProductSize: {
        type: [String],
        required: [true, "size is not stated"]
    },
    IsNew: {
        type: Boolean,
        default: true
    },
    IsPopular: {
        type: Boolean,
        default: false
    },
    ProductQuantity: {
        type: Number
    },
    InStock: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const Product = mongoose.models.product || mongoose.model("product", ProductSchema);
export default Product;