"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Cookies from "js-cookie";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useRouter } from "next/navigation";
import "./profile-styles.css";

const AdminDashboardUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const token = Cookies.get("token");
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/accountManagement/getUsers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        if (response.data.success) {
          setUsers(response.data.data);
          NotificationManager.success(response.data.message, "Success", 1500);
        } else {
          NotificationManager.error(response.data.message, "Error", 1500);
        }
      } catch (error) {
        NotificationManager.error(response.data.message, "Error", 1500);
      }
    };

    fetchUsers();
  }, []);

  const findByName = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/accountManagement/getUserByName",
        { name: name },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        setUsers(response.data.data);
        NotificationManager.success(response.data.message, "Success", 1500);
      } else {
        NotificationManager.error(response.data.message, "Error", 1500);
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error");
    }
  };

  const handleChangeRole = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/accountManagement/changeRole",
        { email: email, role: "organizer" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        NotificationManager.success(response.data.message, "Success", 1500);
        setTimeout(() => {
          router.push("/adminDashboard");
        }, 2000);
      } else {
        NotificationManager.error(response.data.message, "Error", 1500);
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error", 1500);
    }
  };

  const handleDeleteUser = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/accountManagement/deleteAccount",
        { email: email },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        NotificationManager.success(response.data.message, "Success", 1500);
        setTimeout(() => {
          router.push("/adminDashboard/users");
        }, 2000);
      } else {
        NotificationManager.error(response.data.message, "Error", 1500);
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error", 1500);
    }
  };

  return (
    <div>
      <Navbar />
      <div class="d-flex justify-content-end">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <input
              class="form-control border-secondary border-right-0 rounded-0"
              type="search"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="example-search-input4"
              placeholder="Search By Name"
            />
          </div>
          <div class="col-auto">
            <button
              class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
              type="button"
              onClick={findByName}
            >
              Find <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      {
        <div class="container">
          <div class="row">
            <div
              class="section_heading text-center wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <h3>
                Active Users
              </h3>
              <div class="line"></div>
            </div>
            {users.map((user) => (
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-12 col-sm-8 col-lg-6"></div>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6 col-lg-3">
                    <div
                      class="single_advisor_profile wow fadeInUp"
                      data-wow-delay="0.2s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeInUp",
                      }}
                    >
                      <div class="advisor_thumb">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                        />
                      </div>

                      <div class="single_advisor_details_info">
                        <h6>
                          {user.firstName} {user.lastName}
                        </h6>
                        <p class="designation">{user.role.toUpperCase()}</p>
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-primary btn-sm mx-3"
                          onClick={() => handleChangeRole(user.email)}
                        >
                          Change Role To Organizer
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-sm p-1 mx-2"
                          onClick={() => handleDeleteUser(user.email)}
                        >
                          <img
                            src="/delete.png"
                            width="20"
                            height="20"
                            alt="delete"
                          />
                        </button>
                      </div>
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

export default AdminDashboardUsersPage;
