export const Topbar = () => {
  return (
    <div className="px-3 py-2 mt-3 mb-1 bg-info">
      <div className="row align-items-center">
        <div className="col">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Enable
            </label>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-secondary btn-sm">
            Serialize JSON to console
          </button>
        </div>
      </div>
    </div>
  );
};
