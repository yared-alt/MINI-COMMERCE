"use client"
import React, { useEffect, useState } from 'react'

function form() {
    const [error, setError] = useState({});
    const [showError, setShowError] = useState(false);
    const [customerdata, setCustomerdata] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        city: "",
        country: "",
        voucher: "",
        onlinePay: true,
        deliveryPay: false,
        cardNumber: "",
        cardHolderName: "",
        expDate: "",
        cvc: ""
    })
    const handleOnchange = (e) => {
        setCustomerdata({ ...customerdata, [e.target.name]: e.target.value });
    }
    const validate = () => {
        const newError = { name: "", email: "", address: "", phone: "", postalCode: "", country: "", voucher: "", cardNumber: "", cardHolderName: "", expDate: "", cvc: "" };

        if (!customerdata.name) newError.name = "please Enter name";
        if (!customerdata.email.includes('@')) newError.email = "please Enter email";
        if (!customerdata.phone.startsWith('+251')) newError.phone = "please Enter phone  start with +251 ";
        if (!customerdata.address) newError.address = "please Enter address";
        if (!(customerdata.postalCode.length <= 6)) newError.postalCode = "please Enter postalCode";
        if (!customerdata.country) newError.country = "please Enter country";
        if (!customerdata.voucher) newError.voucher = "please Enter voucher";
        if (!customerdata.cardNumber) newError.cardNumber = "please Enter cardNumber";
        if (!customerdata.cardHolderName) newError.cardHolderName = "please Enter cardHolderName";
        if (!customerdata.expDate) newError.expDate = "please Enter expDate";
        if (!customerdata.cvc) newError.cvc = "please Enter cvc";
        setError(newError);
        return Object.values(newError).every(val => val === "");
    }

    useEffect(() => {
        validate();
        if (validate()) {
            setShowError(true)
        } else {
            setShowError(false)
        }
    }, [customerdata])

    const submit = () => {
        setShowError(false)
        const Isvalid = validate();
        if (Isvalid) {
            // api call send data
            return;
        }
        setShowError(true);
        return;
    }
    return (
        <div className='w-[100%] '>
            <div className='bg-zinc-200 z-10 text-black p-1 pb-3 mt-5 rounded-lg'>
                <div className='capitalize text-lg font-bold border-b-2 border-gray-400 py-1'>
                    <p>personal information</p>
                </div>
                <div className=' py-2'>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                        placeholder="Enter your name"
                        required
                        name='name'
                        onChange={(e) => handleOnchange(e)}
                        value={customerdata.name}
                    />
                </div>
                <div className='flex gap-x-2 gap-y-2 flex-row flex-wrap justify-between '>
                    <div>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 md:p-3 border  rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Enter your email"
                            required
                            name="email"
                            onChange={(e) => handleOnchange(e)}
                            value={customerdata.email}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Enter your email"
                            required
                            name="phone"
                            onChange={(e) => handleOnchange(e)}
                            value={customerdata.phone}
                        />
                    </div>

                </div>
            </div>
            <div className="bg-zinc-200  text-black p-1 pb-3 mt-5 rounded-lg">
                <div className='capitalize text-lg font-bold border-b-2 border-gray-400 py-1 '>
                    <p>
                        shiping address
                    </p>
                </div>
                <div className='py-2  gap-x-2 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-y-2  '>
                    <div className=' max-w-[100%]'>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Enter your address"
                            required
                            name='address'
                            onChange={(e) => handleOnchange(e)}
                            value={customerdata.address}
                        />
                    </div>
                    <div className='min-w-32 w-[100%]'>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="Enter your Posta address"
                            required
                            name='postalcode'
                            onChange={(e) => handleOnchange(e)}
                            value={customerdata.postalCode}
                        />
                    </div>
                </div>
                <div className='py-2 flex gap-x-2 gap-y-2 flex-row flex-wrap justify-between '>
                    <div className='min-w-32  w-[40%]'>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="current city name"
                            required
                            name='city'
                            onChange={(e) => handleOnchange(e)}
                            value={customerdata.city}
                        />
                    </div>
                    <div className='min-w-32 w-[50%]'>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="current country name"
                            required
                            name='country'
                            onChange={(e) => handleOnchange(e)}
                            value={customerdata.country}
                        />
                    </div>
                </div>

            </div>
            <div className="bg-zinc-200  text-black p-1 pb-3 mt-5 rounded-lg">
                <div className='capitalize text-lg font-bold border-b-2 border-gray-400 py-1'>
                    <p>voucher</p>
                </div>
                <div className=' py-2'>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                        placeholder="voucher number"
                        required
                        name='voucher'
                        onChange={(e) => handleOnchange(e)}
                        value={customerdata.voucher}
                    />
                </div>
            </div>
            <div className="bg-zinc-200  text-black p-1 pb-3 mt-5 rounded-lg">
                <div className='capitalize text-lg font-bold border-b-2 border-gray-400 py-1 '>
                    <p>payment method</p>
                </div>
                <div>
                    <div className='inline-flex w-[100%] justify-around gap-x-2 my-2'>
                        <div className='inline-flex  w-[50%] gap-2'>
                            <input
                                type='radio'
                                className="mt-1 w-5 h-5 rounded-lg focus:ring-primary outline-none"
                                placeholder="voucher number"
                                required
                                name="deliveryPay"
                                onChange={(e) => handleOnchange(e)}
                                checked={customerdata.deliveryPay}
                            />
                            <p className='my-auto capitalize font-robotoSlab font-semibold'>cash on delivery</p>
                        </div>
                        <div className='inline-flex w-[50%] gap-2'>
                            <input
                                type='radio'
                                className="mt-1 w-5 h-5 rounded-lg  focus:ring-primary outline-none"
                                placeholder="voucher number"
                                required
                                name='onlinePay'
                                onChange={(e) => handleOnchange(e)}
                                checked={customerdata.onlinePay}
                            />
                            <p className='my-auto capitalize font-robotoSlab font-semibold'>use cridit or debit card</p>
                        </div>
                    </div>
                    <div className='py-2'>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="card holder name"
                            required
                            name='cardHolderName'
                            onChange={(e) => handleOnchange(e)}
                            value={customerdata.cardHolderName}
                        />
                    </div>
                    <div className='py-2'>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                            placeholder="card number "
                            required
                            name='cardNumber'
                            onChange={(e) => handleOnchange(e)}
                            value={customerdata.cardNumber}
                        />
                    </div>
                    <div className='py-2 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-x-2'>

                        <div className='w-[100%]'>
                            <div>
                                <p className='my-auto capitalize font-robotoSlab font-semibold pl-1'>exp-date</p>
                                <input
                                    type="date"
                                    className="w-full mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    required
                                    name='expDate'
                                    onChange={(e) => handleOnchange(e)}
                                    value={customerdata.expDate}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className='text-  font-robotoSlab font-semibold tracking-widest pl-1 underline'>cvc</p>
                                <input
                                    type="text"
                                    className=" mt-1 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    required
                                    name='cvc'
                                    onChange={(e) => handleOnchange(e)}
                                    value={customerdata.cvc}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default form
