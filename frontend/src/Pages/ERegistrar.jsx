import PortalSidebar from "../Components/PortalSidebar";
import { useState } from "react";
import MyTimetable from "./MyTimetable";
import UnitsRegistration from "./UnitsRegistration";
import ExamResults from "./ExamResults";
import Accomodation from "./Accomodation";
import FeesStatement from "./FeesStatement";
import EregistrarHome from "../Components/EregistrarHome";

const ERegistrar = () => {
  const [clickState, setClickState] = useState("profile");
  return (
    <div className="mt-[66px] px-5 flex ">
      <PortalSidebar setClickState={setClickState} clickState={clickState} />
      {/* second container */}
      {clickState === "profile" ? (
       <EregistrarHome/>
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
