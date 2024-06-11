"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useParams, useRouter } from "next/navigation";
import NavbarComponent from "../../components/Navbar";
import { jwtDecode } from "jwt-decode";
import CreateEvent from "@/app/components/CreateEvent";
import EditEventDetails from "@/app/components/EditEventDetails";

const EditEvent = async () => {
  const token = Cookies.get("token");
  const router = useRouter();

  const { id } = useParams();

  const response = await axios.post(
    "https://event-express-one.vercel.app/event/getById",
    {
      id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (
    <>
      <NavbarComponent />
      <EditEventDetails details={response.data.data} />
    </>
  );
};

export default EditEvent;
