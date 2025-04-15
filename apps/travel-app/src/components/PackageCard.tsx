import React from "react";
import { FaStar } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineNordicWalking } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Image from 'next/image'
const PackageCard = ({ data }:any) => {
  return (
    <div className="flex flex-col  p-4 gap-6  rounded-lg shadow-md  bg-white  ">
      <div className=" relative w-80 h-60 rounded-xl overflow-hidden ">
        <Image src={data.image} alt="" className="w-full h-full object-cover" width={300} height={300}/>
        {data.favourite === true ? (
          <FaRegHeart className="text-white absolute top-5 right-3 size-8" />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col   ">
        <div className="flex justify-between font-semibold text-lg">
          <div>{data.name}</div>
          <div className="flex items-center gap-2">
            <FaStar />
            {data.rating}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-shade">3 Days 4 Nights </div>
          <div className="flex text-shade justify-between">
            <div className="flex flex-col items-center text-xs gap-2">
              <MdFlight className="w-8 h-4" />2 Flights
            </div>
            <div className="flex flex-col items-center text-xs gap-2">
              <RiHotelFill className="w-8 h-4" />1 Hotel
            </div>
            <div className="flex flex-col items-center text-xs gap-2">
              <FaCarSide className="w-8 h-4" />2 Transfers
            </div>
            <div className="flex flex-col items-center text-xs gap-2">
              <MdOutlineNordicWalking className="w-8 h-4" />4 actvities
            </div>
          </div>
          <div className="flex flex-col text-shade gap-2">
            <div className="flex items-center">
              <BsDot />
              Tour combo with return airport transfer
            </div>
            <div className="flex items-center">
              <BsDot />
              City tour
            </div>
            <div className="flex items-center">
              <BsDot />
              Curious Corner
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="line-through">₹88,993 </div>
            <div className="flex gap-1">
              <div className="font-semibold text-lg">₹88000</div>
              <div className="flex items-end text-shade">Per person</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
