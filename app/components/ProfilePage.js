"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useRouter } from "next/navigation";

const ProfilePage = ({
  firstName,
  lastName,
  email,
  role,
  status,
  handleDelete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  const ModalOpen = () => {
    setShowModal(true);
  };


    return (
        <>
            <Navbar />
            <section style={{ backgroundColor: "#eee" }}>
                <div class="container py-5">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        class="rounded-circle img-fluid" style={{ width: "133px" }} />
                                    <h5 class="my-3">{firstName} {lastName}</h5>
                                    <p class="text-muted mb-1">{email}</p>
                                    <p class="text-muted mb-4">{role.toUpperCase()}</p>
                                    <div class="d-flex justify-content-center mb-2">
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary">Follow</button>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-primary ms-1">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Name</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{firstName} {lastName}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Password</p>
                                        </div>
                                        <div class="col-sm-9" style={{display:"flex"}}>
                                            <p class="text-muted mb-0">********</p>
                                            <Link href="/profile/changePassword" style={{marginLeft:"20px"}} ><Image src="/edit.png" height={20} width={20} style={{marginBottom:"5px"}}/></Link>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Email</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Role</p>
                                        </div>
                                        <div class="col-sm-9">
                                            <p class="text-muted mb-0">{role.toUpperCase()}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <p class="mb-0">Status</p>
                                        </div>
                                        <div class="col-sm-9">
                                            {status === "active" ? (
                                                <p className="text-muted mb-0">{status.toUpperCase()} <Image src="/green_tick.png" height={25} width={25} /></p>
                                            ) : (
                                                <p className="text-muted mb-0">{status.toUpperCase()} <Image src="/red_cross.png" height={25} width={25} /></p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-outline" onClick={ModalOpen}><Image src="/delete.png" width={20} height={20} /></button>
                            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Delete Account Confirmation</h5>
                                        </div>
                                        <div className="modal-body">
                                            Are you sure you want to delete your account?
                                        </div>
                                        <div class="form-group mx-3">
                                            <label for="exampleInputPassword1">If "Yes" then enter your password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                            <button type="button" className="btn btn-danger" onClick={async () => {
                                                setShowModal(false);
                                                const result = await handleDelete(password);
                                                if (result.success) {
                                                    NotificationManager.success(result.message, 'Success');
                                                    setTimeout(() => {
                                                        router.push("/signup");
                                                    }, 2000);
                                                }
                                                else {
                                                    NotificationManager.error(result.message, 'Error');
                                                }
                                            }}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`modal-backdrop fade ${showModal ? "show" : ""}`}
                style={{ display: showModal ? "block" : "none" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <NotificationContainer />
    </>
  );
};

export default ProfilePage;
