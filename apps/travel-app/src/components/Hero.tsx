import Navbar from "./Navbar";
import Booking from "./Booking";
import Categories from "./Categories";

const Hero = () => {
  return (
    <div className="relative ">
      <div>
        <div className=" ">
          <Navbar />
        </div>
        <div className="relative md:flex md:flex-col md:h-[80vh] md:items-center   ">
          <Booking />

          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Hero;
