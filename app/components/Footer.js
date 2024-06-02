import "../styles/footer.css";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialGoogle,
  SlSocialTwitter,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-light text-center text-white social-link">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-primary btn-floating m-1 social-link"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <SlSocialFacebook />
            </a>

            <a
              className="btn btn-primary btn-floating m-1 social-link"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <SlSocialTwitter />
            </a>

            <a
              className="btn btn-primary btn-floating m-1 social-link"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <SlSocialGoogle />
            </a>

            <a
              className="btn btn-primary btn-floating m-1 social-link"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <SlSocialInstagram />
            </a>

            <a
              className="btn btn-primary btn-floating m-1 social-link"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <SlSocialLinkedin />
            </a>

            <a
              className="btn btn-primary btn-floating m-1 social-link"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <SlSocialGithub />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright: Makra Inc
        </div>
      </footer>
    </div>
  );
};

export default Footer;
