import React from "react";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Home({ children, bgImg }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className={`relative h-[92vh] ${bgImg}   bg-cover bg-center z-10`}>
        <Hero />
        {/* <div className=" invisible md:visible absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent "></div> */}

        <div className="relative md:-mt-32 z-20">{children}</div>

        <Footer />
      </div>
    </div>
  );
}
