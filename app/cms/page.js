"use client";
import LeftMenu from "./components/LeftMenu";
import MainPage from "./components/MainPage";
import PreviewButton from "./components/PreviewButton";
import { useState } from "react";
import Slider from "./components/Slider";

function Page() {
  const [currentlySelectedSection, setCurrentlySelectedSection] = useState("");

  const [componentStates, setComponentStates] = useState({
    Section1: {},
    Section2: {},
    Section3: {},
    Section4: {},
    Section5: {},
  });

  const [sections, setSections] = useState({
    Section1: "",
    Section2: "",
    Section3: "",
    Section4: "",
    Section5: "",
  });

  return (
    <>
      <PreviewButton />
      <MainPage
        setCurrentlySelectedSection={setCurrentlySelectedSection}
        currentlySelectedSection={currentlySelectedSection}
        componentStates={componentStates}
        setComponentStates={setComponentStates}
        sections={sections}
        setSections={setSections}
      />
      <LeftMenu
        currentlySelectedSection={currentlySelectedSection}
        sections={sections}
        componentStates={componentStates}
        setComponentStates={setComponentStates}
      />
    </>
  );
}

export default Page;
