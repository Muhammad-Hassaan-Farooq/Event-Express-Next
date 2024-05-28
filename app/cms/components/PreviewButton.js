import { FaEyeSlash } from "react-icons/fa";
function PreviewButton() {
  return (
    <div className="d-flex justify-content-evenly">
      <button
        class="btn btn-outline-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasStart"
        aria-controls="offcanvasStart"
      >
        Preview <FaEyeSlash />
      </button>
    </div>
  );
}
export default PreviewButton;
