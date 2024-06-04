"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import EventListing from "./components/EventListing";

import NewEvent from "./newEvent/page";
import NavbarComponent from "./components/Navbar";

export default function orgHome() {
  const token = Cookies.get("token");

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        router.push("/signup");
      }, 1000);

      setLoading(true);
    } else {
      axios
        .get("http://localhost:3000/event/getEvent", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setEvents(res.data.data);
        })
        .catch((error) => {});
    }
  }, []);

  useEffect(() => {
    if (events) {
      setLoading(false);
    }
  }, [events]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <NavbarComponent />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "1.5em",
            marginRight: "1.5em",
          }}
        >
          <h1 className="text-dark">Your Dashboard</h1>
          <button
            type="button"
            className="noselect"
            style={{
              backgroundColor: "darkgray",
              border: "none",
              color: "white",
              padding: "10px 20px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => router.push("/orgDashboard/newEvent")}
          >
            Create Event
          </button>
        </div>
        <EventListing events={events} />
      </>
    );
  }
}
