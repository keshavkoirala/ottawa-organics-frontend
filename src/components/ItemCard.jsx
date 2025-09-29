import React, { useState, useEffect } from "react";
import "./itemCard.css";
import { IconShoppingCart } from "@tabler/icons-react";
import { data } from "../assets/data";

const ItemCard = ({ selectedCategory ,handleAddToCart}) => {
   const [allItems, setAllItems] = useState([]);
   const [displayedItems, setDisplayedItems] = useState([]);
   const [itemsToShow, setItemsToShow] = useState(10);

   useEffect(() => {
      const categoryItems = data.categories[selectedCategory].items;
      const categoryItemsArray = Object.keys(categoryItems).map((key) => ({
         ...categoryItems[key],
         category: selectedCategory,
      }));
      setAllItems(categoryItemsArray);
      setDisplayedItems(categoryItemsArray.slice(0, 10));
      setItemsToShow(10); // Reset itemsToShow when category changes
   }, [selectedCategory]);

   const handleShowMore = () => {
      setDisplayedItems(allItems.slice(0, itemsToShow + 10));
      setItemsToShow((prevItemsToShow) => prevItemsToShow + 10);
   };

   return (
      <div className="">
         <div className="containers itemBoxContainer flex">
            {displayedItems.map((item) => (
               <div key={item.id} className=" itemCard itemContainer">
                  <div className="itemImageContainer flex">
                     <img src={item.image} alt={`${item.category} / ${item.name}`} className="ItemImage" />
                  </div>   
                  <div className="itemDetailsContainer">
                     <p className="itemCatName">{item.category}</p>
                     <p className="itemName">{item.name}</p>
                     <div className="itemRating flex">
                        <img src={`images/rating${item.rating}.png`} alt={`rating${item.rating}.png`} />
                        <p className="itemRatingNumber">({item.rating})</p>
                     </div>
                     <p className="itemBy">
                        by <span>{item.author}</span>
                     </p>
                     <div className="priceAndAddBtn flex">
                        <div className="priceAndDiscount flex">
                           <p className="itemPrice flex">
                              {item.nepCurrency} {item.price}
                           </p>
                           <p className="itemDiscount ">
                              <del className="flex">
                                 {item.nepCurrency}
                                 {item.marked_price}
                              </del>
                           </p>
                        </div>
                        <button className="addtoCartBtn flex font-semibold" onClick={() => handleAddToCart(item)}>
                           <IconShoppingCart size={17} />
                           <p className="hidden md:flex text-lg">Add</p>
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         {displayedItems.length < allItems.length && (
            <button className="primaryBtn flex containers ShowMore" onClick={handleShowMore}>
               Show More
            </button>
         )}
      </div>
   );
};

export default ItemCard;
