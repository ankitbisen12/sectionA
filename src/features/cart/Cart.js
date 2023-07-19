import React, { useState,} from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    size: "L",
    price: "90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "32.00",
    quantity: 1,
    size: "L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];
const Cart = () => {
  const totalAmount = products.reduce((amount,item)=>item.price*item.quantity + amount,0) +80;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-cols-3 justify-between px-4 py-6 sm:px-6">
        <span>
          <Link to="/">
            <AiOutlineArrowLeft className="text-3xl" />
          </Link>
        </span>
        <span className="font-bold  text-2xl">My Cart</span>
        <span>
            <IoNotificationsOutline className="text-3xl"/>
        </span>
      </div>

      <div className="px-4 py-6 sm:px-6">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex py-6 rounded-lg bg-gray-200 p-2 mb-4"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.title}</a>
                      </h3>
                      <p className="ml-4">
                        <MdOutlineDeleteOutline className="text-2xl text-red-600" />
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Size {product.size}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">INR {product.price}</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-4 py-0 sm:px-6">
        <div className="col-span-full">
          <input
            type="text"
            name="voucher"
            id="voucher"
            placeholder="Add a voucher"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-slate-200 placeholder:text-gray-600 "
          />
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6">
        <div className="flex justify-between py-2">
          <p>Subtotal</p>
          <p className="font-bold text-black-500">INR 262</p>
        </div>
        <div className="flex justify-between  py-2 ">
          <p>Subtotal</p>
          <p className="font-bold text-black-500">INR 0</p>
        </div>
        <div className="flex justify-between border-b border-gray-400 py-2 mb-2">
          <p>Shipping fee</p>
          <p className="font-bold text-black-500">INR 80</p>
        </div>
        <div className="flex justify-between py-2 mb-2">
          <p>Total</p>
          <p className="font-bold text-black-500">INR {totalAmount}</p>
        </div>
        <div className="mt-6">
          <Link
            to="/"
            className="flex items-center justify-center text-xl rounded-xl border border-transparent bg-black px-6 py-3 text-white font-medium text-white"
          >
            Checkout <AiOutlineArrowRight className="text-2xl ml-4 pt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
