function Slider({ value }) {
  return (
    <>
      <label for="SectionsRange" class="form-label">
        Number of Sections
      </label>
      <input
        id="SectionsRange"
        type="range"
        class="form-range w-25"
        value={value}
        min="3"
        max="6"
      />
    </>
  );
}

export default Slider;
