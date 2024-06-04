"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./page.css";
import { login, logout } from "../../redux/features/auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button } from "react-bootstrap";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import logo from "../assets/logo.png";
import Image from "next/image";

function LoginPage() {
  const router = useRouter();

  const [forgotEmail, setForgotEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const [registerInput, setRegisterInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleSignup = async () => {
    await axios
      .post("http://localhost:3000/auth/signUp", registerInput)
      .then((res) => {
        if (res.data.success) {
          setTimeout(() => {
            NotificationManager.success(res.data.message, "Success", 1500);
          }, 1500);
          router.push("/signup");
        } else {
          NotificationManager.error(res.data.message, "Error", 1500);
        }
      })
      .catch((error) => {
        NotificationManager.error("Server Error", "Error", 1500);
      });
  };

  const handleLogin = async () => {
    await axios
      .post("http://localhost:3000/auth/login", input)
      .then((res) => {
        if (res.data.success) {
          Cookies.set("token", res.data.token);
          router.push("/");
        } else {
          NotificationManager.error(res.data.message, "Error", 1500);
        }
      })
      .catch((error) => {
        NotificationManager.error("Server Error", "Error", 1500);
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

  const handleSendResetLink = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/forgetPassword",
        { email: forgotEmail }
      );
      if (response.data.success) {
        NotificationManager.success(response.data.message, "Success", 1500);
        setIsModalOpen(false);
      } else {
        NotificationManager.error(response.data.message, "Error", 1500);
        setIsModalOpen(false);
      }
    } catch (error) {
      NotificationManager.error("Server Error", "Error", 1500);
    }
  };

  return (
    <>
      <div className="logo">
        <Image src={logo} alt="" />
      </div>

      <div class="section">
        <div class="container">
          <div class="row full-height justify-content-center">
            <div class="col-12 text-center align-self-center py-5">
              <div class="section pb-5 pt-5 pt-sm-2 text-center login-container">
                <h6 class="mb-0 pb-3 login-text">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Log In</h4>
                          <div class="form-group">
                            <input
                              type="email"
                              name="email"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              onChange={handleinputChange}
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              onChange={handleinputChange}
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a class="login-btn mt-4" onClick={handleLogin}>
                            Login
                          </a>
                          <p class="mb-0 mt-4 text-center">
                            <a class="link" onClick={handleModal}>
                              Forgot your password?
                            </a>
                          </p>
                          {isModalOpen && (
                            <div className="modal show d-block" role="dialog">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title text-dark">
                                      Forgot Password
                                    </h5>
                                  </div>
                                  <div className="modal-body ">
                                    <div className="mb-4">
                                      <label
                                        htmlFor="forgotEmail"
                                        className="text-dark"
                                      >
                                        Email address
                                      </label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="forgotEmail"
                                        name="forgotEmail"
                                        value={forgotEmail}
                                        onChange={(e) =>
                                          setForgotEmail(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="login-btn login-btn-secondary"
                                      onClick={() => setIsModalOpen(false)}
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="login-btn login-btn-primary"
                                      onClick={handleSendResetLink}
                                    >
                                      Send Reset Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div class="section text-center">
                          <h4 class="mb-4 pb-3">Sign Up</h4>
                          <div class="form-group">
                            <input
                              type="text"
                              name="firstName"
                              class="form-style"
                              placeholder="First Name"
                              id="logname"
                              autocomplete="off"
                              onChange={handleRegisterInput}
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="text"
                              name="lastName"
                              class="form-style"
                              placeholder="Last Name"
                              id="logname"
                              autocomplete="off"
                              onChange={handleRegisterInput}
                            />
                            <i class="input-icon uil uil-user"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              class="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                              onChange={handleRegisterInput}
                            />
                            <i class="input-icon uil uil-at"></i>
                          </div>
                          <div class="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              class="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                              onChange={handleRegisterInput}
                            />
                            <i class="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a onClick={handleSignup} class="login-btn mt-4">
                            SignUp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
    </>
  );
}

export default LoginPage;
