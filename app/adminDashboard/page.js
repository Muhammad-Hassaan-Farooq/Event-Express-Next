"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import EventListing from "./components/EventListing";
import NavbarComponent from "../components/Navbar";
import CreateEvent from "./createEvent/page";

export default function adminHome() {
  const token = Cookies.get("token");
  console.log(token);

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
        .catch((error) => {
          console.error("Error fetching events:", error);
        });
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Organizer Dashboard</h1>
            <button
                type="button"
                className="noselect"
                style={{
                backgroundColor: 'darkgray',
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                margin: '10px',
                cursor: 'pointer'
                
                }}
                onClick={() => router.push("/adminDashboard/createEvent")}
            >
                Create Event
            </button>
        </div>
        <EventListing events={events} />
      </>
    );
  }
}

