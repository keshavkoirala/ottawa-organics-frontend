import React from "react";
import "./Offers.css";

const Offers = () => {
   return (
      <div className=" rounded-lg mx-3 md:mx-auto block md:flex containers gap-9 mt-16 ">
         <div className="flex items-center justify-between shadow-lg rounded-md bg-white">
            <div className="p-4 md:p-8">
               <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-300 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                     Free delivery
                  </span>
               </div>
               <h2 className="text-2xl font-bold text-zinc-800 mb-2">Free delivery over $50</h2>
               <p className="text-zinc-600 mb-6">Shop $50 product and get free delivery anywhere.</p>
               <a
                  href="#"
                  className="inline-flex items-center bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
               >
                  Shop Now
                  <svg
                     className="ml-2 w-4 h-4"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-7-7l7 7-7 7"
                     ></path>
                  </svg>
               </a>
            </div>
            <div className="mt-20  md:mt-6">
               <img src="images/freeDelivery.png" alt="Person holding a box of groceries" className="h-full " />
            </div>
         </div>
         <div className="flex items-center justify-between shadow-lg rounded-md bg-white mt-7 md:mt-0">
            <div className="p-4 md:p-8">
               <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-400 text-white text-xs font-semibold px-2 py-1 rounded">60% Off</span>
               </div>
               <h2 className="text-2xl font-bold text-zinc-800 mb-2">Organic Food</h2>
               <p className="text-zinc-600 mb-6">Save up to 60% off on your first order</p>
               <a
                  href="#"
                  className="inline-flex items-center bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
               >
                  Shop Now
                  <svg
                     className="ml-2 w-4 h-4"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-7-7l7 7-7 7"
                     ></path>
                  </svg>
               </a>
            </div>
            <div className="mt-16 md:mt-14">
               <img src="images/organic.png" alt="Person holding a box of groceries" className="w-full " />
            </div>
         </div>
      </div>
   );
};

export default Offers;
