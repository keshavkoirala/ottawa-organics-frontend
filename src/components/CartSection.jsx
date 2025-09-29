import React, { useState } from "react";
import { IconTrash, IconX } from "@tabler/icons-react";

const CartSection = ({ cartItems, setCartItems, setIsCartVisible, subtotal }) => {
   // State to control cart visibility

   // Function to handle incrementing the quantity
   const handleIncrement = (index) => {
      const newItems = [...cartItems];
      newItems[index].quantity++;
      setCartItems(newItems);
   };

   // Function to handle decrementing the quantity
   const handleDecrement = (index) => {
      const newItems = [...cartItems];
      if (newItems[index].quantity > 1) {
         newItems[index].quantity--;
         setCartItems(newItems);
      }
   };

   // Function to handle deleting an item
   const handleDelete = (index) => {
      const newItems = cartItems.filter((_, i) => i !== index);
      setCartItems(newItems);
   };

   // // Calculate the subtotal
   //  const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

   return (
      <>
         <div
            style={{ height: "calc(100vh - 68px)" }}
            className="max-w-md mx-auto bg-white shadow-xl rounded-lg p-4 fixed translate-x-0 right-0 z-50 flex flex-col justify-between"
         >
            <div>
               <div className="flex justify-between items-center border-b pb-2 mb-4 ">
                  <h2 className="text-lg font-semibold text-zinc-800">
                     Shopping Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                  </h2>
                  <button
                     className="text-zinc-800"
                     onClick={() => {
                        setIsCartVisible(false);
                     }}
                  >
                     <IconX />
                  </button>
               </div>
               <div className="space-y-4 overflow-y-auto" style={{ maxHeight: "calc(100vh - 300px)" }}>
                  {cartItems.map((item, index) => (
                     <div key={item.id} className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                        <div className="flex-1">
                           <h3 className="text-zinc-800">{item.name}</h3>
                           <p className="text-green-500">
                              {item.nepCurrency}
                              {item.price}
                           </p>
                           <div className="flex items-center space-x-2 mt-2">
                              <button
                                 onClick={() => handleDecrement(index)}
                                 className="border border-zinc-300 px-2 py-1 rounded"
                              >
                                 -
                              </button>
                              <span className="text-zinc-800">{item.quantity}</span>
                              <button
                                 onClick={() => handleIncrement(index)}
                                 className="border border-zinc-300 px-2 py-1 rounded"
                              >
                                 +
                              </button>
                           </div>
                        </div>
                        <button onClick={() => handleDelete(index)} className="text-zinc-600">
                           <IconTrash size={20} />
                        </button>
                     </div>
                  ))}
               </div>
            </div>

            <div className="">
               <div className="flex justify-between items-center mb-4 ">
                  <span className="text-lg font-semibold text-zinc-900">Subtotal:</span>
                  <span className="text-lg font-semibold text-green-600">Rs. {subtotal.toFixed(2)}</span>
               </div>
               <p className="text-zinc-600 mb-6">Tax included and shipping calculated at checkout</p>
               <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Proceed to CheckOut
               </button>
            </div>
         </div>
      </>
   );
};

export default CartSection;
