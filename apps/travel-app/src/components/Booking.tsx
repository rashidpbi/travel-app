import React from "react";
import { IoIosPerson } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Booking = () => {
  return (
    <div className="flex p-4 md:p-0 flex-col max-w-[1240px]  lg:min-w-[1100px]">
      <div
        className="text-white font-bold text-3xl  md:text-6xl pt-8
       text-left  "
      >
        The whole world <br /> awaits.
      </div>
      <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 pt-8 ">
        <div className="flex justify-center items-center w-full bg-stone-400  rounded-full md:rounded-l-xl  md:rounded-r-none opacity-80 py-3 text-white  gap-x-2">
          <CiSearch className="" />
          Search destinations, hotels
        </div>
        <div className="flex gap-8 justify-center items-center w-full bg-stone-400  rounded-full md:rounded-none   opacity-80 py-3 text-white">
          <div className="flex items-center gap-2">
            <CiCalendar />
            Check in
          </div>
          |
          <div className="flex  items-center gap-2">
            <CiCalendar /> Check out
          </div>
        </div>
        <div className="flex justify-center items-center w-full bg-stone-400  rounded-full md:rounded-none  opacity-80 py-3  text-white">
          <IoIosPerson /> 1 room, 2 adults
        </div>
        <div className="flex justify-center items-center  w-full bg-blue-600  md:bg-stone-400 rounded-full md:rounded-r-xl  md:rounded-l-none   opacity-80 text-white font-medium py-3">
          <div className="md:border md:px-12 md:py-2 md:rounded-3xl md:text-blue-600 md:bg-white">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
