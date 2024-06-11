"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useRouter } from "next/navigation";
import NavbarComponent from "../components/Navbar";
import { jwtDecode } from "jwt-decode";
import CreateEvent from "@/app/components/CreateEvent";

const NewEvent = () => {
  const token = Cookies.get("token");
  const router = useRouter();

  return (
    <>
      <NavbarComponent />
      <CreateEvent />
    </>
  );
};

export default NewEvent;
