"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css";

import axios from "axios";
import Cookies from "js-cookie";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchBar = ({ setEvents, events }) => {
  const token = Cookies.get("token");
  const router = useRouter();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [category, setCategory] = useState("");
  const handleSearchbyDate = async () => {
    try {
      const response = await axios.post(
        "https://event-express-one.vercel.app/event/getByDate",
        { date: date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setEvents(response.data.data);
        NotificationManager.success(response.data.message, "Success");
      } else {
        NotificationManager.error(response.data.message, "Error");
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error");
    }
  };

  const handleSearchbyLocation = async () => {
    try {
      const response = await axios.post(
        "https://event-express-one.vercel.app/event/getByLocation",
        { location: location },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setEvents(response.data.data);
        NotificationManager.success(response.data.message, "Success");
      } else {
        NotificationManager.error(response.data.message, "Error");
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error");
    }
  };

  const handleSearchbyOrganizer = async () => {
    try {
      const id = await axios.post(
        "https://event-express-one.vercel.app/event/getOrganizerByName",
        { name: organizer },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const orgId = id.data.data[0]._id;
      const response = await axios.post(
        "https://event-express-one.vercel.app/event/getByOrganizer",
        { org_id: orgId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setEvents(response.data.data);
        NotificationManager.success(response.data.message, "Success");
      } else {
        NotificationManager.error(response.data.message, "Error");
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error");
    }
  };

  const handleSearchByPrice = async () => {
    try {
      let response = null;

      if (maxPrice === undefined || maxPrice === "") {
        response = await axios.post(
          "https://event-express-one.vercel.app/event/getByPrice",
          { minPrice: minPrice },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else if (minPrice === undefined || minPrice === "") {
        response = await axios.post(
          "https://event-express-one.vercel.app/event/getByPrice",
          { maxPrice: maxPrice },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else if (parseInt(maxPrice) < parseInt(minPrice)) {
        NotificationManager.error(
          "Maximum price should be greater than minimum price",
          "Error"
        );
        return;
      } else {
        response = await axios.post(
          "https://event-express-one.vercel.app/event/getByPrice",
          { maxPrice: maxPrice, minPrice: minPrice },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      if (response.data.success) {
        setEvents(response.data.data);
        NotificationManager.success(response.data.message, "Success");
      } else {
        NotificationManager.error(response.data.message, "Error");
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error");
    }
  };

  const handleSearchbyName = async () => {
    try {
      const response = await axios.post(
        "https://event-express-one.vercel.app/event/getByName",
        { name: name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setEvents(response.data.data);
        NotificationManager.success(response.data.message, "Success");
      } else {
        NotificationManager.error(response.data.message, "Error");
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error");
    }
  };

  const handleDefault = async () => {
    try {
      const response = await axios.get(
        "https://event-express-one.vercel.app/event/getEvents",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setEvents(response.data.data);
        NotificationManager.success(response.data.message, "Success");
      } else {
        NotificationManager.error(response.data.message, "Error");
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error");
    }
  };

  const handleClear = async () => {
    setName("");
    setLocation("");
    setDate("");
    setOrganizer("");
    setMaxPrice("");
    setMinPrice("");
    setCategory("");
    handleDefault();
  };

  const handleSearch = () => {
    switch (category) {
      case "name":
        handleSearchbyName();
        break;
      case "location":
        handleSearchbyLocation();
        break;
      case "org":
        handleSearchbyOrganizer();
        break;
      case "price":
        handleSearchByPrice();
        break;
      case "date":
        handleSearchbyDate();
        break;
      default:
        setName("");
        handleSearchbyName();
        break;
    }
  };

  const handleInputChange = (setter, category) => (e) => {
    setter(e.target.value);
    setCategory(category);

    // Clear other fields
    if (category !== "name") {
      setName("");
    }
    if (category !== "location") {
      setLocation("");
    }
    if (category !== "org") {
      setOrganizer("");
    }
    if (category !== "price") {
      setMaxPrice("");
      setMinPrice("");
    }
    if (category !== "date") {
      setDate("");
    }
  };

  return (
    <div>
      <div
        className="row no-gutters align-items-center m-2 searchBar"
        style={{ padding: "8px" }}
      >
        <div className="col">
          <input
            className="form-control border-secondary border-right-0 rounded-5"
            type="search"
            value={name}
            onChange={handleInputChange(setName, "name")}
            id="example-search-input1"
            placeholder="Name"
          />
        </div>
        <div className="col">
          <input
            className="form-control border-secondary border-right-0 rounded-5"
            type="search"
            value={location}
            onChange={handleInputChange(setLocation, "location")}
            id="example-search-input2"
            placeholder="Location"
          />
        </div>
        <div className="col">
          <input
            className="form-control border-secondary border-right-0 rounded-5"
            type="date"
            value={date}
            onChange={handleInputChange(setDate, "date")}
            id="example-search-input2"
            placeholder="Date"
          />
        </div>

        <div className="col">
          <input
            className="form-control border-secondary border-right-0 rounded-5"
            type="search"
            value={organizer}
            onChange={handleInputChange(setOrganizer, "org")}
            id="example-search-input3"
            placeholder="Organizer"
          />
        </div>
        <div className="col">
          <input
            className="form-control border-secondary border-right-0 rounded-5"
            type="number"
            value={minPrice}
            onChange={handleInputChange(setMinPrice, "price")}
            id="example-search-input4"
            placeholder="Minimum price"
          />
        </div>
        <div className="col">
          <input
            className="form-control border-secondary border-right-0 rounded-5"
            type="number"
            value={maxPrice}
            onChange={handleInputChange(setMaxPrice, "price")}
            id="example-search-input5"
            placeholder="Maximum price"
          />
        </div>

        <div className="col-auto">
          <button
            className="btn btn-outline-secondary border-left-0 rounded-5 rounded-right "
            type="button"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-outline-secondary border-left-0 rounded-5 rounded-right ml-2"
            type="button"
            onClick={handleClear}
          >
            Clear <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
