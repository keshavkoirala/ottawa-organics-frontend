import React, { useState, useEffect } from "react";

const DailyBestSells = () => {
   const [hours, setHours] = useState(10);
   const [minutes, setMinutes] = useState(56);
   const [seconds, setSeconds] = useState(21);

   useEffect(() => {
      const countdown = setInterval(() => {
         if (seconds > 0) {
            setSeconds(seconds - 1);
         } else {
            if (minutes > 0) {
               setMinutes(minutes - 1);
               setSeconds(59);
            } else {
               if (hours > 0) {
                  setHours(hours - 1);
                  setMinutes(59);
                  setSeconds(59);
               }
            }
         }
      }, 1000);

      return () => clearInterval(countdown);
   }, [seconds, minutes, hours]);

   return (
      <div className="flex items-center justify-between  mb-10">
         <div className="block md:flex items-center gap-10 ">
            <div className="SectionTitle">Daily Best Sells</div>
            <div className="bg-red-500 text-white px-2 py-2 rounded">
               Expires in:{" "}
               <span className="font-mono">{`${hours.toString().padStart(2, "0")} : ${minutes
                  .toString()
                  .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`}</span>
            </div>
         </div>
         <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
               <button className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full ">
                  <svg
                     className="w-4 h-4 text-zinc-800"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
               </button>
               <button className="  w-8 h-8 flex items-center justify-center bg-zinc-200 rounded-full">
                  <svg
                     className="w-4 h-4 text-zinc-800"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
               </button>
            </div>
         </div>
      </div>
   );
};

export default DailyBestSells;
