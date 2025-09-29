import React from "react";
import { IconMapPin } from "@tabler/icons-react";
import "../index.css";

export const Footer = () => {
   return (
      <div className="mt-8 md:mt-12">
         <div className="flex justify-between md:grid-cols-4 containers align-top shadow-lg p-8 bg-white">
            <div className="">
               <div className="items-center space-x-2">
                  <img src="images/Logo.png" alt="" srcSet="" />
               </div>
               <div className="mt-4 space-y-2">
                  <p className="flex text-zinc-700">
                     <IconMapPin color="#3BB77E" />
                     Address: Biratnagar-10,Nepal
                  </p>
                  <p className="flex items-center text-zinc-700">
                     <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"></path>
                     </svg>
                     Call Us: +997 9819349900
                  </p>
                  <p className="flex items-center text-zinc-700">
                     <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3z"></path>
                     </svg>
                     Email: AgroSOFT@gmail.com
                  </p>
                  <p className="flex items-center text-zinc-700">
                     <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a6 6 0 00-6 6v4a6 6 0 006 6h4a6 6 0 006-6V8a6 6 0 00-6-6h-4zM8 8a2 2 0 114 0 2 2 0 01-4 0z"></path>
                     </svg>
                     <p>
                        <p>Work hours: 8:00 - 20:00</p>
                        <p>Sunday - Thursday</p>
                     </p>
                  </p>
               </div>
            </div>
            <div className="hidden md:block "></div>
            <div className="hidden md:block">
               <h3 className="text-lg font-semibold text-zinc-900 w-auto">Account</h3>
               <ul className="mt-4 space-y-2 text-zinc-700">
                  <li>Wishlist</li>
                  <li>Cart</li>
                  <li>Track Order</li>
                  <li>Shipping Details</li>
               </ul>
            </div>
            <div className="hidden md:block">
               <h3 className="text-lg font-semibold text-zinc-900">Useful links</h3>
               <ul className="mt-4 space-y-2 text-zinc-700">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Hot deals</li>
                  <li>Promotions</li>
                  <li>New products</li>
               </ul>
            </div>
            <div className="hidden md:block">
               <h3 className="text-lg font-semibold text-zinc-900">Help Center</h3>
               <ul className="mt-4 space-y-2 text-zinc-700">
                  <li>Payments</li>
                  <li>Refund</li>
                  <li>Checkout</li>
                  <li>Shipping</li>
                  <li>Q&A</li>
                  <li>Privacy Policy</li>
               </ul>
            </div>
         </div>
      </div>
   );
};
