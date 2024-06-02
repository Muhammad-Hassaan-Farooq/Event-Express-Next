import Hero1 from "../../../assets/Hero1.png";
import Image from "next/image";

function HeroSection1({ hook, title, subtitle, backgroundImage, picture }) {
  return (
    <section className="h-100">
      <div
        className="position-absolute h-100 w-100"
        style={{
          zIndex: -1,
          backgroundImage: backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container h-100 py-5">
        <div className="row h-100 justify-content-between align-items-center">
          <div className="col-lg-5 h-50">
            <div className="d-flex flex-column h-100 justify-content-between text-center text-lg-left">
              <h5>{hook}</h5>
              <h1 className="font-weight-bold">{title}</h1>
              <h5 className="text-muted font-weight-normal">{subtitle}</h5>
            </div>
          </div>
          <div className="col-lg-5 mt-3 mt-lg-0">
            <Image
              src={picture}
              width={100}
              height={100}
              className="h-100 w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
