import React from "react";
import Image from 'next/image'
const Plan = ({travelExpert}:any) => {
 
  return (
    <div className="relative w-10/12 h-52 md:w-10/12  md:h-[438px]  overflow-hidden rounded-lg   ">
      <Image
        src={travelExpert[0].image}
        alt=""
        className="absolute  w-full h-full object-cover"
        width={400}
        height={300}
      />
      <div className="absolute  text-white left-6 md:left-16 top-7 md:top-32 ">
        <p className="text-3xl md:text-6xl font-bold">
          Plan your trip with travel expert
        </p>
        <p className="mt-7 md:text-3xl">
          Our professional advisors can craft your perfect itinerary
        </p>
      </div>
    </div>
  );
};

export default Plan;
