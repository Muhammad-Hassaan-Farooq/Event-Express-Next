"use client";
import { CldUploadButton, getCldImageUrl } from "next-cloudinary";

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

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setComponentStates((prevStates) => ({
        ...prevStates,
        [section]: {
          ...prevStates[section],
          [componentId]: {
            ...prevStates[section][componentId],
            backgroundImage: `url(${reader.result})`,
          },
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const handlePictureChange = async (e) => {
    setComponentStates((prevStates) => ({
      ...prevStates,
      [section]: {
        ...prevStates[section],
        [componentId]: {
          ...prevStates[section][componentId],
          picture: e.info.url,
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

      <CldUploadButton
        onSuccess={handlePictureChange}
        uploadPreset="dzpzqu4x"
        options={{
          maxImageHeight: 350,
          maxImageWidth: 500,
        }}
      >
        Upload Picture
      </CldUploadButton>
      <CldUploadButton uploadPreset="dzpzqu4x">
        Upload Background Image
      </CldUploadButton>
    </div>
  );
}

export default EditableHeroSection1;
