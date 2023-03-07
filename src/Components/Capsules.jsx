import React, { useState, useEffect } from "react";
import axios from "axios";

const Capsules = () => {
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
    <div>
      <div>
        <label htmlFor="search">Search capsules:</label>
        <input id="search" type="text" value={search} onChange={handleSearch} />
      </div>

      <div>
        <label htmlFor="status">Filter by status:</label>
        <select id="status" value={statusFilter} onChange={handleStatusFilter}>
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
        </select>
      </div>

      <div>
        <label htmlFor="launch">Filter by original launch:</label>
        <select id="launch" value={launchFilter} onChange={handleLaunchFilter}>
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
      </div>

      <div>
        <label htmlFor="type">Filter by type:</label>
        <select id="type" value={typeFilter} onChange={handleTypeFilter}>
          <option value="">All</option>
          {capsules.map((capsule) => (
            <option key={capsule.capsule_serial} value={capsule.type}>
              {capsule.type}
            </option>
          ))}
        </select>
      </div>

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
    </div>
  );
};
export default Capsules;
