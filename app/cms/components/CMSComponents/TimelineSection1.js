function TimelineSection1({ numberOfEvents, events }) {
  return (
    <section className="bg-white h-100">
      <div className="container py-5">
        <ul className="list-group list-group-flush">
          {Array.from({ length: numberOfEvents }).map((_, index) => {
            return (
              <li key={index} className="list-group-item py-4">
                <div className="row">
                  <div className="col-md-4">
                    <h5 className="row">
                      <div className="col-1 col-md-2 col-lg-2 pr-1 d-flex justify-content-center align-items-center">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-calendar2-date text-primary"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.445 12.438V7.104h-.633A12.6 12.6 0 0 0 4.5 7.91v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871C11.336 7.734 10.555 7 9.383 7c-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M14 2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM2 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                          ></path>
                          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"></path>
                        </svg>
                      </div>
                      <div className="col">
                        <span> {events[index].date} </span>
                      </div>
                    </h5>
                    <h6 className="text-muted row">
                      <div className="col-1 col-md-2 col-lg-2 pr-1 d-flex justify-content-center align-items-center">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-bookmark-check text-primary"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.5 2a.5.5 0 0 0-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 0 1 1 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 0 1 4.5 1h4a.5.5 0 0 1 0 1h-4z"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            d="M15.854 2.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 4.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="col">
                        <span> {events[index].location} </span>
                      </div>
                    </h6>
                    <h6 className="text-muted row">
                      <div className="col-1 col-md-2 col-lg-2 pr-1 d-flex justify-content-center align-items-center">
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-clock text-primary"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
                          ></path>
                          <path
                            fill-rule="evenodd"
                            d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                          ></path>
                        </svg>
                      </div>
                      <div className="col">
                        <span> {events[index].time} Hrs </span>
                      </div>
                    </h6>
                  </div>
                  <div className="col-md-8">
                    <div className="px-0 px-md-3 py-2 py-md-0 d-flex flex-column justify-content-between h-100">
                      <div>
                        <h3 className="card-title">{events[index].title}</h3>
                        <p className="card-text">{events[index].desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default TimelineSection1;
