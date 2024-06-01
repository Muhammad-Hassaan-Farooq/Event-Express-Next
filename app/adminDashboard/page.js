"use client";

import Link from "next/link";
import NavbarComponent from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <div>
      <NavbarComponent />
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard</p>
      <Link href="/adminDashboard/users">Users Information</Link>
      <br />
      <Link href="/adminDashboard/organizers">Organizers Information</Link>
    </div>
  );
};

export default AdminDashboard;
