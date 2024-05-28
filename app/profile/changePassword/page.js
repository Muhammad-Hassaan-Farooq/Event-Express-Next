"use client"
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useRouter } from "next/navigation";

const changePassword = () => {
    const token = Cookies.get("token");
    const router = useRouter();

    const [Oldpassword, setOldPassword] = useState('');
    const [Newpassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/profile/changePassword", {
                oldPassword: Oldpassword,
                newPassword: Newpassword,
                confirmPassword: ConfirmPassword
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data.success) {
                NotificationManager.success(response.data.message, 'Success');
                setTimeout(() => {
                    router.push("/signup");
                }, 2000);
            } else {
                NotificationManager.error(response.data.message, 'Error');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                console.error("Error response data:", error.response.data);
                NotificationManager.error(error.response.data.message, 'Error');
            } else {
                console.error("Unexpected error:", error);
                NotificationManager.error('An unexpected error occurred', 'Error');
            }
        }
    }

    return (
        <div class="card card-outline-secondary">
            <div class="card-header">
                <h3 class="mb-0">Change Password</h3>
            </div>
            <div class="card-body" style={{display:"flex" , alignItems:"center", justifyContent:"center"}}>
                <form class="form" role="form" autocomplete="off">
                    <div class="form-group" style={{paddingBottom:"15px"}}>
                        <label for="inputPasswordOld">Current Password</label>
                        <input type="password" class="form-control" id="inputPasswordOld" required="" value={Oldpassword} onChange={(e) => setOldPassword(e.target.value)} />
                    </div>
                    <div class="form-group" style={{paddingBottom:"15px"}}>
                        <label for="inputPasswordNew">New Password</label>
                        <input type="password" class="form-control" id="inputPasswordNew" required="" value={Newpassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <span class="form-text small text-muted">
                            The password must be 8-20 characters, and must <em>not</em> contain spaces.
                        </span>
                    </div>
                    <div class="form-group" style={{paddingBottom:"15px"}}>
                        <label for="inputPasswordNewVerify">Confirm Password</label>
                        <input type="password" class="form-control" id="inputPasswordNewVerify" required="" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <span class="form-text small text-muted">
                            To confirm, type the new password again.
                        </span>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success btn-lg float-right" onClick={handlePasswordChange}>Submit</button>
                    </div>
                </form>
            </div>
            <NotificationContainer />
        </div>
    )
}

export default changePassword;