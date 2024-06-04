"use client";

import { Navbar, Nav, NavItem, Dropdown } from "react-bootstrap";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import logo from "../assets/logo.png";
import { jwtDecode } from "jwt-decode";
import "./navbar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function NavbarComponent({ eventId }) {
  const router = useRouter();
  const [isOnEventPage, setIsOnEventPage] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    if (pathName.includes("event")) {
      setIsOnEventPage(true);
    } else {
      setIsOnEventPage(false);
    }
  }, [pathName]);

  const handleRedirect = () => {
    const token = Cookies.get("token");
    const decodetoken = jwtDecode(token);
    if (decodetoken.role === "organizer") {
      router.push("/orgDashboard");
    } else if (decodetoken.role === "user") {
      router.push("/userDashboard");
    } else if (decodetoken.role === "admin") {
      router.push("/adminDashboard");
    }
  };

  const MarkAsAttending = async () => {
    try {
      const token = Cookies.get("token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      const response = await axios.post(
        `http://localhost:3000/event/attendingEvent/`,
        {
          id: eventId,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        NotificationManager.success(response.data.message, "Success", 1500);
      } else {
        NotificationManager.error(response.data.message, "Error", 1500);
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error", 1500);
    }
  };

  return (
    <Navbar expand="lg" className="p-3 navbar-main" fixed="top">
      <Navbar.Brand onClick={handleRedirect} style={{ cursor: "pointer" }}>
        <Image
          src={logo}
          height={35}
          width={50}
          className="align-center inline-block"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="me-auto ">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/FAQs">FAQ's</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/userDashboard/MyEvents">My Events</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          {isOnEventPage && (
            <Nav.Item>
              <Nav.Link
                onClick={MarkAsAttending}
                style={{
                  backgroundColor: "gold",
                  borderRadius: "5px",
                }}
              >
                Mark Yourself Attending
              </Nav.Link>
            </Nav.Item>
          )}
          <Nav.Item>
            <Dropdown align="end" style={{ marginLeft: "1.5em" }}>
              <Dropdown.Toggle as={Nav.Link} id="dropdown-custom-components">
                <Image src="/user.png" height={30} width={30} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">View Profile</Dropdown.Item>
                <Dropdown.Item
                  href="/signup"
                  onClick={() => {
                    Cookies.remove("token");
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      <NotificationContainer />
    </Navbar>
  );
}

export default NavbarComponent;
