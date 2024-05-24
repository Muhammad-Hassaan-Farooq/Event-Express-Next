"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const token = Cookies.get("token");

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/signup");
      setLoading(true);
    } else {
      setLoading(false);
    }

    axios
      .get("http://localhost:3000/event/getEvents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  if (loading) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <h1>Home</h1>
      </>
    );
  }
}
