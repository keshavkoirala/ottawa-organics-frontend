import React from "react";
import {
   IconMapPin,
   IconTruckDelivery,
   IconCurrencyRupeeNepalese,
   IconCreditCardRefund,
   IconInfoCircle,
   IconNotesOff,
   IconMessage,
} from "@tabler/icons-react";

const DeliveryDetail = () => {
   return (
      <div className="p-4 bg-white rounded-lg shadow-lg md:h-full">
         <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
               <h2 className="text-lg font-semibold">Delivery</h2>
               <IconInfoCircle color="grey" />
            </div>
            <div className="flex justify-between items-center mb-2">
               <div className="flex items-center gap-2">
                  <IconMapPin color="green" strokeLinecap="1" />
                  <p>
                     Bagmati, Kathmandu Metro
                     <br />
                     22 - Newroad Area, Newroad
                  </p>
               </div>
               <a href="#" className="text-blue-500">
                  CHANGE
               </a>
            </div>
            <div className="flex justify-between items-center mb-2">
               <div className="flex items-center gap-2">
                  <IconTruckDelivery color="green" strokeLinecap="1" />
                  <div>
                     <p className="font-semibold">
                        Standard Delivery <span className="text-sm">16 Jun</span>
                     </p>
                     <p className="text-sm text-gray-500">4 day(s)</p>
                  </div>
               </div>
               <p className="font-semibold">Rs. 200</p>
            </div>
            <div className="flex items-center gap-2">
               <IconCurrencyRupeeNepalese color="green" strokeLinecap="1" />
               <p>Cash on Delivery Available</p>
            </div>
         </div>
         <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
               <h2 className="text-lg font-semibold">Service</h2>
               <IconInfoCircle color="grey" />
            </div>
            <div className="flex items-center mb-2 gap-2">
               <IconCreditCardRefund color="grey" strokeLinecap="1" />
               <div>
                  <p>14 days free & easy return</p>
                  <p className="text-sm text-gray-500">Change of mind is not applicable</p>
               </div>
            </div>
            <div className="flex items-center gap-2">
               <IconNotesOff strokeLinecap="1" color="grey" />
               <p>Warranty not available</p>
            </div>
         </div>
         <div className="flex justify-between items-center mb-4 ">
            <div>
               <p className="text-sm text-gray-500">Sold by</p>
               <p className="font-semibold">A.R.S</p>
            </div>
            <a href="#" className="text-zinc-500 flex items-center font-medium gap-1">
               <IconMessage color="grey" />
               CHAT
            </a>
         </div>
         <div className="grid grid-cols-3 gap-4 text-center">
            <div>
               <p className="text-sm text-gray-500">Positive Seller Ratings</p>
               <p className="text-xl font-semibold">73%</p>
            </div>
            <div>
               <p className="text-sm text-gray-500">Ship on Time</p>
               <p className="text-xl font-semibold">94%</p>
            </div>
            <div>
               <p className="text-sm text-gray-500">Chat Response Rate</p>
               <p className="text-xl font-semibold">92%</p>
            </div>
         </div>
      </div>
   );
};

export default DeliveryDetail;
