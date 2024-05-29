import HeroSection1 from "./CMSComponents/HeroSection1";
import HeroSection2 from "./CMSComponents/HeroSection2";
import TicketingSection4 from "./CMSComponents/TicketingSection4";
import TimelineSection1 from "./CMSComponents/TimelineSection1";
import { useState } from "react";
import "../styles/MainPage.css";
import initialComponents from "./Values/initialValues";

function MainPage({
  setCurrentlySelectedSection,
  currentlySelectedSection,
  componentStates,
  setComponentStates,
  sections,
  setSections,
}) {
  const componentMap = {
    HeroSection1: HeroSection1,
    HeroSection2: HeroSection2,
    TicketSection4: TicketingSection4,
    TimelineSection1: TimelineSection1,
  };

  const setSection = (section) => {
    if (currentlySelectedSection !== section) {
      setCurrentlySelectedSection(section);
    }
  };

  const renderComponent = (section, componentId) => {
    const Component = componentMap[componentId];

    return <Component {...componentStates[section][componentId]} />;
  };

  const handleDrop = (e, section) => {
    e.preventDefault();
    const componentId = e.dataTransfer.getData("id");
    setSections({ ...sections, [section]: componentId });

    if (!componentStates[section][componentId]) {
      setComponentStates((prevStates) => ({
        ...prevStates,
        [section]: {
          [componentId]: initialComponents[componentId],
        },
      }));
    }
  };

  return (
    <div>
      <div
        id="Section1"
        className="vh-100 border cms-section"
        onDrop={(e) => handleDrop(e, "Section1")}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => setSection("Section1")}
      >
        {sections.Section1 && renderComponent("Section1", sections.Section1)}
      </div>
      <div
        id="Section2"
        className="vh-100 border cms-section"
        onDrop={(e) => handleDrop(e, "Section2")}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => setSection("Section2")}
      >
        {sections.Section2 && renderComponent("Section2", sections.Section2)}
      </div>
      <div
        id="Section3"
        className="vh-100 border cms-section"
        onDrop={(e) => handleDrop(e, "Section3")}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => setSection("Section3")}
      >
        {sections.Section3 && renderComponent("Section3", sections.Section3)}
      </div>
      <div
        id="Section4"
        className="vh-100 border cms-section"
        onDrop={(e) => handleDrop(e, "Section4")}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => setSection("Section4")}
      >
        {" "}
        {sections.Section4 && renderComponent("Section4", sections.Section4)}
      </div>
      <div
        id="Section5"
        className="vh-100 border cms-section"
        onDrop={(e) => handleDrop(e, "Section5")}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => setSection("Section5")}
      >
        {sections.Section5 && renderComponent("Section5", sections.Section5)}
      </div>
    </div>
  );
}

export default MainPage;
