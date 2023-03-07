import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import CardContainer from "./CardContainer";
import Capsules from "./Capsules";

const InputField = () => {
  const [capsules, setCapsules] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [launchFilter, setLaunchFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    const fetchCapsules = async () => {
      const response = await axios.get(
        "https://api.spacexdata.com/v3/capsules"
      );
      setCapsules(response.data);
    };

    fetchCapsules();
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
    const matchesSearch = capsule.capsule_serial
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatusFilter =
      !statusFilter ||
      capsule.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesLaunchFilter =
      !launchFilter ||
      (capsule.original_launch &&
        capsule.original_launch.toLowerCase() === launchFilter.toLowerCase());
    const matchesTypeFilter =
      !typeFilter || capsule.type.toLowerCase() === typeFilter.toLowerCase();

    return (
      matchesSearch &&
      matchesStatusFilter &&
      matchesLaunchFilter &&
      matchesTypeFilter
    );
  });

  return (
    <>
      <div className="mt-[4em] md:mt-10 text-white input-wrapper space-y-2 pl-12 pr-12 pt-6 py-12 flex">
        <div>
          <p className="hidden md:block font-medium text-4xl text-center w-md">
            Check out our Capsules!!
          </p>
        </div>

        <div className="flex justify-center w-full flex-col ">
          {/* textbox and button container */}
          <div className="flex w-full md:w-1/2 mx-auto">
            <input
              className=" w-full input-left-div rounded-md p-2 border-none text-black mb-6"
              placeholder="Search Capsules..."
              id="search"
              type="text"
              value={search}
              onChange={handleSearch}
            />
            <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-4 -mt-2 -ml-4 px-4 h-fit ">
              <AiOutlineSearch size={25} />
            </div>
          </div>
          {/* button container */}
          <div className="space-x-3 justify-center mx-auto text-[#03020b]">
            <select
              id="status"
              value={statusFilter}
              onChange={handleStatusFilter}
              className="rounded-full p-2 px-4"
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="retired">Retired</option>
            </select>
            <select
              id="launch"
              value={launchFilter}
              className="rounded-full p-2 px-4"
              onChange={handleLaunchFilter}
            >
              <option value="">All</option>
              {capsules.map((capsule) => (
                <option
                  key={capsule.capsule_serial}
                  value={capsule.original_launch}
                >
                  {capsule.original_launch}
                </option>
              ))}
            </select>
            <select
              id="type"
              value={typeFilter}
              className="rounded-full p-2 px-4"
              onChange={handleTypeFilter}
            >
              <option value="">All</option>
              {capsules.map((capsule) => (
                <option key={capsule.capsule_serial} value={capsule.type}>
                  {capsule.type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="pl-12 pt-2 pr-12">
        <ul className="text-white">
          {filteredCapsules.map((capsule) => (
            <li key={capsule.capsule_serial}>
              <h2>{capsule.capsule_serial}</h2>
              <p>Status: {capsule.status}</p>
              <p>Original launch: {capsule.original_launch}</p>
              <p>Type: {capsule.type}</p>
            </li>
          ))}
        </ul>
        {/* <CardContainer capsules={filteredCapsules} /> */}
        {/* <Capsules /> */}
      </div>
    </>
  );
};
export default InputField;
