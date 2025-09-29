import React, { useState } from "react";
import "./MobileNav.css";

const MobileNav = ({ toggleMenu, closeMenu, isMenuOpen }) => {
   // const [isMenuOpen, setIsMenuOpen] = useState(false);

   // const toggleMenu = () => {
   //    setIsMenuOpen(!isMenuOpen);
   // };

   // const closeMenu = () => {
   //    setIsMenuOpen(false);
   // };

   return (
      <div>
         {/* <div className="mobile-menu" onClick={toggleMenu}>
            Menu
         </div> */}
         <div className={`mobile-nav ${isMenuOpen ? "" : "closed-menu"}`}>
            <ul>
               <li className="mob-li" onClick={closeMenu}>
                  <a href="#">Sirish Koirala</a>
               </li>
               <li className="mob-li" onClick={closeMenu}>
                  <a href="#">Search</a>
               </li>
               <li className="mob-li" onClick={closeMenu}>
                  <a href="#">Hot Deals</a>
               </li>
               <li className="mob-li" onClick={closeMenu}>
                  <a href="#about">Dark Mode</a>
               </li>
               <li className="mob-li" onClick={closeMenu}>
                  <a href="#projects">Language</a>
               </li>
               <li className="mob-li" onClick={closeMenu}>
                  <a href="#contact">Log out</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default MobileNav;
