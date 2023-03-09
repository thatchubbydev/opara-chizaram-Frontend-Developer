import React from "react";
import card from "../assets/logo_2.png";
import logo from "../assets/spacex_logo.png";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import Pagination from "rc-pagination";

const CardContainer = ({ capsules }) => {
  return (
    <>
      <div className="text-white flex flex-wrap gap-6 justify-center">
        {capsules}
      </div>
    </>
  );
};

export default CardContainer;
