import React, { useState } from "react";
import logo from "../assets/spacex_logo.png";
import { MdKeyboardArrowDown, MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  //   function belo just reverses polarity of nav
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full flex justify-between md:justify-block pr-[3em]">
      <img src={logo} alt="" width={250} />
      {/* big screen menu */}
      <div className=" hidden justify-between w-full md:flex">
        <div className="flex space-x-10 text-[#474b5b] font-medium text-sm pt-5 pl-[14em] ">
          <p className="hover:border-b hover:cursor-pointer hover:text-[#d0cdcc]">
            Home
          </p>
          <p className="hover:border-b hover:cursor-pointer hover:text-[#d0cdcc]">
            about
          </p>
          <p className="hover:border-b hover:cursor-pointer hover:text-[#d0cdcc]">
            Our Mission
          </p>
          <p className="hover:border-b hover:cursor-pointer hover:text-[#d0cdcc]">
            Careers
          </p>
          <p className="hover:border-b hover:cursor-pointer hover:text-[#d0cdcc]">
            Rockets
          </p>
          <p className="hover:border-b hover:cursor-pointer hover:text-[#d0cdcc]">
            Team
          </p>
        </div>
        <div className="text-[#d0cdcc] border rounded-full px-7 py-[-8] my-4 pt-1 flex ">
          {" "}
          EN
          <div className="pt-1">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      {/* hamburger menu */}
      <div onClick={handleClick} className="block md:hidden mt-5">
        {nav ? (
          <MdOutlineClose size={30} className="text-white" />
        ) : (
          <RxHamburgerMenu size={30} className="text-white" />
        )}
      </div>
      {/* mobile menu  */}
      <div
        className={
          nav
            ? "md:hidden w-[60%] rounded-lg mx-auto background-opacity top-[60px] absolute left-0 right-0 text-white justify-center "
            : "hidden"
        }
      >
        <ul className=" justify-center items-center flex flex-col pb-4">
          <li className="text-[#d0cdcc] hover:cursor-pointer font-bold text-lg pt-6">
            Home
          </li>
          <li className="text-[#d0cdcc] hover:cursor-pointer font-bold text-lg pt-6">
            About
          </li>
          <li className="text-[#d0cdcc] hover:cursor-pointer font-bold text-lg pt-6">
            Our Mission
          </li>
          <li className="text-[#d0cdcc] hover:cursor-pointer font-bold text-lg pt-6">
            Capsules
          </li>
          <li className="text-[#d0cdcc] hover:cursor-pointer font-bold text-lg pt-6">
            Rocket
          </li>
          <li className="text-[#d0cdcc] hover:cursor-pointer font-bold text-lg pt-6">
            Team
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
