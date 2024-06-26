import "../styles/listings.css";
import { useState } from "react";
import EventListItem from "./EventListItem";

function EventListing({ events }) {
  return (
    <ul className="list-group m-3">
      {events.map((event) => {
        return (
          <li className="list-group-item" key={event._id}>
            <EventListItem event={event} />
          </li>
        );
      })}
    </ul>
  );
}

export default EventListing;
