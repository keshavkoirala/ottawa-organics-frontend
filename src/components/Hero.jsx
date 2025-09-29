import React from "react";
import { IconSend } from "@tabler/icons-react";
import "./Hero.css";
import "./../App.css";

const Hero = () => {
   return (
      <div className="Hero flex">
         <div className=" textArea flex containers">
            <div className="titlePara w-3/4 ">
               <h1 className="heroTitle text-[30px] md:text-[55px] font-extrabold text-black md:w-auto mx-auto ">
                  Don’t miss our daily amazing deals!
               </h1>
               <p class=" mt-1 md:mt-3 text- md:text-lg md:text-l md:font-normal text-left tracking-tight text-gray-500">
                  Save up to 60% off on your first order
               </p>
            </div>
            <div className="flex sendEmailContainer">
               <IconSend stroke={2} className="" />
               <input type="text" className="sendEmail" placeholder="Enter your email address..." name="" id="" />
            </div>
         </div>
         <div className="heroPicture flex">
            <img src="images/HeroImg.png" alt="" />
         </div>
      </div>
   );
};

export default Hero;
