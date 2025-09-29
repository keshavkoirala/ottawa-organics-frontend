import React from "react";
import "./Navbar2.css";
import Button from "./Button";
import {
   IconCategory,
   IconHome,
   IconMedal,
   IconPercentage,
   IconSpeakerphone,
   IconPhone,
   IconSearch,
} from "@tabler/icons-react";

const Navbar2 = () => {
   return (
      <div className="containers  ">
         <nav className=" navbar2 flex items-center justify-center md:justify-between  ">
            <Button classes={"primaryBtn hidden md:flex"} text={"Brows All Categories"} svg={<IconCategory />} />
            <div className="primaryBtn px-3 py-3 flex md:hidden  ">
               {/* <p className="flex flex-1">Categories</p> */}
               <IconCategory />
            </div>
            <div className="flex md:hidden w-5/6   ">
               <input
                  type="text"
                  className="bg-gray-200 p-3 text-sm  font-medium outline-none border-none flex flex-1"
                  placeholder="Search for items..."
               />
               <button className="bg-green-500 text-white p-3">
                  <IconSearch color="white" size={24} />
               </button>
            </div>
            <div className="navList hidden md:flex">
               <ul className="flex">
                  <li className="flex navListLi">
                     <IconHome size={18} />
                     Home
                  </li>
                  <li className="flex navListLi">
                     <IconMedal className="iconColor" size={18} />
                     Hot deals
                  </li>
                  <li className="flex navListLi">
                     <IconPercentage size={18} className="iconColor" />
                     Promotions
                  </li>
                  <li className="flex navListLi">
                     <IconSpeakerphone size={18} className="iconColor" />
                     New products
                  </li>
               </ul>
            </div>
            <div className="contactNumber hidden md:flex">
               <IconPhone stroke={1.3} className="iconColorBaseGreen" />
               <p className="coloredNumber">+987 545</p>
               <p className="blackNumber">24/7 support center</p>
            </div>
         </nav>
      </div>
   );
};

export default Navbar2;
