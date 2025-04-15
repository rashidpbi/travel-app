import React from "react";

const Container = ({ header, datas, Component }:any) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div
        className={`text-2xl font-medium    ${
          header === "Popular Beach Destinations"
            ? "text-black md:text-white mt-4"
            : ""
        }`}
      >
        {header}
      </div>
      <div className="flex  gap-6  overflow-x-scroll no-scrollbar  ">
        {datas.map((data:any) => (
          <div key={data._id} className="mx-1 my-1 ">
            <Component data={data} />
          </div>
        ))}
        {header === "Recently Viewed" ? (
          <div className="p-6 relative bg-blueMount rounded-lg  shadow-md mx-1 my-1  ">
            <div className="flex flex-col w-80 h-60 rounded-xl text-white gap-6">
              <div className="font-semibold text-2xl">Summer Bonanza!</div>
              <div>Enjoy comfortable transfers in shared coaches</div>
              <div>Choose from 5 flights per week</div>
              <div>Get a free Rapid Antigen Test at selected hotels</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Container;
