import React, { useEffect, useState } from "react";
import Images from "./Images";
import Upload from "./Upload";

const Destinations = ({ destinations,isOpen,setIsOpen }: any) => {
  return (
    <>
      <Images images={destinations} header={"Top Vacation Destinations"} isOpen={isOpen} setIsOpen={setIsOpen} />
     <Upload isOpen={isOpen} setIsOpen={setIsOpen} header={"Top Vacation Destinations"}/>
    </>
  );
};

export default Destinations;
