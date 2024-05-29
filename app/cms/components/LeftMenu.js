const Hero1 = require("../../assets/Hero1.png");
const Hero2 = require("../../assets/Hero2.png");
const Ticket4 = require("../../assets/Ticket4.png");
const Timeline1 = require("../../assets/Timeline1.png");

import EditableHeroSection2 from "./CMSComponents/editableCards/EditHeroSection2";
import "../styles/LeftMenu.css";
import Image from "next/image";
import HeroSection1 from "./CMSComponents/HeroSection1";

function LeftMenu({
  currentlySelectedSection,
  sections,
  componentStates,
  setComponentStates,
}) {
  const editableComponentMap = {
    HeroSection1: EditableHeroSection2,
    HeroSection2: EditableHeroSection2,
    TicketSection4: EditableHeroSection2,
    TimelineSection1: EditableHeroSection2,
  };

  const renderEditableComponent = (section, componentId) => {
    const EditableComponent = editableComponentMap[componentId];

    return (
      <EditableComponent
        setComponentStates={setComponentStates}
        state={componentStates[section][componentId]}
        section={section}
        componentId={componentId}
      />
    );
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-end show"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasStart"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasStartLabel">
            Components
          </h5>
        </div>
        <div className="offcanvas-body small">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Hero Sections
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item component">
                      <div className="td-flex p-2  justify-content-center ">
                        <div
                          draggable="true"
                          id="HeroSection1"
                          onDragStart={(e) => {
                            e.dataTransfer.setData("id", e.target.id);
                          }}
                        >
                          <h4 className="text-center text-light bg-dark">
                            Hero section 1
                          </h4>
                          <Image className="img-fluid" src={Hero1} />
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item component">
                      <div className="td-flex  justify-content-center">
                        <div
                          draggable="true"
                          id="HeroSection2"
                          onDragStart={(e) => {
                            e.dataTransfer.setData("id", e.target.id);
                          }}
                        >
                          <h4 className="text-center text-light bg-dark">
                            Hero section 2
                          </h4>
                          <Image className="img-fluid" src={Hero2} />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Ticket Pricing
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item component">
                      <div className="td-flex  justify-content-center">
                        <div
                          draggable="true"
                          id="TicketSection4"
                          onDragStart={(e) => {
                            e.dataTransfer.setData("id", e.target.id);
                          }}
                        >
                          <h4 className="text-center text-light bg-dark">
                            Ticket Section 4
                          </h4>
                          <Image className="img-fluid" src={Ticket4} />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Speakers
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classNamees that we use to style each element.
                  These classNamees control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any
                  of this with custom CSS or overriding our default variables.
                  It's also worth noting that just about any HTML can go within
                  the <code>.accordion-body</code>, though the transition does
                  limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Timeline
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <ul className="list-group">
                  <li className="list-group-item component">
                    <div className="td-flex  justify-content-center">
                      <div
                        draggable="true"
                        id="TimelineSection1"
                        onDragStart={(e) => {
                          e.dataTransfer.setData("id", e.target.id);
                        }}
                      >
                        <h4 className="text-center text-light bg-dark">
                          Timeline Section 1
                        </h4>
                        <Image className="img-fluid" src={Timeline1} />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title text-center">
                Currently selected section
              </h5>

              <h6 className="card-text text-center">
                {currentlySelectedSection}
              </h6>
              <h5 className="card-text text-center">
                Editing component: {sections[currentlySelectedSection]}
              </h5>
              {currentlySelectedSection &&
                sections[currentlySelectedSection] && (
                  <div className="mt-3">
                    {renderEditableComponent(
                      currentlySelectedSection,
                      sections[currentlySelectedSection]
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftMenu;
