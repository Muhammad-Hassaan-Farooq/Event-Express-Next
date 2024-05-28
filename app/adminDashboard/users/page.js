"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Cookies from "js-cookie";
import { NotificationContainer, NotificationManager } from "react-notifications";

const AdminDashboardUsersPage = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const token = Cookies.get("token");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/accountManagement/getUsers", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(response.data);
                if (response.data.success) {
                    setUsers(response.data.data);
                    NotificationManager.success(response.data.message, "Success");
                }
                else {
                    NotificationManager.error(response.data.message, "Error");
                }

            } catch (error) {
                NotificationManager.error(response.data.message, "Error");
            }
        };

        fetchUsers();
    }, []);

    const findByName = async () => {
        try {
            const response = await axios.post("http://localhost:3000/accountManagement/getUserByName", { name: name }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.data.success) {
                setUsers(response.data.data);
                NotificationManager.success(response.data.message, "Success");
            }
            else {
                NotificationManager.error(response.data.message, "Error");
            }
        } catch (error) {
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
                        {users.map((user) => (
                            <div class="col-lg-3 col-md-6 mb-4">
                                <div class="card h-100">
                                    <div class="card-body text-center">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                            class="rounded-circle img-fluid" style={{ width: "133px" }} />
                                        <h5 class="my-3">{user.firstName} {user.lastName}</h5>
                                        <p class="text-muted mb-1">{user.email}</p>
                                        <p class="text-muted mb-4">{user.role.toUpperCase()}</p>
                                        <div class="d-flex justify-content-center mb-2">
                                            <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary">Edit Account</button>
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
}

export default AdminDashboardUsersPage;