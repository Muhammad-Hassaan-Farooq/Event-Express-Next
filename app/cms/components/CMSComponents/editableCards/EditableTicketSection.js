function EditableTicketSection({
  setComponentStates,
  state,
  section,
  componentId,
}) {
  const handleSelectChange = (e) => {
    setComponentStates((prevStates) => ({
      ...prevStates,
      [section]: {
        ...prevStates[section],
        [componentId]: {
          ...prevStates[section][componentId],
          numberOfCards: e.target.value,
        },
      },
    }));
  };
  const { numberOfCards } = state;
  return (
    <div className="form-group">
      <label for="exampleFormControlSelect1">Number of cards</label>
      <select
        class="form-control"
        id="exampleFormControlSelect1"
        value={numberOfCards}
        onChange={handleSelectChange}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>

      {Array.from({ length: numberOfCards }).map((_, index) => {
        return (
          <div key={index} className="card mt-3">
            <div className="card-header">Card {index}</div>
            <div className="form-group p-3">
              <label for="exampleFormControlInput1">Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={state.cards[index].title}
                onChange={(e) => {
                  setComponentStates((prevStates) => ({
                    ...prevStates,
                    [section]: {
                      ...prevStates[section],
                      [componentId]: {
                        ...prevStates[section][componentId],
                        cards: prevStates[section][componentId].cards.map(
                          (card, i) => {
                            if (i === index) {
                              return {
                                ...card,
                                title: e.target.value,
                              };
                            }
                            return card;
                          }
                        ),
                      },
                    },
                  }));
                }}
              />
              <label for="exampleFormControlInput1">Subtitle</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={state.cards[index].subtitle}
                onChange={(e) => {
                  setComponentStates((prevStates) => ({
                    ...prevStates,
                    [section]: {
                      ...prevStates[section],
                      [componentId]: {
                        ...prevStates[section][componentId],
                        cards: prevStates[section][componentId].cards.map(
                          (card, i) => {
                            if (i === index) {
                              return {
                                ...card,
                                subtitle: e.target.value,
                              };
                            }
                            return card;
                          }
                        ),
                      },
                    },
                  }));
                }}
              />
              <label for="exampleFormControlInput1">Price</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={state.cards[index].price}
                onChange={(e) => {
                  setComponentStates((prevStates) => ({
                    ...prevStates,
                    [section]: {
                      ...prevStates[section],
                      [componentId]: {
                        ...prevStates[section][componentId],
                        cards: prevStates[section][componentId].cards.map(
                          (card, i) => {
                            if (i === index) {
                              return {
                                ...card,
                                price: e.target.value,
                              };
                            }
                            return card;
                          }
                        ),
                      },
                    },
                  }));
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EditableTicketSection;
