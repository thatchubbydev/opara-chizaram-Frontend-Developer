import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import CardContainer from "./CardContainer";
import card from "../assets/logo_2.png";
import { BiCaretRight } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import CapsuleDetails from "./CapsuleDetails";

const InputField = () => {
  const [capsules, setCapsules] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [launchFilter, setLaunchFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedCapsule, setSelectedCapsule] = useState(null); // state to hold selected capsule
  const [modalShown, setModalShown] = useState(false);
  const capsulesPerPage = 10;

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

  const handleCapsuleClick = (capsule) => {
    setSelectedCapsule(capsule);
    setModalShown(true);
    // set the selected capsule in state
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

  const pageCount = Math.ceil(filteredCapsules.length / capsulesPerPage);

  const displayCapsules = filteredCapsules
    .slice(pageNumber * capsulesPerPage, (pageNumber + 1) * capsulesPerPage)
    .map(
      (item) =>
        item && (
          <div
            key={item?.capsule_id}
            className="glass p-6 px-8 mt-12 space-y-4 rounded-[0.7rem] w-fit text-left drop-shadow-2xl border bg-[#2c124f] "
          >
            <div className="flex -mt-12 -ml-4">
              <img src={card} alt="card header" width={50} />
            </div>

            <p className="text-2xl font-medium">
              {/* <span className="text-blue-500 font-bold">Serial:</span>{" "} */}
              {item?.capsule_serial}
            </p>
            <div className="border-b w-[20%]"></div>

            <p className="text-sm">
              Under the category{" "}
              <span className="text-blue-500 font-bold">
                {item?.capsule_id}
              </span>{" "}
            </p>
            <p className="text-sm">
              Having a status of
              <span className="text-blue-500 font-bold">
                {" "}
                {item?.status}
              </span>{" "}
            </p>
            <div
              className="justify-center text-white  flex"
              onClick={() => handleCapsuleClick(item)}
            >
              {/* left div */}
              <div
                data-testid="explore-button"
                className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#d0cdcc] justify-between text-sm border left-div px-6 py-2 my-4 flex w-fit "
              >
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
            </div>
          </div>
        )
    );

  const handlePageClick = ({ selected }) => {
    if (selected === pageNumber - 1) {
      setPageNumber(pageNumber - 1);
    } else {
      setPageNumber(selected);
    }
  };

  return (
    <>
      {modalShown && selectedCapsule && (
        <div data-testid="capsule-details-dialog">
          <CapsuleDetails
            capsule={selectedCapsule}
            onClose={() => setModalShown(false)}
            onCapsuleClick={handleCapsuleClick}
          />
        </div>
      )}
      <div className="mt-[4em] md:mt-10 text-white input-wrapper space-y-2 pl-12 pr-12 pt-6 py-12 flex">
        <div>
          <p className="hidden md:block font-medium text-4xl text-center w-md">
            Check out our Capsules!!
          </p>
        </div>

        <div className="flex justify-center w-full flex-col ">
          <div className="flex w-full md:w-1/2 mx-auto">
            <input
              data-testid="search-input"
              className=" w-full rounded-full p-2 pl-5 border-none text-black mb-6"
              placeholder="Search Capsules..."
              id="search"
              type="text"
              value={search}
              onChange={handleSearch}
            />
          </div>

          <div className="space-x-3 flex-col flex md:flex-row space-y-3 md:space-y-0 justify-start  mx-auto text-[#03020b]">
            <select
              id="status"
              data-testid="status-filter"
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
              data-testid="launch-filter"
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
              data-testid="type-filter"
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
        <CardContainer capsules={displayCapsules} />
        <div className="">
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            initialPage={pageNumber}
            containerClassName={"container"}
            previousLinkClassName={"page"}
            breakClassName={"page"}
            nextLinkClassName={"page"}
            pageClassName={"page"}
            disabledClassNae={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};
export default InputField;
