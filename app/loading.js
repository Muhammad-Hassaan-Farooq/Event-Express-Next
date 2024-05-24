import "./styles/loading.css";

function Loading() {
  return (
    <div className="preloader-wrapper">
      <div
        className="spinner-grow text-primary"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
