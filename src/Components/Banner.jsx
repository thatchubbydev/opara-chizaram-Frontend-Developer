import React from "react";
import rocket_1 from "../assets/rocket_1.png";
import { BiCaretRight } from "react-icons/bi";

const Banner = () => {
  return (
    <div className=" rounded-md flex flex-col-reverse md:flex-row">
      <div className=" text-center w-fit  md:w-full text-3xl my-auto ">
        <p className="text-white font-IBMPlex md:text-4xl text-center w-full md:text-left md:w-3/4 font-medium text-4xl fadeLeftMini">
          We are thrilled to announce that the{" "}
          <span className="font-bold">Space Ghost</span> is now available and
          ready for launch.
        </p>
        <div className="justify-center text-white md:justify-start flex">
          {/* left div */}
          <div className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#d0cdcc] justify-between text-sm border left-div px-6 py-2 my-4 flex w-fit ">
            {" "}
            <div>Explore</div>
          </div>
          {/* right div */}
          <div className=" bg-purple-500 justify-between text-sm border right-div px-2 pt-3 py-2 my-4 flex w-fit ">
            {" "}
            <div>
              <BiCaretRight />
            </div>
          </div>
          {/* <div className="bg-purple-500">
            
          </div> */}
        </div>
      </div>
      <img src={rocket_1} className="md:animate-pulse " />
    </div>
  );
};

export default Banner;
