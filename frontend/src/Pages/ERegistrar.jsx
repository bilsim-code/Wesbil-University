import PortalSidebar from "../Components/PortalSidebar";
import { Routes, Route } from "react-router-dom";
import MyCourses from "./MyCourses";
import StudentQuickLinks from "./StudentQuickLinks";
import CourseTransfers from "./CourseTransfers";
import Readmission from "./Readmission";
import SemRegister from "./SemRegister";
import Retakes from "./Retakes";
import ExamResults from "./ExamResults";
import FeesStatement from "./FeesStatement";
import Hostel from "./Hostel";
import Profile from './Profile'
import ChangePassword from "./ChangePassword";
import ReserveBed from "./ReserveBed";


const ERegistrar = () => {
  return (
    <div className="e-registrar ">
      <PortalSidebar  />
      <div className="sidebar-routes p-5 ml-14">
        <Routes>
          <Route path="/" element={<StudentQuickLinks />} />
          <Route path="/courses" element={<MyCourses/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/course-transfers" element={<CourseTransfers/>} />
          <Route path="/readmission" element={<Readmission/>} />
          <Route path="/semregister" element={<SemRegister/>} />
          <Route path="/retakes" element={<Retakes/>} />
          <Route path="/examresults" element={<ExamResults/>} />
          <Route path="/feestatement" element={<FeesStatement/>} />
          <Route path="/hostel" element={<Hostel/>} />
          <Route path="/profile/change-password" element={<ChangePassword/>} />
          <Route path="/hostel/reserve-bed" element={<ReserveBed/>} />
        </Routes>
        
      </div>
    </div>
  );
};

export default ERegistrar;

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
