import React from "react";
import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

const Copyrights = () => {
   return (
      <div className="flex containers  flex-col md:flex-row justify-between items-center p-2 md:p-8  bg-white shadow-md -mt-6 md:mt-0 mb-9">
         <div className="text-zinc-700 mb-4 md:mb-0">© 2024, All rights reserved</div>
         <div className="flex space-x-4 mb-4 md:mb-0">
            <img src="https://placehold.co/300x50?text=Saujanya:Nagarpaalikaa" alt="VISA" className="h-10" />
         </div>
         <div className="flex space-x-4">
            <a href="#" className="bg-green-400 text-white p-2 rounded-full">
               <IconBrandFacebook size={26} />
            </a>
            <a href="#" className="bg-green-400 text-white p-2 rounded-full">
               <IconBrandLinkedin size={26} />
            </a>
            <a href="#" className="bg-green-400 text-white p-2 rounded-full">
               <IconBrandInstagram size={26} />
            </a>
            <a href="#" className="bg-green-400 text-white p-2 rounded-full">
               <IconBrandTwitter size={26} />
            </a>
         </div>
      </div>
   );
};

export default Copyrights;
