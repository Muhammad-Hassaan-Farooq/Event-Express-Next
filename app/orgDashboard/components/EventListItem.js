import { useState } from "react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdOutlineReduceCapacity } from "react-icons/md";
import "../../styles/eventListItem.css";
import { FaDollarSign } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import { useRouter } from "next/navigation";
function EventListItem({ event }) {
  const [style, setStyle] = useState({ display: "none" });
  const router = useRouter();

  const handleRedirectToEdit = () => {
    router.push(`/orgDashboard/editEvent/${event._id}`);
  };

  const handleDelete = async () => {
    router.push(`/orgDashboard/deleteEvent/${event._id}`);
  };

  const image = event.image ? event.image : "https://i.imgur.com/GV2rUU0.jpg";
  return (
    <>
      <article class="postcard dark blue">
        <a class="postcard__img_link" style={{ cursor: "pointer" }}>
          <img class="postcard__img" src={image} alt="Image Title" />
        </a>

        <div class="postcard__text">
          <h1 class="postcard__title blue">
            <a style={{ cursor: "pointer" }}>{event.title}</a>
          </h1>
          <div class="postcard__subtitle small">
            <time datetime="2020-05-25 12:00:00">
              <i class="fas fa-calendar-alt mr-2">
                <FaCalendarAlt />
              </i>

              {new Date(event.startDate).toDateString()}
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">{event.description}</div>
          <ul class="postcard__tagbox">
            <li class="tag__item">
              <i class="fas fa-tag mr-2">
                <CiLocationOn />
              </i>
              {event.location}
            </li>
            <li class="tag__item">
              <i class="fas fa-clock mr-2">
                <FaDollarSign />
              </i>
              {event.price}
            </li>
            <li class="tag__item">
              <i class="fas fa-clock mr-2">
                <MdOutlineReduceCapacity />
              </i>
              {event.attendeesCount}/{event.attendeesLimit}
            </li>
            <li class="tag__item play blue">
              <a href="#">
                <i class="fas fa-play mr-2">
                  <FaUser />
                </i>
                {event.createdBy}
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column m-5">
          <button
            className="m-3 btn btn-light"
            style={{ zIndex: "1" }}
            onClick={handleRedirectToEdit}
          >
            Edit Details
          </button>
          <button
            className="m-3 btn btn-danger"
            style={{ zIndex: "1" }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </article>
    </>
  );
}

export default EventListItem;
