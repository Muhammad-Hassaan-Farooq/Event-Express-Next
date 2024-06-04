import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../styles/eventListItem.css";
import { CiLocationOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdOutlineReduceCapacity } from "react-icons/md";


function EventListItem({ event }) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/event/${event._id}`);
  };
  const [style, setStyle] = useState({ display: "none" });

  const image = event.image ? event.image : "https://i.imgur.com/GV2rUU0.jpg";
  return (
    <>
      {/* <div
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
            </div>
          </div>
          <div
            className="col-md-2 w-50 img-container d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: "cover",
            }}
          >
            <button
              style={style}
              type="button"
              className="noselect event-button"
              onClick={handleRedirect}
            >
              Visit Page
            </button>
          </div>
        </div>
      </div> */}
          <article class="postcard dark blue">
            <a class="postcard__img_link" onClick={handleRedirect} style={{cursor:"pointer"}}>
              <img
                class="postcard__img"
                src={image}
                alt="Image Title"
              />
            </a>
            <div class="postcard__text">
              <h1 class="postcard__title blue">
                <a onClick={handleRedirect} style={{cursor:"pointer"}}>{event.title}</a>
              </h1>
              <div class="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i class="fas fa-calendar-alt mr-2"></i>
                  {new Date(event.startDate).toDateString()}
                </time>
              </div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">{event.description}</div>
              <ul class="postcard__tagbox">
                <li class="tag__item">
                  <i class="fas fa-tag mr-2"><CiLocationOn/></i>
                  {event.location}
                </li>
                <li class="tag__item">
                  <i class="fas fa-clock mr-2"><MdOutlineReduceCapacity/></i>
                  {event.price}
                </li>
                <li class="tag__item play blue">
                  <a href="#">
                    <i class="fas fa-play mr-2"><FaUser/></i>
                    {event.createdBy}
                  </a>
                </li>
              </ul>
            </div>
          </article>
    </>
  );
}

export default EventListItem;
