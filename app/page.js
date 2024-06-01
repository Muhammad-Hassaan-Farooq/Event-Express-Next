"use client";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import EventListing from "./components/EventListing";
import { jwtDecode } from "jwt-decode";

export default function Home() {
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
      const decodetoken = jwtDecode(token);
      if (decodetoken.role == "admin") {
        router.push("/adminDashboard");
      } else if (decodetoken.role == "user") {
        router.push("/userDashboard");
      } else if (decodetoken.role == "organizer") {
        router.push("/orgDashboard");
      }
    }
  });
}
