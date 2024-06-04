import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useRouter } from "next/navigation";
import NavbarComponent from "@/app/components/Navbar";
import { jwtDecode } from "jwt-decode";
import { CldUploadButton } from "next-cloudinary";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [attendeesLimit, setAttendeesLimit] = useState("");
  const [image, setImage] = useState("");

  const token = Cookies.get("token");
  const router = useRouter();

  const handleImageUpload = async (e) => {
    setImage(e.info.url);
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/event/createEvent",
        {
          title,
          description,
          date,
          location,
          price,
          attendeesLimit,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        NotificationManager.success("Event created successfully", "Success");
        setTimeout(() => {
          router.push(`/cms?eventId=${response.data.data}`);
        }, 2000);
      } else {
        NotificationManager.error(response.data.message, "Error");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error response data:", error.response.data);
        NotificationManager.error(error.response.data.message, "Error");
      } else {
        console.error("Unexpected error:", error);
        NotificationManager.error("An unexpected error occurred", "Error");
      }
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form
          onSubmit={handleCreateEvent}
          style={{
            width: "80%",
            maxWidth: "500px",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="title"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="description"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="date"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="location"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="price"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="price"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Event Capacity
            </label>
            <input
              type="number"
              id="attendeesLimit"
              value={attendeesLimit}
              onChange={(e) => setAttendeesLimit(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <div className="d-flex justify-content-center mt-3">
              <CldUploadButton
                className="btn btn-dark"
                onSuccess={handleImageUpload}
                uploadPreset="dzpzqu4x"
              >
                Upload Image
              </CldUploadButton>
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Create Event
          </button>
        </form>
        <NotificationContainer />
      </div>
    </>
  );
};

export default CreateEvent;
