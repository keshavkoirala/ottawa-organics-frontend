import React from "react";
import { data } from "./../assets/data";
import "./../App.css";

const getRandomItems = (category, count) => {
   const itemsArray = Object.values(data.categories[category].items);
   const shuffled = itemsArray.sort(() => 0.5 - Math.random());
   return shuffled.slice(0, count);
};

const TopItemCat = () => {
   const topSells = getRandomItems("Fruits", 4); // Randomly get 1 item from Fruits category for Top Sells
   const topRated = getRandomItems("Vegetables", 4); // Randomly get 1 item from Vegetables category for Top Rated
   const trendingItems = getRandomItems("Dairy", 4); // Randomly get 1 item from Dairy category for Trending Items
   const recentlyAdded = getRandomItems("Spices", 4); // Randomly get 1 item from Spices category for Recently Added

   return (
      <div className="containers mx-auto mt-16">
         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-3 md:gap-10 mx-2">
            <div className="shadow-lg p-2 md:p-4  bg-white ">
               <h2 className="text-xl font-semibold mb-2">Top Sells</h2>
               <div className="border-b-2 border-green-500 mb-4"></div>
               <div className="space-y-4">
                  {topSells.map((item) => (
                     <div className="flex items-center" key={item.name}>
                        <img src={item.image} alt={item.name} className="w-12 md:w-16 md:h-16 rounded-lg" />
                        <div className="ml-4">
                           <h3 className="font-semibold">{item.name}</h3>
                           <div className="flex items-center">
                              <img src={`images/rating${item.rating}.png`} alt="" className="w-[70%] md:w-[100%]" />
                              <span className=" text-xs md:text-base ml-1 text-zinc-500 md:ml-2">({item.rating})</span>
                           </div>
                           <div className="flex items-center">
                              <span className="text-green-500 text-sm md:text-base">Rs. {item.selling_price}</span>
                              <span className="text-sm md:text-base text-zinc-500 line-through ml-2">
                                 {item.marked_price}
                              </span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="shadow-lg p-2 md:p-4 bg-white ">
               <h2 className="text-xl font-semibold mb-2">Top Rated</h2>
               <div className="border-b-2 border-green-500 mb-4"></div>
               <div className="space-y-4">
                  {topRated.map((item) => (
                     <div className="flex items-center" key={item.name}>
                        <img src={item.image} alt={item.name} className="w-12 md:w-16 md:h-16 rounded-lg" />
                        <div className="ml-4">
                           <h3 className="font-semibold">{item.name}</h3>
                           <div className="flex items-center">
                              <img src={`images/rating${item.rating}.png`} alt="" className="w-[70%] md:w-[100%]" />
                              <span className="text-xs md:text-base ml-1 text-zinc-500 md:ml-2">({item.rating})</span>
                           </div>
                           <div className="flex items-center">
                              <span className="text-green-500 text-sm md:text-base">Rs.{item.selling_price}</span>
                              <span className="text-sm md:text-base text-zinc-500 line-through ml-2">
                                 {item.marked_price}
                              </span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="mt-4 md:mt-0 shadow-lg p-2 md:p-4 bg-white">
               <h2 className="text-xl font-semibold mb-2">Trending Items</h2>
               <div className="border-b-2 border-green-500 mb-4"></div>
               <div className="space-y-4">
                  {trendingItems.map((item) => (
                     <div className="flex items-center" key={item.name}>
                        <img src={item.image} alt={item.name} className="w-12 md:w-16 md:h-16 rounded-lg" />
                        <div className="ml-4">
                           <h3 className="font-semibold">{item.name}</h3>
                           <div className="flex items-center">
                              <img src={`images/rating${item.rating}.png`} alt="" className="w-[70%] md:w-[100%]" />
                              <span className=" text-xs md:text-base ml-1 text-zinc-500 md:ml-2">({item.rating})</span>
                           </div>
                           <div className="flex items-center">
                              <span className="text-green-500 text-sm md:text-base">{item.selling_price}</span>
                              <span className="text-zinc-500 line-through ml-2 text-sm md:text-base">
                                 {item.marked_price}
                              </span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="mt-4 md:mt-0  shadow-lg p-2 md:p-4 bg-white">
               <h2 className="text-xl font-semibold mb-2">Recently Added</h2>
               <div className="border-b-2 border-green-500 mb-4"></div>
               <div className="space-y-4">
                  {recentlyAdded.map((item) => (
                     <div className="flex items-center" key={item.name}>
                        <img src={item.image} alt={item.name} className="w-12 md:w-16 md:h-16 rounded-lg" />
                        <div className="ml-4">
                           <h3 className="font-semibold">{item.name}</h3>
                           <div className="flex items-center">
                              <img src={`images/rating${item.rating}.png`} alt="" className="w-[70%] md:w-[100%]" />
                              <span className="text-xs md:text-base ml-1 text-zinc-500 md:ml-2">({item.rating})</span>
                           </div>
                           <div className="flex items-center">
                              <span className="text-green-500 text-sm md:text-base">{item.selling_price}</span>
                              <span className="text-zinc-500 line-through ml-2 text-sm md:text-base">
                                 {item.marked_price}
                              </span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopItemCat;
