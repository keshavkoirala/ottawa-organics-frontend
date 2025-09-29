import React from "react";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
   return (
      <>
         <div className="containers">
            <nav className="featNavContainer flex">
               <h1 className="SectionTitle">Featured Products</h1>
               <div className="hidden md:flex">
                  <ul className="flex featNavlist">
                     <li className="featNav">All</li>
                     <li className="featNav">Vegetables</li>
                     <li className="featNav">Fruits</li>
                     <li className="featNav">Coffe & Tea</li>
                     <li className="featNav">Meat</li>
                  </ul>
               </div>
            </nav>
         </div>
      </>
   );
};
export default FeaturedProducts;
