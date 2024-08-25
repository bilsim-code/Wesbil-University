import PortalSidebar from "../Components/PortalSidebar"
import {Routes, Route} from 'react-router-dom';
import MyTimeTable from '../Pages/MyTimetable'

const ERegistrar = () => {
  return (
    <div className="e-registrar">
      <PortalSidebar/> 
      <Routes>
        <Route path="/courses" element={<MyTimeTable/>} />
      </Routes>
    </div>
  )
}

export default ERegistrar



/* import PortalSidebar from "../Components/PortalSidebar";
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
    <div className="mt-[66px] px-5 flex min-h-screen ">
      <PortalSidebar setClickState={setClickState} clickState={clickState} />
    
      <div className="flex-1">
        {clickState === "profile" ? (
          <EregistrarHome />
        ) : clickState === "timetable" ? (
          <MyTimetable />
        ) : clickState === "units-registration" ? (
          <UnitsRegistration />
        ) : clickState === "exam-results" ? (
          <ExamResults />
        ) : clickState === "accomodation" ? (
          <Accomodation />
        ) : clickState === "fees-statement" ? (
          <FeesStatement />
        ) : null}
      </div>
    </div>
  );
};

export default ERegistrar; */
