"use client";

import { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useRouter } from "next/navigation";

import NavbarComponent from "../components/Navbar";
import Cookies from "js-cookie";
import axios from "axios";
import EventListing from "@/app/components/EventListing";

const History = () => {
  const [events, setEvents] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://event-express-one.vercel.app/event/myEvents",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          setEvents(response.data.data);
        } else {
          NotificationManager.error(response.data.message, "Error", 1500);
        }
      } catch (error) {
        NotificationManager.error("Server Error", "Error", 1500);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <NavbarComponent />
      <EventListing events={events} />
      <NotificationContainer />
    </>
  );
};

export default History;
