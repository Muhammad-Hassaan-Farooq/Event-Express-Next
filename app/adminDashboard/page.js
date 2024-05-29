import Link from 'next/link';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard</p>
            <Link href="/adminDashboard/users">Users Information</Link>
            <br/>
            <Link href="/adminDashboard/organizers">Organizers Information</Link>
        </div>
    );
}

export default AdminDashboard;