import React from "react";
import Beach from "../../public/assets/beach.svg";
import BeachW from "../../public/assets/beachW.png";
import Desert from "../../public/assets/desert.svg";
import DesertW from "../../public/assets/desertW.png";
import Mountain from "../../public/assets/mountain.svg";
import MountainW from "../../public/assets/mountainW.png";
import City from "../../public/assets/city.svg";
import HouseBoat from "../../public/assets/houseboat.svg";
import Camp from "../../public/assets/camp.png";
import Castle from "../../public/assets/castle.png";
import Skying from "../../public/assets/skying.png";
import Tropical from "../../public/assets/tropical.png";
import CityW from "../../public/assets/cityW.png";
import HouseBoatW from "../../public/assets/houseBoatW.png";
import CampW from "../../public/assets/campW.png";
import CastleW from "../../public/assets/castleW.png";
import SkyingW from "../../public/assets/skyingW.png";
import TropicalW from "../../public/assets/tropicalW.png";
import Link from 'next/link'
import Image from 'next/image'
const Categories = () => {
  return (
    <div className="w-full bg-white md:bg-transparent px-6 max-w-[1100px]">
      <div className="text-2xl font-medium md:text-light my-6 ">
        Top Categories
      </div>
      <div className="flex overflow-scroll no-scrollbar gap-4 md:gap-20 mx-2  ">
        <Link href={"/"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={Beach} alt="beach"/>
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Beaches
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={BeachW} alt="beach" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Beaches
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={Desert} alt="desert" className="" />
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Deserts
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={DesertW} alt="desert" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Deserts
            </div>
          </div>
        </Link>

        <Link href={"/mountains"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={Mountain} alt="mountain" className="" />
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Mountains
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={MountainW} alt="mountain" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Mountains
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={City} alt="city" className="" />
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Cities
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={CityW} alt="city" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Cities
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={HouseBoat} alt="houseboat" className="" />
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Houseboats
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={HouseBoatW} alt="houseboat" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Houseboats
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={Camp} alt="camp" className="" />
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Camp
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={CampW} alt="camp" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Camp
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={Castle} alt="castle" className="" />
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Castle
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={CastleW} alt="castle" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Castle
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={Skying} alt="skiing" className="" />
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Skiing
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={SkyingW} alt="skiing" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Skiing
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="group flex md:hidden flex-col text-shade gap-4 items-center">
            <Image src={Tropical} alt="tropical" className="" />
            <div className="group-hover:after:bg-black group-hover:text-black after:h-[2px] after:block after:my-2">
              Tropical
            </div>
          </div>
          <div className="group hidden md:flex flex-col text-shade gap-4 items-center cursor-pointer">
            <Image src={TropicalW} alt="tropical" className="" />
            <div className="group-hover:after:bg-white group-hover:text-white after:h-[2px] after:block after:my-2">
              Tropical
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
