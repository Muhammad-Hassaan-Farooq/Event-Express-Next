import { use, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useParams, useRouter } from "next/navigation";
import NavbarComponent from "@/app/components/Navbar";
import { jwtDecode } from "jwt-decode";

const EditEventDetails = (details) => {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [attendeesLimit, setAttendeesLimit] = useState('');
    const router = useRouter();
    const token = Cookies.get("token");
    const {id} = useParams();

    useEffect(() => {
        if (details) {
            console.log(details);
            setTitle(details.details.title);
            setDescription(details.details.description);
            setDate(details.details.startDate);
            setLocation(details.details.location);
            setPrice(details.details.price);
            setAttendeesLimit(details.details.attendeesLimit);
        }
    }, [details]);




    const handleEditEvent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/event/changeEventDetails`, {
                id: id,
                title,
                description,
                startDate,
                location,
                price,
                attendeesLimit
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                
            });
            
            if (response.data.success) {
                NotificationManager.success('Event edited successfully', 'Success');
                setTimeout(() => {
                    router.push("/orgDashboard");
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
        <>
            <h1>Edit New Event</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>               
                <form onSubmit={handleEditEvent} style={{ width: '80%', maxWidth: '500px', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="description" style={{ display: 'block', marginBottom: '5px' }}>Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="date" style={{ display: 'block', marginBottom: '5px' }}>Date</label>
                        <input
                            type="date"
                            id="date"
                            value={startDate}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="location" style={{ display: 'block', marginBottom: '5px' }}>Location</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="price" style={{ display: 'block', marginBottom: '5px' }}>Price</label>
                        <input
                            type="number"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="price" style={{ display: 'block', marginBottom: '5px' }}>Event Capacity</label>
                        <input
                            type="number"
                            id="attendeesLimit"
                            value={attendeesLimit}
                            onChange={(e) => setAttendeesLimit(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s' }}
                    >
                        Edit Event
                    </button>
                </form>
            <NotificationContainer />
        </div>
        </>
    );
}

export default EditEventDetails;