"use client";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useParams, useRouter } from "next/navigation";
import NavbarComponent from "@/app/components/Navbar";
import { jwtDecode } from "jwt-decode";
import CreateEvent from "@/app/components/CreateEvent";
import EditEventDetails from "@/app/components/EditEventDetails";


const editEvent = async () => {
    const token = Cookies.get("token");
    const router = useRouter();

    const {id} = useParams();

    const response = await axios.post("http://localhost:3000/event/getById", { 
        id: id
    }, {
        headers: {
        Authorization: `Bearer ${token}`
    }});


    return (
       <>
            <NavbarComponent/>
            <EditEventDetails details={response.data.data}   />
            
        </>
            
    );
}

export default editEvent;