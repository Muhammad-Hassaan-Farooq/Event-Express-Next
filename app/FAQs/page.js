"use client";
import NavbarComponent from "../components/Navbar";

const FAQPage = () => {
  return (
    <div>
      <NavbarComponent />
      <section
        class="bsb-faq-3 py-3 py-md-5 py-xl-8"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?cs=srgb&dl=pexels-codioful-7130555.jpg&fm=jpg')",
        }}
      >
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 class="mb-4 display-5 text-center text-dark">
                Frequently Asked Questions
              </h2>
              <p class="text-secondary text-center lead fs-4 text-dark">
                Welcome to our FAQ page, your one-stop resource for answers to
                commonly asked questions.
              </p>
              <p class="mb-5 text-center text-dark">
                Whether you&apos;re a new customer looking to learn more about
                what we offer or a long-time user seeking clarification on
                specific topics, this page has clear and concise information
                about our products and services.
              </p>
              <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div class="mb-8">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-11 col-xl-10">
                <div class="d-flex align-items-end mb-5">
                  <i class="bi bi-person-gear me-3 lh-1 display-5"></i>
                  <h3 class="m-0 text-dark">Your Account</h3>
                </div>
              </div>
              <div class="col-11 col-xl-10">
                <div class="accordion accordion-flush" id="faqAccount">
                  <div class="accordion-item bg-transparent border-top border-bottom py-3">
                    <h2 class="accordion-header" id="faqAccountHeading1">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse1"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse1"
                      >
                        What is an account?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse1"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading1"
                    >
                      <div class="accordion-body">
                        <p>
                          An account is a personal or organizational record that
                          allows you to access and manage various services,
                          often requiring authentication through a username and
                          password.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqAccountHeading2">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse2"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse2"
                      >
                        How do I create an account?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse2"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading2"
                    >
                      <div class="accordion-body">
                        <p>
                          To create an account, visit the website or application
                          and look for a &quot;Sign Up&quot; or &quot;Create
                          Account&quot; button. Follow the instructions to enter
                          your information and create a username and password.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqAccountHeading3">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse3"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse3"
                      >
                        How do I secure my account?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse3"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading3"
                    >
                      <div class="accordion-body">
                        <p>
                          To secure your account, use a robust and unique
                          password, enable two-factor authentication if
                          available, and be cautious about sharing your login
                          information. Regularly update your password and avoid
                          using easily guessable information like birthdays or
                          names.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqAccountHeading4">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse4"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse4"
                      >
                        What should I do if I forget my password?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse4"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading4"
                    >
                      <div class="accordion-body">
                        <p>
                          If you forget your password, most websites and
                          services offer a &quot;Forgot Password&quot; or
                          &quot;Reset Password&quot; option. Follow the steps to
                          reset your password, often involving an email or SMS
                          verification.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqAccountHeading5">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse5"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse5"
                      >
                        What should I do if my account is compromised or hacked?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse5"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading5"
                    >
                      <div class="accordion-body">
                        <p>
                          If you suspect your account has been compromised,
                          change your password immediately. Contact the service
                          provider for further assistance, and consider enabling
                          two-factor authentication for added security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-11 col-xl-10">
                <div class="d-flex align-items-end mb-5">
                  <i class="bi bi-cart-plus me-3 lh-1 display-5"></i>
                  <h3 class="m-0 mt-3 text-dark">Buying A Ticket</h3>
                </div>
              </div>
              <div class="col-11 col-xl-10">
                <div class="accordion accordion-flush" id="faqOrder">
                  <div class="accordion-item bg-transparent border-top border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading1">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse1"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse1"
                      >
                        Do I need to create an account to buy an event ticket?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse1"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading1"
                    >
                      <div class="accordion-body">
                        <p>
                          Yes, you should have an account to buy an event
                          ticket. Creating an account allows you to track your
                          past buying history and manage your tickets easily.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading2">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse2"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse2"
                      >
                        Can I change or cancel my ticket after it&apos;s been
                        purchased?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse2"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading2"
                    >
                      <div class="accordion-body">
                        <p>
                          Tickets can be modified or canceled within a short
                          time after purchasing them. You can click the cancel
                          ticket button on the event Page or Contact our
                          customer support as soon as possible to make any
                          changes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading3">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse3"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse3"
                      >
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse3"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading3"
                    >
                      <div class="accordion-body">
                        <p>
                          We accept various payment methods, including
                          credit/debit cards, PayPal, and other online payment
                          options. You can choose your preferred payment method
                          during the checkout process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading4">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse4"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse4"
                      >
                        Is my payment information secure?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse4"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading4"
                    >
                      <div class="accordion-body">
                        <p>
                          Yes, we take security seriously. We use
                          industry-standard encryption to protect your payment
                          information, and we do not store your payment details
                          on our servers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqOrderHeading5">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse5"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse5"
                      >
                        How do I know if my ticket purchase was successful??
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse5"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading5"
                    >
                      <div class="accordion-body">
                        <p>
                          You can check the &quot;My Events&quot; section in
                          your account for your purchase details.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-0">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-11 col-xl-10">
                <div class="d-flex align-items-end mb-5">
                  <i class="bi bi-bag-dash me-3 lh-1 display-5"></i>
                  <h3 class="m-0 mt-3 text-dark">Event Details</h3>
                </div>
              </div>
              <div class="col-11 col-xl-10">
                <div class="accordion accordion-flush" id="faqRefund">
                  <div class="accordion-item bg-transparent border-top border-bottom py-3">
                    <h2 class="accordion-header" id="faqRefundHeading1">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse1"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse1"
                      >
                        How can I get more information about an event?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse1"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading1"
                    >
                      <div class="accordion-body">
                        <p>
                          Each event has a detailed page with information about
                          the schedule, location, organizers, and any special
                          instructions. You can also contact the event organizer
                          directly through the provided contact information.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqRefundHeading2">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse2"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse2"
                      >
                        Are there any age restrictions for events?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse2"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading2"
                    >
                      <div class="accordion-body">
                        <p>
                          Some events may have age restrictions. This
                          information will be clearly mentioned in the event
                          description. Please check before purchasing a ticket.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqRefundHeading3">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse3"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse3"
                      >
                        How do I become an event organizer?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse3"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading3"
                    >
                      <div class="accordion-body">
                        <p>
                          To become an Event organizer you need to contact to
                          your Social Affairs department in your university to
                          give you the role to create and manage events.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqRefundHeading4">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse4"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse4"
                      >
                        How can I find events that match my interests?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse4"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading4"
                    >
                      <div class="accordion-body">
                        <p>
                          You can use the search and filter features on the
                          &quot;Events&quot; page to find events by keywords,
                          categories, dates, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item bg-transparent border-bottom py-3">
                    <h2 class="accordion-header" id="faqRefundHeading5">
                      <button
                        class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse5"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse5"
                      >
                        Are there any free events available?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse5"
                      class="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading5"
                    >
                      <div class="accordion-body">
                        <p>
                          Yes, many events are free to attend. You can filter
                          events by price to find those that are free of charge.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
