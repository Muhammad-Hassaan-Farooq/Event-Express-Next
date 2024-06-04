import "../styles/footer.css";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331"}}
    >
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#6351ce" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Event Express</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                Discover and manage university events effortlessly with our
                event management application. Purchase tickets, stay updated,
                and enjoy a seamless event experience designed for students,
                faculty, and staff.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Quick Links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="/" className="text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-white">
                  About
                </a>
              </p>
              <p>
                <a href="/contact-us" className="text-white">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="/FAQs" className="text-white">
                  FAQ's
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-home mr-3"></i> Karachi, Pakistan
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@eventexpress.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + (92) 333 1234567
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> + (92) 344 4421312
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="text-white">Copyrights &copy; all rights reserved 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
