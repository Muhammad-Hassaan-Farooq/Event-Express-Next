import HeroSection1 from "../../cms/components/CMSComponents/HeroSection1";
import HeroSection2 from "../../cms/components/CMSComponents/HeroSection2";
import TicketingSection4 from "../../cms/components/CMSComponents/TicketingSection4";
import TimelineSection1 from "../../cms/components/CMSComponents/TimelineSection1";
import axios from "axios";
import { cookies } from "next/headers";
import NavbarComponent from "@/app/components/Navbar";

async function page({ params }) {
  try {
    const response = await axios.get(
      `http://localhost:3000/eventPage/getEventPage/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${cookies().get("token").value}`,
        },
      }
    );

    const sections = response.data.data.sections;
    const componentStates = response.data.data.componentStates;

    const componentMap = {
      HeroSection1: HeroSection1,
      HeroSection2: HeroSection2,
      TicketSection4: TicketingSection4,
      TimelineSection1: TimelineSection1,
    };

    const renderComponent = (section, componentId) => {
      const Component = componentMap[componentId];

      if (!Component) {
        return null;
      }

      return <Component {...componentStates[section][componentId]} />;
    };

    return (
      <div>
        <NavbarComponent eventId={params.id} />
        {Object.entries(sections).map(
          ([section, componentIds]) =>
            componentIds.length > 0 && (
              <div key={section} className="vh-100">
                {renderComponent(section, componentIds)}
              </div>
            )
        )}
      </div>
    );
  } catch (error) {}
}

export default page;
