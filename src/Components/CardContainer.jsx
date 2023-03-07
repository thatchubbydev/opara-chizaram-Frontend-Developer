import React from "react";
import card from "../assets/logo_2.png";
import logo from "../assets/spacex_logo.png";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";

const CardContainer = ({ capsules }) => {
  return (
    <div className="text-white flex flex-wrap gap-6 justify-center">
      {/* card 1 */}
      {capsules.map((item) => (
        <div
          key={capsules?.capsule_id}
          className="p-6 px-12 space-y-4 rounded-md w-fit text-left cardBackground"
        >
          <div className="flex border-b">
            <img src={card} alt="card header" width={50} />
            <img src={logo} alt="card header" width={100} />
          </div>

          <p className="text-sm">
            <span className="text-blue-500 font-bold">Serial:</span>{" "}
            {item?.capsule_serial}
          </p>
          <p className="text-sm">
            <span className="text-blue-500 font-bold">ID:</span>{" "}
            {item?.capsule_id}
          </p>
          <p className="text-sm">
            <span className="text-blue-500 font-bold"> Status:</span>{" "}
            {item?.status}
          </p>
          {/* <div className="flex bg-white text-black rounded-full pl-4 border-2  border-green-500">
          <p className="text-sm pt-1.5 pr-1 font-IBMPlex font-semibold ">
            Read More
          </p>
          <div className="bg-green-500 p-2 rounded-full">
            <BsArrowRight />
          </div>
        </div> */}
          <button className="bg-gradient-to-r from-[#004C99] via-[#3385FF] to-[#66B2FF] rounded-md p-2 px-4">
            Click to view
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
