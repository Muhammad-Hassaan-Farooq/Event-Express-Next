"use client";
import NavbarComponent from "../components/Navbar";


const AboutPage = () => {
  return (
    <>
      <NavbarComponent />
      <div
        className="bg-light"
        style={{
          backgroundImage:
            "url('https://visitabudhabi.ae/-/media/project/vad/homepage/november-2023/box-overlay/relaxing-at-nurai-island.jpg?cx=0.26&cy=0.51&cw=2046&ch=924&hash=95CE13079C8BE65F6BE3262469B1A439')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Our Mission</h1>
              <p className="lead text-muted mb-0">
                Welcome to Event Express, where our mission is to revolutionize
                the way universities manage and promote their events. We believe
                in the power of bringing students together through engaging and
                accessible events, fostering a vibrant campus life that enriches
                the academic experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white py-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light ">Our Vision</h2>
              <p className="font-italic text-muted mb-4">
                We envision a future where every university event is not just an
                isolated activity but a pivotal part of the campus experience,
                connecting students, faculty, and the broader university
                community. By leveraging technology, we aim to make event
                management more efficient, engaging, and impactful.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto"></div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Why Choose Us?</h2>
              <p class="font-italic text-muted mb-4 p-3 border rounded shadow-sm bg-light">
                <strong>Tailored for Universities:</strong> Unlike generic event
                management platforms, our features are specifically designed to
                address the unique challenges faced by educational institutions.
                <br />
                <strong>Intuitive and Accessible:</strong> Our platform is built
                with user experience in mind, ensuring that even those with
                limited technical skills can effortlessly create and manage
                events.
                <br />
                <strong>Dedicated Support:</strong> We offer robust customer
                support to assist you every step of the way, from setting up
                your first event to analyzing its success.
                <br />
                <strong>Continuous Improvement:</strong> We are committed to
                continually enhancing our platform based on user feedback and
                the latest technological advancements.
              </p>

              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-light py-5"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-silhouette-of-the-team-s-success-image_215394.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Hassaan Farooq</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Shaheer Alam</h5>
                <span className="small text-uppercase text-muted">
                  Co-Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Burhanuddin Markra</h5>
                <span className="small text-uppercase text-muted">
                  COO - Co-Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Sami Ul Ahbab</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Technyx Solutions
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
