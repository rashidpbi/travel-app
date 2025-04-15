import React from "react";
import Images from "./Images";
import Upload from "./Upload";
const Properties = ({properties,isOpen,setIsOpen}:any) => {

 
  return (
    <>
      <Images images={properties} header={"Browse by property type"} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Upload isOpen={isOpen} setIsOpen={setIsOpen} header={"Browse by property type"} />
    </>
  );
};

export default Properties;
