"use client";
import NavbarComponent from "../components/Navbar";
import "../styles/contact-us.css";

const ContactUsPage = () => {
  return (
    <>
      <NavbarComponent />
      <section class="contact-address-area">
        <div class="container">
          <div class="sec-title-style1 text-center max-width">
            <div class="title">Contact Us</div>
            <div class="text">
              <div class="decor-left">
                <span></span>
              </div>
              <p>Quick Contact</p>
              <div class="decor-right">
                <span></span>
              </div>
            </div>
            <div class="bottom-text">
              <p>
                Our event management app is the trusted choice for university
                students and staff, simplifying event discovery, management, and
                ticket purchases for all campus activities.
              </p>
            </div>
          </div>
          <div class="contact-address-box row">
            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder">
                <span class="icon-clock-1">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                  <span class="path5"></span>
                  <span class="path6"></span>
                  <span class="path7"></span>
                  <span class="path8"></span>
                  <span class="path9"></span>
                  <span class="path10"></span>
                  <span class="path11"></span>
                  <span class="path12"></span>
                  <span class="path13"></span>
                  <span class="path14"></span>
                  <span class="path15"></span>
                  <span class="path16"></span>
                  <span class="path17"></span>
                  <span class="path18"></span>
                  <span class="path19"></span>
                  <span class="path20"></span>
                </span>
              </div>
              <h2>
                We can&apos;t wait to help you plan your next event. Contact us
                today!
              </h2>
            </div>
            <div class="col-sm-4 single-contact-address-box main-branch">
              <h3>Contact Info</h3>
              <div class="inner">
                <ul>
                  <li>
                    <div class="title">
                      <h4>Address:</h4>
                    </div>
                    <div class="text">
                      <p>
                        University Events Office,
                        <br />
                        123 University Avenue
                        <br />
                        Karachi, Pakistam
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Ph & Fax:</h4>
                    </div>
                    <div class="text">
                      <p>
                        +(92) 333 1234567 <br /> info@eventexpress.com
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4>Office Hrs:</h4>
                    </div>
                    <div class="text">
                      <p>
                        Monday to Friday: 9 AM - 5 PM
                        <br />
                        Saturday: 10 AM - 2 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4 single-contact-address-box text-center">
              <div class="icon-holder">
                <span class="icon-question-2">
                  <span class="path1"></span>
                  <span class="path2"></span>
                  <span class="path3"></span>
                  <span class="path4"></span>
                </span>
              </div>
              <h2>
                &quot;They made our wedding unforgettable!&quot; <br />- Jane D.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
