function TicketingSection4({ numberOfCards, cards }) {
  if (numberOfCards < 1) numberOfCards = 1;
  if (numberOfCards > 4) numberOfCards = 4;
  console.log(cards);

  console.log;
  return (
    <section className="bg-white">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          {Array.from({ length: numberOfCards }).map((_, index) => {
            return (
              <div className="col px-lg-2">
                <div className="card shadow h-100 border-0">
                  <div className="card-header p-4 bg-info border-0">
                    <div className="text-light">
                      <h2 className="text-sm-center pb-4 mb-4 align-items-center">
                        <span>{cards[index].title}</span>
                      </h2>
                      <p className="text-sm-center pb-2">
                        {cards[index].subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="card-body p-4 bg-light">
                    <div className="text-dark d-flex flex-column justify-content-between h-100">
                      <div>
                        <h1 className="pb-2 mb-2 align-items-center text-sm-center">
                          <span className="h4 ml-1">$</span>
                          <span>{cards[index].price}</span>
                        </h1>

                        {cards[index].perks.map((feature) => {
                          return (
                            <p className="pb-2 mb-2">
                              <i className="fas fa-check-circle pr-2 text-info"></i>
                              {feature}
                            </p>
                          );
                        })}
                      </div>
                      <div className="mt-4">
                        <a
                          className="btn btn-block btn-info btn-lg text-center"
                          href="#"
                          role="button"
                        >
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TicketingSection4;
