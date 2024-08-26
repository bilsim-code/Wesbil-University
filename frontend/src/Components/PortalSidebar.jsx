import { Link } from "react-router-dom";
import icon1 from "../assets/program-icon-1.png";
import icon2 from "../assets/program-icon-3.png";
import { FaBed, FaPen, FaBriefcase, FaLink, FaChartLine } from "react-icons/fa";
import { ChevronLeft, ChevronDown } from "react-feather";
import { XSquare } from "react-feather";
import { useState } from "react";

const PortalSidebar = () => {
  const [dropdownOn, setDropdownOn] = useState(null);

  function handleDropdown(value) {
    setDropdownOn((dropdownOn) => (dropdownOn === value ? null : value));
  }

  return (
    <div className="portal-sidebar">
      <XSquare className="absolute right-0 top-2 cursor-pointer hover:text-white" />
      <ul className="portal-sidebar-list">
        <Link to={"/student-portal/eregistrar"} className="link cursor-pointer">
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
              <span className="dropdown-span">Courses</span>
            </div>
            {dropdownOn === "courses" ? (<ChevronDown/>) : ( <ChevronLeft />)}
           
          </div>
          {dropdownOn === 'courses' ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[40px]">
              <Link
                className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all"
                to={"/student-portal/eregistrar/courses/"}
              >
                MyCourse
              </Link>
              <Link
                to={"/student-portal/eregistrar/course-transfers"}
                className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all"
              >
                Course Transfers
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main" onClick={() => handleDropdown("progression")}>
            <div className="dropdown-header">
              <FaChartLine />
              <span className="dropdown-span">Student Progression</span>
            </div>
            {dropdownOn === "progression" ? (<ChevronDown/>) : ( <ChevronLeft />)}
          </div>
          {dropdownOn === "progression" ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px]">
              <Link className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Semester Registration
              </Link>
              <Link className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Readmission
              </Link>
              <Link className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Retakes
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main">
            <div className="dropdown-header" onClick={() => handleDropdown("exams")}>
              <FaPen />
              <span className="dropdown-span">Examination</span>
            </div>
            {dropdownOn === "exams" ? (<ChevronDown/>) : ( <ChevronLeft />)}
          </div>
          {dropdownOn === "exams" ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px]">
              <Link className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Exam Results
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main">
            <div className="dropdown-header" onClick={() => handleDropdown("finance")}>
              <FaBriefcase />
              <span className="dropdown-span">Finance</span>
            </div>
            {dropdownOn === "finance" ? (<ChevronDown/>) : ( <ChevronLeft />)}
          </div>
          {dropdownOn === 'finance' ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px]">
              <Link className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Fee Statement
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main">
            <div className="dropdown-header" onClick={() => handleDropdown("accomodation")}>
              <FaBed />
              <span className="dropdown-span">Accomodation</span>
            </div>
            {dropdownOn === "accomodation" ? (<ChevronDown/>) : ( <ChevronLeft />)}
          </div>
          {dropdownOn === 'accomodation' ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px]">
              <Link className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                View/Book Hostel
              </Link>
            </div>
          ) : null}
        </div>
        <div className="link cursor-pointer">
          <div className="flex items-center justify-between dropdown-main"  onClick={() => handleDropdown("profile")}>
            <div className="dropdown-header">
              <img src={icon1} alt="" />
              <span className="dropdown-span">Profile</span>
            </div>
            {dropdownOn === "profile" ? (<ChevronDown/>) : ( <ChevronLeft />)}
          </div>
          {dropdownOn === 'profile' ? (
            <div className="dropdown-content bg-black-fade flex flex-col px-[60px] mb-4">
              <Link className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                View Profile
              </Link>
              <Link className="font-medium text-royalblue text-sm py-3 hover:text-white transition-all">
                Change Password
              </Link>
            </div>
          ) : null}
        </div>
      </ul>
    </div>
  );
};

export default PortalSidebar;
