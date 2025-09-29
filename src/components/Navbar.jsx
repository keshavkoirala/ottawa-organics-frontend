import React from "react";
import { IconSearch, IconHeart, IconShoppingCart, IconMenu2, IconWorld } from "@tabler/icons-react";

const Navbar = ({ toggleCartVisibility, subtotal, cartItems, toggleMenu }) => {
   return (
      <nav className="flex items-center justify-between px-2 md:px-24 sticky top-0 z-50 shadow-md bg-white h-16">
         <div className="logo md:shrink-0">
            <img src="images/Logo.png" alt="logo.png" />
         </div>
         <div className="hidden md:flex">
            <select id="categories" className="font-medium text-sm bg-gray-200 p-3 outline-none border-none">
               <option value="value1">All Categories</option>
               <option value="value2">Fruits</option>
               <option value="value3">Vegetables</option>
               <option value="value4">Exclusives</option>
            </select>
            <input
               type="text"
               className="bg-gray-200 p-3 text-sm w-60 font-medium outline-none border-none"
               placeholder="Search for items..."
            />
            <button className="bg-green-500 text-white p-3">
               <IconSearch color="white" size={24} />
            </button>
         </div>
         <div className="flex md:gap-10 gap-3 justify-center items-center">
            <div className="flex items-center space-x-1">
               <IconHeart stroke={1.5} size={20} className="hidden md:block" />
               <IconHeart stroke={2.1} size={28} color="#253D4E" className="md:hidden" />
               <p className="text-xs font-semibold hidden md:flex">Wishlist</p>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer" onClick={toggleCartVisibility}>
               <i
                  data-array-length={cartItems.length}
                  className={` ${cartItems.length < 1 ? "cart-icon" : "cart-icon with-items border 1"}`}
               >
                  <IconShoppingCart stroke={1.5} size={20} className="hidden md:block" />
                  <IconShoppingCart stroke={2.1} size={28} color="#253D4E" className="md:hidden" />
               </i>
               <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold hidden md:block">My Cart</p>
                  {subtotal > 0 && (
                     <p className="text-[11px] font-semibold hidden md:block text-green-500">{subtotal}</p>
                  )}
               </div>
            </div>
            <div className="hidden md:flex items-center">
               <IconWorld stroke={1.5} size={20} color="#253D4E" className="hidden  md:block" />
               <select id="categories" className="font-medium text-sm outline-none border-none">
                  <option value="value1">EN</option>
                  <option value="value2">NP</option>
               </select>
            </div>
            <div className="items-center space-x-2 hidden md:flex">
               <img src="images/user3.jpg" alt="user image" className="w-10 h-10 rounded-full" />
               {/* <p className="text-base font-medium">Sirish Koirala</p> */}
               <select id="categories" className="text-base font-medium outline-none border-none flex items-center">
                  <option value="value1" selected>
                     Sirish Koirala
                  </option>
                  <option value="value2">Settings</option>
                  <option value="value3">LogOut</option>
               </select>
            </div>
            <div className="md:hidden">
               <IconMenu2 size={32} stroke={2.2} color="#253D4E" onClick={toggleMenu} />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
