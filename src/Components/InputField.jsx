import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import CardContainer from "./CardContainer";
import Capsules from "./Capsules";

const InputField = () => {
  const [search, setSearch] = useState("");
  const [capsules, setCapsules] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [launchFilter, setLaunchFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://api.spacexdata.com/v3/capsules"
        );
        setCapsules(data);
        console.log(capsules);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleLaunchFilter = (event) => {
    setLaunchFilter(event.target.value);
  };

  const handleTypeFilter = (event) => {
    setTypeFilter(event.target.value);
  };

  const filteredCapsules = capsules.filter((capsule) => {
    const capsuleNameMatch = capsule?.capsule_serial
      .toLowerCase()
      .includes(search.toLowerCase());
    const statusMatch =
      !statusFilter ||
      capsule.status.toLowerCase() === statusFilter.toLowerCase();
    const launchMatch =
      !launchFilter ||
      capsule.original_launch.toLowerCase() === launchFilter.toLowerCase();
    const typeMatch =
      !typeFilter || capsule.type.toLowerCase() === typeFilter.toLowerCase();
    return capsuleNameMatch && statusMatch && launchMatch && typeMatch;
  });

  return (
    <>
      <div className="mt-[4em] md:mt-10 text-white space-y-2   pl-12 pr-12 pt-6 py-12">
        <p className="hidden md:block font-IBMPlex">Check out our Rockets!!</p>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="space-x-2 flex w-full md:w-1/2 ">
            <input
              className=" w-full rounded-md p-2 border-none text-black mb-6"
              type="text"
              placeholder="Search Capsules..."
              onChange={handleSearch}
            />
            <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-2 px-2 h-fit ">
              <AiOutlineSearch size={25} />
            </div>
          </div>

          <div className="space-x-3 ">
            <button
              className="bg-gradient-to-r from-[#004C99] via-[#3385FF] to-[#66B2FF] rounded-md p-2 px-4"
              onClick={handleStatusFilter}
            >
              Status
            </button>
            <button
              className="bg-gradient-to-r from-[#004C99] via-[#3385FF] to-[#66B2FF] rounded-md p-2 px-4"
              onClick={handleLaunchFilter}
            >
              Launch
            </button>
            <button
              className="bg-gradient-to-r from-[#004C99] via-[#3385FF] to-[#66B2FF] rounded-md p-2 px-4"
              onClick={handleTypeFilter}
            >
              Type
            </button>
          </div>
        </div>
      </div>
      <div className="pl-12 pt-2 pr-12">
        {/* <CardContainer capsules={filteredCapsules} /> */}
        <Capsules />
      </div>
    </>
  );
};
export default InputField;
