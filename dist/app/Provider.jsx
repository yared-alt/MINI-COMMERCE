// app/providers.tsx
"use client";
import React, { useState, useEffect } from "react";
import { CartProvider } from "../context/cartContext";
export function Providers({ children }) {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart"));
        setCart(storedCart);
    }, []);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    const addtocart = (product) => {
        console.log(product);
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) => item.id === product.id
                    ? { ...item, totalPrice: Math.round(item.totalPrice + item.price), quantity: item.quantity + 1 }
                    : item);
            }
            return [...prevCart, { ...product, totalPrice: product.price, quantity: 1 }];
        });
    };
    const removesinglePro = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
    const removeFromCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                if (existingProduct.quantity === 1) {
                    return prevCart.filter((item) => item.id !== product.id);
                }
                else {
                    return prevCart.map((item) => item.id === product.id
                        ? { ...item, totalPrice: item.totalPrice - item.price, quantity: item.quantity - 1 }
                        : item);
                }
            }
            return prevCart;
        });
    };
    const individualcart = (id) => {
        return cart.filter(item => item.id == id);
    };
    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const itemPrice = parseFloat(item.price) || 0;
            const itemQuantity = item.quantity || 0;
            return total + (itemPrice * itemQuantity);
        }, 0);
    };
    const totalquantity = () => {
        var totalitem = 0;
        return cart.forEach(item => {
        });
    };
    const clearCart = () => {
        setCart([]);
    };
    return <CartProvider value={{ individualcart, getTotalPrice, removesinglePro, totalquantity, cart, addtocart, removeFromCart, clearCart }}>{children}</CartProvider>;
}
