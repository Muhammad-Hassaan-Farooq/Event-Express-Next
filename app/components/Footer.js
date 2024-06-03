import "../styles/footer.css";

const Footer = () => {
  return (
    <footer
      class="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      <section
        class="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#6351ce" }}
      >
        <div class="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="text-white me-4">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Event Express</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
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

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold">Quick Links</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="/" class="text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" class="text-white">
                  About
                </a>
              </p>
              <p>
                <a href="/contact-us" class="text-white">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="/FAQs" class="text-white">
                  FAQ's
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <i class="fas fa-home mr-3"></i> Karachi, Pakistan
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> info@eventexpress.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + (92) 333 1234567
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> + (92) 344 4421312
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p class="text-white">Copyrights &copy; all rights reserved 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
