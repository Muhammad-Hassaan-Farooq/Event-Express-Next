"use client";
import LeftMenu from "./components/LeftMenu";
import MainPage from "./components/MainPage";
import PreviewButton from "./components/PreviewButton";
import { useState } from "react";
import Slider from "./components/Slider";

function Page() {
  const [currentlySelectedSection, setCurrentlySelectedSection] = useState("");

  return (
    <>
      <PreviewButton />
      <MainPage
        setCurrentlySelectedSection={setCurrentlySelectedSection}
        currentlySelectedSection={currentlySelectedSection}
      />
      <LeftMenu currentlySelectedSection={currentlySelectedSection} />
    </>
  );
}

export default Page;
