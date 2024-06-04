"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import Loading from "../loading";
import EventListing from "../components/EventListing";
import SearchBar from "../components/SearchBar";

export default function userHome() {
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
        .get("http://localhost:3000/event/getEvents", {
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
        <Navbar />
        <SearchBar setEvents={setEvents} events={events} />
        <EventListing events={events} />
      </>
    );
  }
}
