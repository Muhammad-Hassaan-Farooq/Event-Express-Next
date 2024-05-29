"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Cookies from "js-cookie";
import { NotificationContainer, NotificationManager } from "react-notifications";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AdminDashboardOrganizerPage = () => {
    const [organizers, setOrganizers] = useState([]);
    const [name, setName] = useState("");
    const token = Cookies.get("token");
    const router = useRouter();

    useEffect(() => {
        const fetchOrganizers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/accountManagement/getOrganizers", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.data.success) {
                    setOrganizers(response.data.data);
                    NotificationManager.success(response.data.message, "Success");
                }
                else {
                    NotificationManager.error(response.data.message, "Error");
                }

            } catch (error) {
                NotificationManager.error(response.data.message, "Error");
            }
        };

        fetchOrganizers();
    }, []);

    const findByName = async () => {
        try {
            const response = await axios.post("http://localhost:3000/accountManagement/getOrganizerByName", { name: name }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            console.log(response.data);
            if (response.data.success) {
                setOrganizers(response.data.data);
                NotificationManager.success(response.data.message, "Success");
            }
            else {
                NotificationManager.error(response.data.message, "Error");
            }
        } catch (error) {
            NotificationManager.error("Server Error", "Error");
        }
    }

    const handleChangeRole = async (email) => {
        try {
            const response = await axios.post("http://localhost:3000/accountManagement/changeRole", { email: email, role: "user" },
                {
                    headers: { Authorization: `Bearer ${token}` }
                });
            if (response.data.success) {
                NotificationManager.success(response.data.message, "Success", 1000);
                setTimeout(() => {
                    router.push("/adminDashboard/users");
                }, 2000);
            }
            else {
                NotificationManager.error(response.data.message, "Error");
            }
        }
        catch (error) {
            NotificationManager.error("Server Error", "Error");
        }
    }

    const handleDeleteOrganizer = async (email) => {
        try {
            const response = await axios.post("http://localhost:3000/accountManagement/deleteAccount", { email: email },
                {
                    headers: { Authorization: `Bearer ${token}` }
                });
            if (response.data.success) {
                NotificationManager.success(response.data.message, "Success", 1000);
                setTimeout(() => {
                    router.push("/adminDashboard");
                }, 2000);
            }
            else {
                NotificationManager.error(response.data.message, "Error");
            }
        }
        catch (error) {
            NotificationManager.error("Server Error", "Error");
        }
    }

    return (
        <div>
            <Navbar />
            <div class="d-flex justify-content-end">
                <div class="row no-gutters align-items-center">
                    <div class="col">
                        <input class="form-control border-secondary border-right-0 rounded-0" type="search" value={name} onChange={(e) => setName(e.target.value)} id="example-search-input4" placeholder="Search By Name" />
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" type="button" onClick={findByName}>
                            Find <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>

            {
                <div class="container">
                    <div class="row">
                        {organizers.map((organizer) => (
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100">
                                    <div class="card-body text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                            class="rounded-circle img-fluid" style={{ width: "133px" }} />
                                        <h5 class="my-3">{organizer.firstName} {organizer.lastName}</h5>
                                        <p class="text-muted mb-1">{organizer.email}</p>
                                        <p class="text-muted mb-4">{organizer.role.toUpperCase()}</p>
                                        <div class="d-flex justify-content-center mb-2">
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm mx-3" onClick={() => handleChangeRole(organizer.email)}>Change Role To User</button>
                                            <button type="button" class="btn btn-outline-secondary btn-sm p-1 mx-2" onClick={() => handleDeleteOrganizer(organizer.email)}>
                                                <img src="/delete.png" width="20" height="20" alt="delete" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
            <NotificationContainer />
        </div>

    );
};

export default AdminDashboardOrganizerPage;
