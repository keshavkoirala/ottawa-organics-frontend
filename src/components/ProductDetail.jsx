import React from "react";
import { IconHeart } from "@tabler/icons-react";

const ProductDetail = ({ product }) => {
   return (
      <div className="">
         <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-3xl">
            <div className="md:flex md:gap-3">
               <div className="md:flex-shrink-0">
                  <img className="h-72 w-72 object-contain" src={`../../${product.image}`} alt="Product Image" />
               </div>
               <div className="py-8 px-6 w-3/6">
                  {/* productName and stars */}
                  <div className="flex justify-between items-center">
                     <div className="uppercase tracking-wide text-xl text-zinc-600 font-semibold">{product.name}</div>
                     <div className="flex items-center gap-1">
                        <div>
                           <img src={`../../images/rating${product.rating}.png`} alt="" />
                        </div>
                        <p className="text-zinc-500 font-medium text-sm">({product.rating})</p>
                     </div>
                  </div>

                  <div className="mt-3 flex items-center font-semibold">
                     <span className="text-zinc-500">Price</span>
                     <span className="ml-auto text-zinc-500">
                        {product.selling_price}
                        {product.nepCurrency}
                     </span>
                  </div>
                  <div className="mt-1 flex items-center font-semibold">
                     <span className="text-zinc-500">Seller</span>
                     <span className="ml-auto text-zinc-500">{product.author}</span>
                  </div>
                  <div className="mt-4 flex items-center font-semibold">
                     <span className="text-zinc-500">Add to Wish List</span>
                     <span className="ml-2 text-green-500">
                        <IconHeart />
                     </span>
                  </div>
                  <div className="mt-4 flex items-center font-semibold">
                     <span className="text-zinc-500">Quantity</span>
                     <div className="ml-2 flex items-center border border-zinc-300 rounded gap-1">
                        <button className="px-2 py-1 text-zinc-500">-</button>
                        <p className="px-2 py-1 text-zinc-500 border-zinc-300">1</p>
                        <button className="px-2 py-1 text-zinc-500">+</button>
                     </div>
                  </div>
                  <div className="mt-4 flex space-x-2 font-bold">
                     <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
                     <button className="border border-green-500 text-green-500 px-4 py-2 rounded">Add to Cart</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="m-12 max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-3xl p-8 mt-10">
            <h2 className="font-bold text-zinc-600 text-xl">Description</h2>
            <p className="text-zinc-500 font-medium mt-4">
               Terathum, a picturesque district in the eastern hills of Nepal, is renowned for its favorable climate and
               fertile soil, making it an ideal region for apple cultivation. Apples from Terathum are highly valued for
               their unique taste, texture, and quality.
            </p>
         </div>
      </div>
   );
};

export default ProductDetail;
