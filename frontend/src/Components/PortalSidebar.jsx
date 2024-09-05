import { Link } from "react-router-dom";
import icon1 from "../assets/program-icon-1.png";
import icon2 from "../assets/program-icon-3.png";
import { FaBed, FaPen, FaBriefcase, FaLink, FaChartLine } from "react-icons/fa";
import { ChevronLeft, ChevronDown } from "react-feather";
import { XSquare } from "react-feather";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import OutsideClickHandler from "react-outside-click-handler";

const PortalSidebar = () => {
  const [dropdownOn, setDropdownOn] = useState(null);
  const {sidebarOpen, setSidebarOpen} = useContext(AppContext)

  function handleDropdown(value) {
    setDropdownOn((dropdownOn) => (dropdownOn === value ? null : value));
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setSidebarOpen(false)}>
    <div className={`portal-sidebar ${sidebarOpen ? 'open' : ""}`}>
      {sidebarOpen ? (
        <XSquare onClick={() => setSidebarOpen(!sidebarOpen)} className=" xsquare absolute right-0 top-4 cursor-pointer hover:text-white size-10" />
      ): null}
      
      <ul className="portal-sidebar-list">
        <Link to={"/student-portal/eregistrar"} className={`link cursor-pointer ${location.pathname === "/student-portal/eregistrar" ? "bg-black-fade" : ""}`}>
          <div className="dropdown-header">
            <FaLink />
            <span className="dropdown-span">Quick Links</span>
          </div>
        </Link>
        <div className="link cursor-pointer">
          <div
            className="flex items-center justify-between dropdown-main"
            onClick={() => handleDropdown("courses")}
          >
            <div className="dropdown-header">
              <img src={icon2} alt="" />
              <span className="dropdown-span">My Course</span>
            </div>
            {dropdownOn === "courses" ? (<ChevronDown className="chevron"/>) : ( <ChevronLeft className="chevron" />)}
           
          </div>
          {dropdownOn === 'courses' && sidebarOpen  ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[40px]">
              <Link
                className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all"
                to={"/student-portal/eregistrar/courses/"}
              >
                Course Info
              </Link>
             {/*  <Link
                to={"/student-portal/eregistrar/course-transfers"}
                className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all"
              >
                Course Transfers
              </Link> */}
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main" onClick={() => handleDropdown("progression")}>
            <div className="dropdown-header">
              <FaChartLine />
              <span className="dropdown-span">My Units</span>
            </div>
            {dropdownOn === "progression" ? (<ChevronDown className="chevron"/>) : ( <ChevronLeft className="chevron" />)}
          </div>
          {dropdownOn === "progression" && sidebarOpen ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px]">
              <Link to={'/student-portal/eregistrar/semregister'} className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Units Registration
              </Link>
            {/*   <Link to={'/student-portal/eregistrar/readmission'} className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Readmission
              </Link> */}
              <Link to={'/student-portal/eregistrar/retakes'} className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Retakes/Supplementary exams
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main" onClick={() => handleDropdown("exams")}>
            <div className="dropdown-header">
              <FaPen />
              <span className="dropdown-span">Examination</span>
            </div>
            {dropdownOn === "exams" ? (<ChevronDown className="chevron"/>) : ( <ChevronLeft className="chevron" />)}
          </div>
          {dropdownOn === "exams" && sidebarOpen ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px]">
              <Link to={'/student-portal/eregistrar/examresults'} className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Exam Results
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main" onClick={() => handleDropdown("finance")}>
            <div className="dropdown-header" >
              <FaBriefcase />
              <span className="dropdown-span">Finance</span>
            </div>
            {dropdownOn === "finance" ? (<ChevronDown className="chevron"/>) : ( <ChevronLeft className="chevron" />)}
          </div>
          {dropdownOn === 'finance' && sidebarOpen ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px]">
              <Link to={'/student-portal/eregistrar/feestatement'} className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Fee Statement
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main" onClick={() => handleDropdown("accomodation")}>
            <div className="dropdown-header" >
              <FaBed />
              <span className="dropdown-span">My Accomodation</span>
            </div>
            {dropdownOn === "accomodation" ? (<ChevronDown className="chevron"/>) : ( <ChevronLeft className="chevron" />)}
          </div>
          {dropdownOn === 'accomodation' && sidebarOpen ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px]">
              <Link to={'/student-portal/eregistrar/hostel'} className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                View/Book Hostel
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main"  onClick={() => handleDropdown("profile")}>
            <div className="dropdown-header">
              <img src={icon1} alt="" />
              <span className="dropdown-span">My Profile</span>
            </div>
            {dropdownOn === "profile"? (<ChevronDown className="chevron"/>) : ( <ChevronLeft className="chevron" />)}
          </div>
          {dropdownOn === 'profile' && sidebarOpen ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px] mb-4">
              <Link to={'/student-portal/eregistrar/profile'} className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                View Profile
              </Link>
              <Link to={'/student-portal/eregistrar/profile/change-password'} className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Change Password
              </Link>
            </div>
          ) : null}
        </div>
      </ul>
    </div>
    </OutsideClickHandler>
  );
};

export default PortalSidebar;
