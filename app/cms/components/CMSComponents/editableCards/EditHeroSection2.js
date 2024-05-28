function EditableHeroSection2({ content }) {
  return (
    <div className="form-group">
      <label for="title">Title</label>
      <input type="text" className="form-control" id="title" />
      <label for="subtitle">Subtitle</label>
      <input type="text" className="form-control" id="subtitle" />
      <label for="formFile" class="form-label">
        Upload bg image
      </label>
      <input class="form-control" type="file" id="formFile" />
    </div>
  );
}

export default EditableHeroSection2;
