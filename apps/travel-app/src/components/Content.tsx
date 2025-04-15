import React, { useEffect, useState } from "react";
import Destinations from "./Destinations";
import Properties from "./Properties";
import Plan from "./Plan";
import CommunityCard from "./CommunityCard";
import Contact from "./Contact";
import Container from "./Container";
import OfferCard from "./OfferCard";
const Content = ({ data,destinationsData,propertiesData}: any) => {

  const [isOpen,setIsOpen]= useState(false)

  const { offers,communities,travelExpert} = data
   const destinations = destinationsData.destinations
   const properties = propertiesData.properties;
  // console.log("properties: ",propertiesData)
  return (
    <div>
     
      <div className="flex flex-col gap-20 ml-6 md:ml-32 md:mb-32">
        <Destinations destinations={destinations} isOpen={isOpen} setIsOpen={setIsOpen}/>

        <Container header={"Offers"} datas={offers} Component={OfferCard} />
        <Properties  properties={properties} isOpen={isOpen} setIsOpen={setIsOpen}/>

        <Plan travelExpert = {travelExpert} />

        <Container
          header={"Connect with other travelers in our community"}
          datas={communities}
          Component={CommunityCard}
        />
      </div>
      <Contact />
     
      
    </div>
  );
};

export default Content;
