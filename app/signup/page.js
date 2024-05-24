"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./page.css";
import { login, logout } from "../../redux/features/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [registerInput, setRegisterInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleSignup = () => {
    console.log("Signup", registerInput); // Logging input before sending it
    axios
      .post("http://localhost:3000/auth/signUp", registerInput)
      .then((res) => {
        console.log(res.data); // Logging response data
        alert("Signup successful!");
        // Further logic for handling signup success
      })
      .catch((error) => {
        console.error("Signup failed:", error); // Logging error if signup fails
        alert(`Signup failed: ${error.response.data.message}`);
        // Further logic for handling signup failure
      });
  };

  const handleLogin = () => {
    console.log("Login", input); // Logging input before sending it
    axios
      .post("http://localhost:3000/auth/login", input)
      .then((res) => {
        console.log(res.data); // Logging response data
        alert("Login successful!");
        dispatch(login(res.data.token));
        Cookies.set("token", res.data.token);
        router.push("/");
      })
      .catch((error) => {
        console.error("Login failed:", error); // Logging error if login fails
        alert(`Login failed: ${error.response.data.message}`);
        // Further logic for handling login failure
      });
  };

  const handleRegisterInput = (e) => {
    const { name, value } = e.target;
    setRegisterInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };

  const handleinputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };

  return (
    <div className="p-5 vh-100 main-div">
      <div className="container shadow p-3 bg-light d-flex flex-column border w-50">
        <ul className="nav nav-pills justify-content-center mb-3">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabChange("login")}
            >
              Login
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "register" ? "active" : ""}`}
              onClick={() => handleTabChange("register")}
            >
              Register
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className={`tab-pane fade ${
              activeTab === "login" ? "show active" : ""
            }`}
          >
            <div className="text-center mb-3">
              <p>Sign in with:</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                {/* Add your social media login buttons here */}
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <div className="mb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleinputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleinputChange}
              />
            </div>

            <div className="d-flex justify-content-between mx-4 mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>

            <button
              className="btn btn-primary mb-4 w-100"
              onClick={handleLogin}
            >
              Sign in
            </button>
            <p className="text-center">
              Not a member?{" "}
              <a href="#!" onClick={() => handleTabChange("register")}>
                Register
              </a>
            </p>
          </div>

          <div
            className={`tab-pane fade ${
              activeTab === "register" ? "show active" : ""
            }`}
          >
            <div className="text-center mb-3">
              <p>Sign up with:</p>

              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                {/* Add your social media login buttons here */}
              </div>

              <p className="text-center mt-3">or:</p>
            </div>

            <div className="mb-4">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="firstName"
                onChange={handleRegisterInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="lastName"
                onChange={handleRegisterInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="registerEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                name="email"
                onChange={handleRegisterInput}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="registerPassword"
                name="password"
                onChange={handleRegisterInput}
              />
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsAgreement"
              />
              <label className="form-check-label" htmlFor="termsAgreement">
                I have read and agree to the terms
              </label>
            </div>

            <button
              className="btn btn-primary mb-4 w-100"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
