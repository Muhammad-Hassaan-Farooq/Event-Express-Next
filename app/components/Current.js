"use client";

import { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import EventListing from "@/app/components/EventListing";

const Current = () => {
  const [events, setEvents] = useState([]);
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/event/myCurrentEvents",
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
      <EventListing events={events} />
      <NotificationContainer />
    </>
  );
};

export default Current;
