export const SettingsPanel = () => {
  return (
    <div className="bg-light mt-2 px-3 py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h6 className="mb-0">Selected</h6>
            <span className="badge bg-primary">Selected</span>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <label htmlFor="propSlider" className="form-label">
                Prop
              </label>
              <input
                id="propSlider"
                type="range"
                className="form-range"
                min="7"
                max="50"
                defaultValue="0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};
