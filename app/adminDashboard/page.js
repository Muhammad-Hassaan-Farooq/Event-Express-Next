"use client";
import Link from "next/link";
import NavbarComponent from "../components/Navbar";
import "./admin-dashboard.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const AdminDashboard = () => {
  const token = Cookies.get("token");
  const [users, setUsers] = useState(0)
  const [organizers, setOrganizers] = useState(0)

  const fetchData = async () => {
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
    )
    setUsers(usersResponse.data.data);
    setOrganizers(organizersResponse.data.data);
  };

  fetchData();
  return (
    <>
      <NavbarComponent />
      <div class="container bootstrap snippet">
        <div class="row">
          <div class="col-lg-2 col-sm-6">
            <div class="circle-tile ">
              <a href="#">
                <div class="circle-tile-heading dark-blue">
                  <i class="fa fa-users fa-fw fa-3x"></i>
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

          <div class="col-lg-2 col-sm-6">
            <div class="circle-tile ">
              <a href="#">
                <div class="circle-tile-heading red">
                  <i class="fa fa-users fa-fw fa-3x"></i>
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
    </>
  );
};

export default AdminDashboard;
