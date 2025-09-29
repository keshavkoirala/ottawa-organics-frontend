import React from "react";
import "./DirectAddToCart.css";
import { data } from "./../assets/data";

const DirectAddToCart = ({ handleAddToCart }) => {
   // Function to get 4 random items
   const getRandomItems = () => {
      const itemsArray = Object.values(data.categories).flatMap((category) =>
         Object.entries(category.items).map(([id, item]) => ({ id, ...item }))
      );
      const shuffled = itemsArray.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
   };

   const randomItems = getRandomItems();

   return (
      <div className="flex justify-center gap-4 test">
         {randomItems.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md relative">
               <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded">Save 10%</div>
               <img src={item.image} alt={item.name} className="dailyBestSellsPhoto fill" />
               <div className="text-zinc-500 text-sm">{item.name}</div>
               <div className="itemRating flex">
                  <img src="images/rating4.png" alt="rating" />
                  <p className="itemRatingNumber">({item.rating})</p>
               </div>
               <div className="text-zinc-500 text-sm">
                  By <span className="text-green-500">{item.author}</span>
               </div>
               <div className="flex items-baseline my-2">
                  <div className="text-green-500 text-xl font-bold">
                     {item.nepCurrency}
                     {item.selling_price}
                  </div>
                  <div className="text-zinc-500 text-sm line-through ml-2">
                     {item.nepCurrency}
                     {item.marked_price}
                  </div>
               </div>
               <button className="w-full bg-green-500 text-white py-2 rounded-lg" onClick={() => handleAddToCart(item)}>
                  Add to cart
               </button>
            </div>
         ))}
      </div>
   );
};

export default DirectAddToCart;
