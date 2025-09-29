import React, { useRef } from "react";
import "./CategoryCard.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// import { data } from "./../assets/data1.js";
import { data } from "../assets/data1";

const CategoryCard = ({ onSelectCategory }) => {
   const containerRef = useRef(null);

   const handleScrollLeft = () => {
      if (containerRef.current) {
         containerRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
         });
      }
   };

   const handleScrollRight = () => {
      if (containerRef.current) {
         containerRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
         });
      }
   };

   return (
      <>
         <div className="categoryContainer">
            <div className="IconArrowLeft hidden md:flex">
               <IconArrowLeft onClick={handleScrollLeft} size={28} stroke={2.5} className="" />
            </div>
            <div className=" categoryCardContainer flex" ref={containerRef}>
               {Object.keys(data.categories).map((key) => {
                  const category = data.categories[key];
                  return (
                     <div
                        className="categoryCard"
                        style={{ background: category.color }}
                        key={key}
                        onClick={() => onSelectCategory(key)}
                     >
                        <img className="" src={category.image} alt={`${key} image`} />
                        <h3 className="catName ">{key}</h3>
                        <p>{Object.keys(category.items).length} items</p>
                     </div>
                  );
               })}
            </div>
            <div className="IconArrowRight hidden md:flex">

            <IconArrowRight onClick={handleScrollRight} size={28} stroke={2.5} />
            </div>
         </div>
      </>
   );
};

export default CategoryCard;
