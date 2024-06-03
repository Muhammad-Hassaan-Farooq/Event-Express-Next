"use client";
import Current from "@/app/components/Current";
import NavbarComponent from "@/app/components/Navbar";
import Cookies from "js-cookie";
import { NotificationContainer } from "react-notifications";

const myEvents = () => {
    const token = Cookies.get("token");

    return (
        <>
            <NavbarComponent />
            <Current/>
        </>
    );
};

export default myEvents;