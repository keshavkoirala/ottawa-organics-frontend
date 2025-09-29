import React from "react";

const Benefits = () => {
   return (
      <div className="flex flex-col md:flex-row justify-around items-center gap-2 md:gap-6 containers mt-8 md:mt-16">
         <div className="flex shadow-md p-4  items-center mb-4 md:mb-0 bg-white">
            <img src="images/bestPrices.png" alt="Best Prices & Deals" className="w-12 h-12 mr-4" />
            <div>
               <h3 className="text-lg font-semibold text-zinc-800">Best Prices & Deals</h3>
               <p className="text-zinc-600">Don't miss our daily amazing deals and prices</p>
            </div>
         </div>
         <div className="flex items-center p-4 shadow-md mb-4 md:mb-0 bg-white">
            <img src="images/refundable.png" alt="Refundable" className="w-12 h-12 mr-4" />
            <div>
               <h3 className="text-lg font-semibold text-zinc-800">Refundable</h3>
               <p className="text-zinc-600">If your items have damage we agree to refund it</p>
            </div>
         </div>
         <div className="flex items-center shadow-md p-4 bg-white">
            <img src="images/free-Delivery.png" alt="Free delivery" className="w-12 h-12 mr-4" />
            <div>
               <h3 className="text-lg font-semibold text-zinc-800">Free delivery</h3>
               <p className="text-zinc-600">Do purchase over $50 and get free delivery anywhere</p>
            </div>
         </div>
      </div>
   );
};

export default Benefits;
