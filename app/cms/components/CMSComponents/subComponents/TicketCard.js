function TicketCard({ numberOfCards = 2 }) {
  return (
    <section class="bg-white">
      <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          {Array.from({ length: numberOfCards }).map((_, index) => {
            return (
              <div key={index} class="col px-lg-2">
                <div class="card shadow h-100 border-0">
                  <div class="card-header p-4 bg-info border-0">
                    <div class="text-light">
                      <h2 class="text-sm-center pb-4 mb-4 align-items-center">
                        <span>Beginer</span>
                      </h2>
                      <p class="text-sm-center pb-2">
                        Integer ac iaculis dui, a interdum tortor. Morbi
                        ultricies convallis quam.
                      </p>
                    </div>
                  </div>
                  <div class="card-body p-4 bg-light">
                    <div class="text-dark d-flex flex-column justify-content-between h-100">
                      <div>
                        <h1 class="pb-2 mb-2 align-items-center text-sm-center">
                          <span class="h4 ml-1">$</span>
                          <span>1.99</span>
                          <span class="h5 ml-1 text-black-50 font-normal text-lg">
                            /mo
                          </span>
                        </h1>
                        <p class="pb-2 mb-2">
                          <i class="fas fa-check-circle pr-2 text-info"></i>20
                          users included
                        </p>
                        <p class="pb-2 mb-2 text-muted">
                          <i class="fas fa-times-circle pr-2"></i>10 GB of
                          storage
                        </p>
                        <p class="pb-2 mb-2 text-muted">
                          <i class="fas fa-times-circle pr-2"></i>Email support
                        </p>
                        <p class="pb-2 mb-2 text-muted">
                          <i class="fas fa-times-circle pr-2"></i>AI Chatbot
                        </p>
                      </div>
                      <div class="mt-4">
                        <a
                          class="btn btn-block btn-info btn-lg text-center"
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

export default TicketCard;
