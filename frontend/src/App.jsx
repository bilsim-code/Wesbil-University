import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import MyLibrary from "./Pages/myLibrary";
import ERegistrar from "./Pages/ERegistrar";
import Elearning from "./Pages/Elearning";
import Portals from "./Pages/Portals";
import Sms from "./Pages/sms";
import Sob from "./Pages/sob";
import Sot from "./Pages/sot";
import Somed from "./Pages/somed";
import Soe from "./Pages/soe";
import JoinUs from "./Pages/JoinUs";
import Courses from "./Pages/Courses";
import Research from "./Pages/Research";
import Schools from "./Components/Schools";
import Campuses from "./Pages/Campuses";
import Footer from "./Components/Footer";
import AltCampus from "./Pages/AltCampus";
import MainCampus from "./Pages/MainCampus";
import Diploma from "./Pages/Diploma";
import Bachelors from "./Pages/Bachelors";
import Masters from "./Pages/Masters";
import PostGraduate from "./Pages/PostGraduate";
import ICTSupport from "./Pages/ICTSupport";
import RequestStudentEmail from "./Pages/RequestStudentEmail";
import StudentPortal from "./Pages/StudentPortal";
import StaffPortal from "./Pages/StaffPortal";
import NewPrograms from "./Pages/NewPrograms";
import OnlineClasses from "./Pages/OnlineClasses";
import { useEffect } from "react";
import StudentPortalLogin from "./Pages/StudentPortalLogin";
import StaffPortalLogin from "./Pages/StaffPortalLogin";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
}, [location]);
  return (
    <div className="app overflow-x-hidden">
      <Routes>
        {/* INDEPENDENT ROUTES */}
       
       <Route path="/student-portal-login" element={<StudentPortalLogin/>} />
       <Route path="/staff-portal-login" element={<StaffPortalLogin/>} />
        <Route path="/join-us" element={<JoinUs />} />

        <Route
          path="/*"
          element={
            <>
              <Navbar className="mainNav" />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/mylibrary" element={<MyLibrary />} />
                <Route path="/eregistrar" element={<ERegistrar />} />
                <Route path="/elearning" element={<Elearning />} />
                <Route path="/portals" element={<Portals />} />
                <Route path="/student-portal" element={<StudentPortal />} />
                <Route path="/staff-login" element={<StaffPortal />} />
                {/* SCHOOLS */}
                <Route path="/sob" element={<Sob />} />
                <Route path="/sot" element={<Sot />} />
                <Route path="/som" element={<Somed />} />
                <Route path="/sms" element={<Sms />} />
                <Route path="/soe" element={<Soe />} />
                {/* ALT ROUTES */}
                <Route path="/courses" element={<Courses />} />
                <Route path="/research" element={<Research />} />
                <Route path="/schools" element={<Schools />} />
                <Route path="/campuses" element={<Campuses />} />
                {/* CAMPUSES */}
                <Route path="/main-campus" element={<MainCampus />} />
                <Route path="/alt-campus" element={<AltCampus />} />
                {/* PROGRAMMES */}
                <Route path="/diploma" element={<Diploma />} />
                <Route path="/bachelors" element={<Bachelors />} />
                <Route path="/masters" element={<Masters />} />
                <Route path="/post-graduate" element={<PostGraduate />} />
                {/* DROPDOWN */}
                <Route path="/ict-support" element={<ICTSupport />} />
                <Route
                  path="/student-email"
                  element={<RequestStudentEmail />}
                />

                {/* ACCORDION */}
                <Route path="/online-classes" element={<OnlineClasses />} />
                <Route path="/new-programs" element={<NewPrograms />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* NAVBAR */}
      </Routes>
    </div>
  );
};

export default App;
