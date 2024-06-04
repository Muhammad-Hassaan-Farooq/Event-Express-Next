function EditableTimelineSection1({
  setComponentStates,
  state,
  section,
  componentId,
}) {
  const handleNumberOfEventsChange = (e) => {
    setComponentStates((prevStates) => ({
      ...prevStates,
      [section]: {
        ...prevStates[section],
        [componentId]: {
          ...prevStates[section][componentId],
          numberOfEvents: e.target.value,
        },
      },
    }));
  };

  const { numberOfEvents, events } = state;

  return (
    <div className="form-group">
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        value={numberOfEvents}
        onChange={handleNumberOfEventsChange}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      {Array.from({ length: numberOfEvents }).map((_, index) => (
        <div key={index} className="card mt-3">
          <div className="card-header">Timeline event {index}</div>
          <div className="form-group p-3">
            <label for="exampleFormControlInput1">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={events[index].title}
              onChange={(e) => {
                setComponentStates((prevStates) => ({
                  ...prevStates,
                  [section]: {
                    ...prevStates[section],
                    [componentId]: {
                      ...prevStates[section][componentId],
                      events: prevStates[section][componentId].events.map(
                        (event, i) => {
                          if (i === index) {
                            return {
                              ...event,
                              title: e.target.value,
                            };
                          }
                          return event;
                        }
                      ),
                    },
                  },
                }));
              }}
            />
            <label for="exampleFormControlInput1">Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={events[index].desc}
              onChange={(e) => {
                setComponentStates((prevStates) => ({
                  ...prevStates,
                  [section]: {
                    ...prevStates[section],
                    [componentId]: {
                      ...prevStates[section][componentId],
                      events: prevStates[section][componentId].events.map(
                        (event, i) => {
                          if (i === index) {
                            return {
                              ...event,
                              desc: e.target.value,
                            };
                          }
                          return event;
                        }
                      ),
                    },
                  },
                }));
              }}
            />
            <label for="exampleFormControlInput1">Date</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={events[index].date}
              onChange={(e) => {
                setComponentStates((prevStates) => ({
                  ...prevStates,
                  [section]: {
                    ...prevStates[section],
                    [componentId]: {
                      ...prevStates[section][componentId],
                      events: prevStates[section][componentId].events.map(
                        (event, i) => {
                          if (i === index) {
                            return {
                              ...event,
                              date: e.target.value,
                            };
                          }
                          return event;
                        }
                      ),
                    },
                  },
                }));
              }}
            />
            <label for="exampleFormControlInput1">Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={events[index].location}
              onChange={(e) => {
                setComponentStates((prevStates) => ({
                  ...prevStates,
                  [section]: {
                    ...prevStates[section],
                    [componentId]: {
                      ...prevStates[section][componentId],
                      events: prevStates[section][componentId].events.map(
                        (event, i) => {
                          if (i === index) {
                            return {
                              ...event,
                              location: e.target.value,
                            };
                          }
                          return event;
                        }
                      ),
                    },
                  },
                }));
              }}
            />
            <label for="exampleFormControlInput1">Time</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={events[index].time}
              onChange={(e) => {
                setComponentStates((prevStates) => ({
                  ...prevStates,
                  [section]: {
                    ...prevStates[section],
                    [componentId]: {
                      ...prevStates[section][componentId],
                      events: prevStates[section][componentId].events.map(
                        (event, i) => {
                          if (i === index) {
                            return {
                              ...event,
                              time: e.target.value,
                            };
                          }
                          return event;
                        }
                      ),
                    },
                  },
                }));
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditableTimelineSection1;
