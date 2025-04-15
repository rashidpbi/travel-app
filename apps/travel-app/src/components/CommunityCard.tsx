import React from "react";
const CommunityCard = ({ data }:any) => {
  return (
    <div className="flex flex-col  p-4 gap-7  rounded-lg shadow-md mx-4 my-6 h-96 w-88">
      <div className="w-80 h-60 rounded-xl overflow-hidden">
        <img src={data.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2  ">
        <p className="text-2xl">{data.name}</p>
        <p className="text-shade">{data.p1}</p>
        <p className="text-shade">{data.p2}</p>
      </div>
    </div>
  );
};

export default CommunityCard;
