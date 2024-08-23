import PortalSidebar from "../Components/PortalSidebar";
import { useState } from "react";
import MyTimetable from "./MyTimetable";
import UnitsRegistration from "./UnitsRegistration";
import ExamResults from "./ExamResults";
import Accomodation from "./Accomodation";
import FeesStatement from "./FeesStatement";

const ERegistrar = () => {
  const [clickState, setClickState] = useState("profile");
  return (
    <div className="mt-[66px] px-5 flex gap-[4%]">
      <PortalSidebar setClickState={setClickState} />
      {/* second container */}
      {clickState === "profile" ? (
        <div>
          <p>Hi, my name is Bildad and I am happy to be here</p>
        </div>
      ) : clickState === 'timetable' ?  (
        <MyTimetable />
      ): clickState === 'units-registration' ? (
        <UnitsRegistration/>
      ): clickState === "exam-results" ? (
        <ExamResults/>
      ): clickState === "accomodation" ? (
        <Accomodation/>
      ): clickState === 'fees-statement' ?  (
        <FeesStatement/>
      ): (
        null
      )}
    </div>
  );
};

export default ERegistrar;
