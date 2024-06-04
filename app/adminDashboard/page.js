"use client";
import Link from "next/link";
import { PiStudentFill } from "react-icons/pi";
import { FaPeopleRobbery } from "react-icons/fa6";
import "./admin-dashboard.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import NavbarComponent from "./components/Navbar";

const AdminDashboard = () => {
  const token = Cookies.get("token");
  const [users, setUsers] = useState(0);
  const [organizers, setOrganizers] = useState(0);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get(
        "http://localhost:3000/accountManagement/countUsers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const organizersResponse = await axios.get(
        "http://localhost:3000/accountManagement/countOrganizers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(usersResponse.data.data);
      setOrganizers(organizersResponse.data.data);
    } catch (error) {
      NotificationManager.error("An unexpected Error Occured", "Error", 1000);
    }
  };

  fetchData();
  return (
    <>
      <NavbarComponent />
      <div className="d-flex flex-column">
        <div>
          <h1 className="text-dark text-center">Admin Dashboard</h1>
        </div>
        <div class="d-flex justify-content-center bootstrap snippet vh-100">
          <div class="col-lg-2 col-sm-6 m-3">
            <div class="circle-tile ">
              <a href="#">
                <div class="circle-tile-heading dark-blue">
                  <PiStudentFill size={70} />
                </div>
              </a>
              <div class="circle-tile-content dark-blue">
                <div class="circle-tile-description text-faded"> Users</div>
                <div class="circle-tile-number text-faded ">{users}</div>
                <a class="circle-tile-footer" href="/adminDashboard/users">
                  More Info<i class="fa fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-sm-6 m-3">
            <div class="circle-tile ">
              <a href="#">
                <div class="circle-tile-heading red">
                  <FaPeopleRobbery size={70} />
                </div>
              </a>
              <div class="circle-tile-content red">
                <div class="circle-tile-description text-faded">
                  {" "}
                  Organizers{" "}
                </div>
                <div class="circle-tile-number text-faded ">{organizers}</div>
                <a class="circle-tile-footer" href="/adminDashboard/organizers">
                  More Info<i class="fa fa-chevron-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </>
  );
};

export default AdminDashboard;
