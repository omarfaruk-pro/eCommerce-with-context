import React, { useState } from 'react'
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';

export default function Cart() {
    const {cart, setCart} = useCart();

    const [quantities, setQuantities] = useState(
        cart.reduce((acc, item) => {
            acc[item.productId] = 1;
            return acc;
        }, {})
    );
    const handleQuantityChange = (productId, value) => {
        const newQuantity = parseInt(value, 10);
        if (isNaN(newQuantity) || newQuantity < 1) {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [productId]: 1,
            }));
        } else {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [productId]: newQuantity,
            }));
        }
    };
    const subtotal = cart.reduce(
        (acc, item) =>
            acc +
            parseFloat(item.productPrice.replace('$', '')) *
                (quantities[item.productId] || 1),
        0
    );

  const vat = subtotal * 0.1;
  let discount = 0;
  if(subtotal < 400){
    discount = 0;
  }else if(subtotal < 800){
    discount = 10;
  }else if(subtotal >= 800 && subtotal <= 1300){
    discount = 25;
  } else if(subtotal > 1300){
    discount = 40;
  }else{
    discount = 0;
  }

  const total = subtotal + vat - discount;
  return (
    <>
        {
            cart.length >0? (
        <section className='py-16'>
            <div className='container'>
            <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
            </header>

            <div className="mt-8">
                <ul className="space-y-4">
                {
                    cart.map((item) => (
                        <li key={item.productId} className="flex justify-between items-center gap-4">
                            <div className="flex gap-2">
                                <img
                                src={item.productImage}
                                alt=""
                                className="size-16 rounded object-cover"
                                />

                                <div>
                                    <h3 className="text-sm text-gray-900">{item.productName}</h3>

                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                        <dt className="inline">Size:</dt>
                                        <dd className="inline">XXS</dd>
                                        </div>

                                        <div>
                                        <dt className="inline">Color:</dt>
                                        <dd className="inline">White</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            <div className='flex w-32 items-center gap-3'>
                                <p className="text-lg font-bold text-gray-900">Price:</p>
                                <p className="text-sm font-normal text-gray-900">{item.productPrice}</p>
                            </div>

                            <div className="flex items-center justify-end gap-2">
                                <div>
                                    <input
                                        type="number"
                                        id={`quantity-${item.productId}`}
                                        min="1"
                                        value={quantities[item.productId]}
                                        onChange={(e) =>
                                            handleQuantityChange(
                                                item.productId,
                                                parseInt(e.target.value)
                                            )
                                        }
                                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600"
                                    />
                                </div>

                                <button onClick={()=>setCart((prev) => prev.filter((ritem) => ritem.productId !== item.productId))} className="text-gray-600 transition hover:text-red-600">
                                    <span className="sr-only">Remove item</span>

                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))
                }
                
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                    <div className="w-screen max-w-lg space-y-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">
                            <div className="flex justify-between">
                                <dt>Subtotal</dt>
                                <dd>${subtotal.toFixed(2)}</dd>
                            </div>

                            <div className="flex justify-between">
                                <dt>VAT</dt>
                                <dd>${vat.toFixed(2)}</dd>
                            </div>

                            <div className="flex justify-between">
                                <dt>Discount</dt>
                                <dd>${discount.toFixed(2)}</dd>
                            </div>

                            <div className="flex justify-between !text-base font-medium">
                                <dt>Total</dt>
                                <dd>${total.toFixed(2)}</dd>
                            </div>
                        </dl>


                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    ):(
        <div className='flex justify-center flex-col items-center h-52 text-2xl font-bold'>Your cart is empty <br/> <Link to={"/"} className='text-white hover:bg-slate-600 text-lg mt-4 rounded-md font-medium bg-slate-700 px-6 py-1'>Shop Now</Link></div>
    )
}
    </>
  )
}
