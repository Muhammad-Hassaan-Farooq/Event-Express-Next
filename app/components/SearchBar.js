"use client";
import React, { useState, useEffect } from "react";

import axios from "axios";
import Cookies from "js-cookie";
import { NotificationContainer, NotificationManager } from "react-notifications";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";



const SearchBar = ({setEvents, events}) => {
    const token = Cookies.get("token");
    const router = useRouter();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [organizer, setOrganizer] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const handleSearchbyDate = async () => {
        try {
            const response = await axios.post("http://localhost:3000/event/getByDate", {date: date} , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                setEvents(response.data.data);
                NotificationManager.success(response.data.message, "Success");
            }
            else {
                NotificationManager.error(response.data.message, "Error");
            }
        } catch (error) {
            NotificationManager.error("Server Error", "Error");
        }
    }


    const handleSearchbyLocation = async () => {
        try {
            const response = await axios.post("http://localhost:3000/event/getByLocation", {location: location} , {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.data.success) {
                    setEvents(response.data.data);
                    NotificationManager.success(response.data.message, "Success");
                }
                else {
                    NotificationManager.error(response.data.message, "Error");
                }
            } catch (error) {
                NotificationManager.error("Server Error", "Error");
            }
        }
    

    const handleSearchbyOrganizer = async () => {
        try {
            console.log(organizer);
            const id = await axios.post("http://localhost:3000/event/getOrganizerByName", {name: organizer}, {headers: {Authorization: `Bearer ${token}`}});
            console.log(id.data.data[0]._id);
            const orgId = id.data.data[0]._id;
            const response = await axios.post("http://localhost:3000/event/getByOrganizer", {org_id: orgId} , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            if (response.data.success) {
                setEvents(response.data.data);
                NotificationManager.success(response.data.message, "Success");
            }
            else {
                NotificationManager.error(response.data.message, "Error");
            }
        } catch (error) {
            NotificationManager.error("Server Error", "Error");
        }
    }

    const handleSearchByPrice = async () => {
        try {
            const response = await axios.post("http://localhost:3000/event/getByPrice", {price: price} , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                setEvents(response.data.data);
                NotificationManager.success(response.data.message, "Success");
            }
            else {
                NotificationManager.error(response.data.message, "Error");
            }
        } catch (error) {
            NotificationManager.error("Server Error", "Error");
        }
    }
    

    const handleSearchbyName = async () => {
        console.log(category);
        try {
            const response = await axios.post("http://localhost:3000/event/getByName", {name: name} , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.success) {
                setEvents(response.data.data);
                NotificationManager.success(response.data.message, "Success");
            }
            else {
                NotificationManager.error(response.data.message, "Error");
            }
        } catch (error) {
            NotificationManager.error("Server Error", "Error");
        }
    }

    const handleSearch = () => {
        switch(category) {
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
    }

    const handleInputChange = (setter, category) => (e) => {
        setter(e.target.value);
        setCategory(category);

        // Clear other fields
        if (category !== "name") setName("");
        if (category !== "location") setLocation("");
        if (category !== "org") setOrganizer("");
        if (category !== "price") setPrice("");
        if (category !== "date") setDate("");
    };


    return (
        <div>
            <div className="row no-gutters align-items-center" style={{padding:"8px"}}>
                <div className="col">
                    <input
                        className="form-control border-secondary border-right-0 rounded-0"
                        type="search"
                        value={name}
                        onChange={handleInputChange(setName, "name")}
                        id="example-search-input1"
                        placeholder="Name"
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control border-secondary border-right-0 rounded-0"
                        type="search"
                        value={location}
                        onChange={handleInputChange(setLocation, "location")}
                        id="example-search-input2"
                        placeholder="Location"
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control border-secondary border-right-0 rounded-0"
                        type="date"
                        value={date}
                        onChange={handleInputChange(setDate, "date")}
                        id="example-search-input2"
                        placeholder="Date"
                    />
                </div>

                <div className="col">
                    <input
                        className="form-control border-secondary border-right-0 rounded-0"
                        type="search"
                        value={organizer}
                        onChange={handleInputChange(setOrganizer, "org")}
                        id="example-search-input3"
                        placeholder="Organizer"
                    />
                </div>
                <div className="col">
                    <input
                        className="form-control border-secondary border-right-0 rounded-0"
                        type="search"
                        value={price}
                        onChange={handleInputChange(setPrice, "price")}
                        id="example-search-input4"
                        placeholder="Price"
                    />
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                        type="button"
                        onClick={handleSearch}
                    >
                        Find <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;