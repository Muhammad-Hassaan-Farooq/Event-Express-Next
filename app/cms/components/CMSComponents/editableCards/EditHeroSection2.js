function EditableHeroSection2({
  setComponentStates,
  state,
  section,
  componentId,
}) {
  const { title, subtitle } = state;

  const handleTitleChange = (e) => {
    setComponentStates((prevStates) => ({
      ...prevStates,
      [section]: {
        ...prevStates[section],
        [componentId]: {
          ...prevStates[section][componentId],
          title: e.target.value,
        },
      },
    }));
  };

  const handleSubtitleChange = (e) => {
    setComponentStates((prevStates) => ({
      ...prevStates,
      [section]: {
        ...prevStates[section],
        [componentId]: {
          ...prevStates[section][componentId],
          subtitle: e.target.value,
        },
      },
    }));
  };

  return (
    <div className="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        className="form-control mb-3"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
      <label for="subtitle">Subtitle</label>
      <textarea
        class="form-control mb-3"
        aria-label="With textarea"
        value={subtitle}
        onChange={handleSubtitleChange}
      ></textarea>
      <label for="formFile" class="form-label">
        Upload bg image
      </label>
      <input class="form-control mb-3" type="file" id="formFile" />
    </div>
  );
}

export default EditableHeroSection2;
