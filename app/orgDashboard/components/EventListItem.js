import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
function EventListItem({ event }) {
  const [style, setStyle] = useState({ display: "none" });
  const router = useRouter();
  return (
    <>
      <div
        className="card justify-content-center event-card"
        onMouseEnter={() => setStyle({ display: "block" })}
        onMouseLeave={() => setStyle({ display: "none" })}
      >
        <div className="row">
          <div className="col-md-2 w-50">
            <div className="card-body">
              <h5 className="card-title">{event.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {new Date(event.startDate).toDateString()}
              </h6>
              <p className="card-text">{event.description}</p>
              <p className="card-text">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="card-text">
                <strong>Price:</strong> ${event.price}
              </p>
              <p className="card-text">
                <strong>Organized by:</strong> {event.createdBy}
              </p>
              <p className="card-text">
                <strong>Attendees:</strong> {event.attendeesCount}/{event.attendeesLimit}
              </p>
            </div>
          </div>
          <div
            className="col-md-2 w-50 img-container d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: 'url("https://i.imgur.com/GV2rUU0.jpg")',
              backgroundSize: "cover",
            }}
          >
            <button
              style={{ ...style, marginRight: "20px" }}
              type="button"
              className="noselect event-button"
            >
              Edit Page
            </button>
            <button
              style={{ ...style, marginRight: "20px" }}
              type="button"
              className="noselect event-button"
              onClick={() =>
                router.push(`/orgDashboard/editEvent/${event._id}`)
              }
            >
              Edit Details
            </button>
            <button
              style={style}
              type="button"
              className="noselect event-button"
              onClick={() =>
                router.push(`/orgDashboard/deleteEvent/${event._id}`)
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventListItem;
