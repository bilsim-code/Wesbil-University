import profile from "../assets/program-icon-3.png";
import {
  FaCalendarCheck,
  FaPencilAlt,
  FaBookReader,
  FaReceipt,
  FaBed,
  FaUtensils,
} from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import OutsideClickHandler from "react-outside-click-handler";

// eslint-disable-next-line react/prop-types
const PortalSidebar = ({ setClickState, clickState }) => {
  const { sidebarOn, setSidebarOn } = useContext(AppContext);

  return (
    <OutsideClickHandler onOutsideClick={() => setSidebarOn(false)}>
      <div
        className={`relative w-[400px] min-h-screen overflow-y-auto  max-test-lg:w-[350px] max-w-[80%] pt-20 border-r-2   transition-all duration-1000 bg-white z-10 ${sidebarOn ? "block" : "hidden"} max-footer-md:fixed max-footer-md:top-0 max-footer-md:bottom-0 max-footer-md:left-0 max-600px:pt-20`}
      > <BiX
            className="absolute right-4 top-2 size-8 cursor-pointer max-footer-md:top-auto z-50"
            onClick={() => setSidebarOn(false)}
          />
          <div
            onClick={() => setClickState("profile")}
            className={`flex items-center p-4 mt-10 rounded-l-xl max-footer-md:rounded-l-none ${clickState === "profile" ? "bg-gold" : ""}`}
          >
            <img
              src={profile}
              alt=""
              className="bg-gray size-8 rounded-full border-2 border-royalblue p-1"
            />
            <h1
              className={`font-semibold pl-4 text-xl transition-all text-royalblue cursor-pointer hover:text-black`}
            >
              Profile
            </h1>
          </div>

          <ul className="list-none grid grid-cols-1 mt-10 gap-10">
            <div
              onClick={() => setClickState("timetable")}
              className={`flex items-center text-royalblue font-medium  rounded-l-xl text-xl max-footer-md:rounded-l-none cursor-pointer hover:text-black transition-all ${clickState === "timetable" ? "bg-gold" : ""}`}
            >
              <FaCalendarCheck className="w-10" />
              <span className="pl-2 whitespace-nowrap">My Timetable</span>
            </div>
            <div
              onClick={() => setClickState("units-registration")}
              className={`flex items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none ${clickState === "units-registration" ? "bg-gold" : ""}`}
            >
              <FaPencilAlt className="w-10" />
              <span className="whitespace-nowrap pl-2">Units Registration</span>
            </div>
            <div
              onClick={() => setClickState("units-registration")}
              className={`flex items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none ${clickState === "units-registration" ? "bg-gold" : ""}`}
            >
              <FaPencilAlt className="w-10" />
              <span className="whitespace-nowrap pl-2">Units Registration</span>
            </div>
            <div
              onClick={() => setClickState("units-registration")}
              className={`flex items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none ${clickState === "units-registration" ? "bg-gold" : ""}`}
            >
              <FaPencilAlt className="w-10" />
              <span className="whitespace-nowrap pl-2">Units Registration</span>
            </div>
            <div
              onClick={() => setClickState("units-registration")}
              className={`flex items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none ${clickState === "units-registration" ? "bg-gold" : ""}`}
            >
              <FaPencilAlt className="w-10" />
              <span className="whitespace-nowrap pl-2">Units Registration</span>
            </div>
            <div
              onClick={() => setClickState("units-registration")}
              className={`flex items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none ${clickState === "units-registration" ? "bg-gold" : ""}`}
            >
              <FaPencilAlt className="w-10" />
              <span className="whitespace-nowrap pl-2">Units Registration</span>
            </div>
            <div
              onClick={() => setClickState("units-registration")}
              className={`flex items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none ${clickState === "units-registration" ? "bg-gold" : ""}`}
            >
              <FaPencilAlt className="w-10" />
              <span className="whitespace-nowrap pl-2">Units Registration</span>
            </div>
            <div
              onClick={() => setClickState("units-registration")}
              className={`flex items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none ${clickState === "units-registration" ? "bg-gold" : ""}`}
            >
              <FaPencilAlt className="w-10" />
              <span className="whitespace-nowrap pl-2">Units Registration</span>
            </div>
            <div
              onClick={() => setClickState("exam-results")}
              className={`flex items-center text-royalblue font-medium rounded-l-xl max-footer-md:rounded-l-none text-xl cursor-pointer hover:text-black transition-all ${clickState === "exam-results" ? "bg-gold" : ""}`}
            >
              <FaBookReader className="w-10" />
              <span className="whitespace-nowrap pl-2">Exam Results</span>
            </div>
            <div
              onClick={() => setClickState("fees-statement")}
              className={`flex items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none ${clickState === "fees-statement" ? "bg-gold" : ""}`}
            >
              <FaReceipt className="w-10" />
              <span className="whitespace-nowrap pl-2">Fees Statement</span>
            </div>
            <div
              onClick={() => setClickState("accomodation")}
              className={`flex-items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all rounded-l-xl max-footer-md:rounded-l-none p-4 ${clickState === "accomodation" ? "bg-gold" : ""}`}
            >
              <span>
                <FaBed className="w-10" />
                <FaUtensils className="w-10" />
              </span>
              <span className="pl-2">Hostels and Catering</span>
            </div>
          </ul>
        </div>
    </OutsideClickHandler>
  );
};

export default PortalSidebar;
