import React from "react";

const Checkout = () => {
   return (
      <div className="containers flex m-20 justify-center">
         <div className=" bg-white p-16">
            <h2 className="text-3xl font-semibold text-green-600">Checkout</h2>
            <div className="mt-4">
               <h3 className="font-semibold text-lg">General Information</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                     <label className="block text-base font-medium text-zinc-700 ">Full name</label>
                     <input
                        type="text"
                        placeholder="eg: Ram Bahadur"
                        className="mt-1 block w-72 border border-zinc-300 rounded-md p-2 "
                     />
                  </div>
                  <div>
                     <label className="block text-base font-medium text-zinc-700">Email</label>
                     <input
                        type="email"
                        placeholder="eg: ram@gmail.com"
                        className="mt-1 block w-full border border-zinc-300 rounded-md p-2"
                     />
                  </div>
                  <div className="">
                     <label className="block text-base font-medium text-zinc-700">Phone Number</label>
                     <input
                        type="text"
                        placeholder="eg: 9812345678"
                        className="mt-1 block w-full border border-zinc-300 rounded-md p-2"
                     />
                  </div>
               </div>
            </div>
            <div className="mt-4">
               <h3 className="font-semibold text-lg">Delivery Address</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                     <label className="block text-base font-medium text-zinc-700">City/District</label>
                     <input
                        type="text"
                        placeholder="Biratnagar, Koshi Zone"
                        className="mt-1 block w-full border border-zinc-300 rounded-md p-2"
                     />
                  </div>
                  <div>
                     <label className="block text-base font-medium text-zinc-700">Address</label>
                     <input
                        type="text"
                        placeholder="Biratnagar-14"
                        className="mt-1 block w-full border border-zinc-300 rounded-md p-2"
                     />
                  </div>
                  <div className="">
                     <label className="block text-base font-medium text-zinc-700">Landmark</label>
                     <input
                        type="text"
                        placeholder="Bhagwati Tole"
                        className="mt-1 block w-full border border-zinc-300 rounded-md p-2"
                     />
                  </div>
               </div>
            </div>
            <div className="mt-4">
               <h3 className="font-semibold  text-lg">Payment Methods</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="flex flex-col items-center border border-zinc-300 rounded-md ">
                     <img src="images/cashOnDelivery.png" alt="Cash on Delivery" className="mb-2 w-28" />
                     <span>Cash on Delivery</span>
                  </div>
                  <div className="flex flex-col items-center border border-zinc-300 rounded-md p-4">
                     <img src="https://placehold.co/60x60" alt="Esewa" className="mb-2" />
                     <span>Esewa</span>
                  </div>
                  <div className="flex flex-col items-center border border-zinc-300 rounded-md p-4">
                     <img src="https://placehold.co/60x60" alt="Fonepay" className="mb-2" />
                     <span>Fonepay</span>
                  </div>
               </div>
            </div>
         </div>

         {/* order Summary */}

         <div className="w-1/3 h-3/5 mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="bg-green-600 text-white text-center py-2 rounded-t-lg">
               <h2 className="font-semibold">Order Summary</h2>
            </div>
            <div className="py-4">
               <div className="flex justify-between text-zinc-700 mb-2">
                  <span>Subtotal(2)</span>
                  <span>Rs.4000</span>
               </div>
               <div className="flex justify-between text-zinc-700 mb-2">
                  <span>Delivery Charge</span>
                  <span>Rs.150</span>
               </div>
               <hr className="border-zinc-300 my-2" />
               <div className="flex justify-between font-semibold text-zinc-900">
                  <span>Total</span>
                  <span>Rs.4150</span>
               </div>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg mt-4">Place Order</button>
         </div>
      </div>
   );
};

export default Checkout;
