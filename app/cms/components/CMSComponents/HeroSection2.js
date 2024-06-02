function HeroSection2({
  title = "The Earth is what we all have in common",
  subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis praesentium vel et commodi natus nemo, porro aperiam quo delenit itaque?",
  backgroundImage = "url('https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg')",
}) {
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
      <div className="container d-flex flex-column justify-content-around h-100 py-5">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="col-sm-8 text-center">
            <h1 className="display-5 font-weight-bold">{title}</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="col-sm-8 text-center">
            <h5 className="text-muted font-weight-normal">{subtitle}</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection2;
