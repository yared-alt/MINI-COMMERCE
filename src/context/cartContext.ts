"use client";
import { createContext, useContext } from "react";


const cartContext = createContext({
    cart: [
        {
            id: '',
            catagory: "",
            productTitle: "",
            productImg: "",
            price: "",
            quantity: 0,
            totalPrice: "",
        }
    ],
    getTotalPrice: function() {
        
    },
    removesinglePro:(id)=>{},
     totalquantity:()=>{},
    individualcart: () => { },
    addtocart: (product: object) => { },
    removeFromCart: (product: object) => { },
    clearCart: () => { }
})

export const CartProvider = cartContext.Provider;

export const useCart = () => {
    return useContext(cartContext);
}