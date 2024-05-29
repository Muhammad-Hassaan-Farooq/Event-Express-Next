"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useRouter } from "next/navigation";
import NavbarComponent from "@/app/components/Navbar";
import { jwtDecode } from "jwt-decode";
import CreateEvent from "@/app/components/CreateEvent";


const editEvent = () => {
    const token = Cookies.get("token");
    const router = useRouter();
 
    return (
       <>
            <NavbarComponent/>
            <h1>Edit Event Details</h1>
            
        </>
            
    );
}

export default editEvent;