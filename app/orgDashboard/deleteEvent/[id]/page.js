"use client";

import { use, useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";

const DeleteEvent = () => {
    const { id } = useParams();
    const token = Cookies.get("token");
    const [showModal, setShowModal] = useState(true);
    const router = useRouter();
    
    const deleteEvent = async () => {
        try {
           const response = await axios.post("http://localhost:3000/event/deleteEvent", {
                id: id
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.data.success) {
                NotificationManager.success('Event deleted successfully', 'Success');
                setTimeout(() => {
                    router.push("/orgDashboard");
                }, 2000);
            } else {
                NotificationManager.error(response.data.message, 'Error');
            }
        } catch (error) {
            console.log("AAAAAAAA")
            console.error(error);
        }
    }

    return (
        <div>
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Event Confirmation</h5>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this event?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => {
                                setShowModal(false);
                                router.push("/orgDashboard");
                                }}>Close</button>
                            <button type="button" className="btn btn-danger" onClick={async () => {
                                deleteEvent();
                                setShowModal(false);
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}></div>
        <div className={`modal-backdrop fade ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }}></div>
    </div>
    )
}

export default DeleteEvent;