function EditableHeroSection1({
  setComponentStates,
  state,
  section,
  componentId,
}) {
  const { hook, title, subtitle, backgroundImage, picture } = state;

  const handleHookChange = (e) => {
    setComponentStates((prevStates) => ({
      ...prevStates,
      [section]: {
        ...prevStates[section],
        [componentId]: {
          ...prevStates[section][componentId],
          hook: e.target.value,
        },
      },
    }));
  };

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
      <label for="hook">Hook</label>
      <input
        type="text"
        className="form-control mb-3"
        id="hook"
        value={hook}
        onChange={handleHookChange}
      />
      <label for="title">Title</label>
      <input
        type="text"
        className="form-control mb-3"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
      <label for="subtitle">Subtitle</label>
      <input
        type="text"
        className="form-control mb-3"
        id="subtitle"
        value={subtitle}
        onChange={handleSubtitleChange}
      />
      <label for="picture">Picture</label>
      <input type="file" className="form-control-file mb-3" id="picture" />
      <label for="backgroundImage">Background Image</label>
      <input
        type="file"
        className="form-control-file mb-3"
        id="backgroundImage"
      />
    </div>
  );
}

export default EditableHeroSection1;
