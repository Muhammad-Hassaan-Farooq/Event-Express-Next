import Hero1 from "../../../assets/Hero1.png";
import Image from "next/image";

function HeroSection1({ hook, title, subtitle, backgroundImage, picture }) {
  return (
    <section class="h-100">
      <div
        class="position-absolute h-100 w-100"
        style={{
          zIndex: -1,
          backgroundImage: backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div class="container h-100 py-5">
        <div class="row h-100 justify-content-between align-items-center">
          <div class="col-lg-5 h-50">
            <div class="d-flex flex-column h-100 justify-content-between text-center text-lg-left">
              <h5>{hook}</h5>
              <h1 class="font-weight-bold">{title}</h1>
              <h5 class="text-muted font-weight-normal">{subtitle}</h5>
            </div>
          </div>
          <div class="col-lg-5 mt-3 mt-lg-0">
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
