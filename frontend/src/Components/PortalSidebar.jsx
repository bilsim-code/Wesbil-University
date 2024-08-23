import profile from "../assets/program-icon-3.png";
import {
  FaCalendarCheck,
  FaPencilAlt,
  FaBookReader,
  FaReceipt,
  FaBed,
  FaUtensils,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const PortalSidebar = ({setClickState}) => {
  return (
    <div className="w-[20%] max-1120px:w-[250px]  max-test-lg:w-[350px] max-w-[80%] border-r min-h-screen">
      <div onClick={() => setClickState("profile")} className="flex items-center mb-10 pt-4">
        <img
          src={profile}
          alt=""
          className="bg-gray size-8 rounded-full border-2 border-royalblue p-1  "
        />
        <h1 className="font-semibold pl-4 text-xl transition-all text-royalblue cursor-pointer hover:text-black ">Profile</h1>
      </div>

      <ul className="list-none flex flex-col">
        <div onClick={() => setClickState("timetable")} className="flex items-center text-royalblue font-medium mb-10 text-xl cursor-pointer hover:text-black transition-all">
          <FaCalendarCheck className="w-10" />
          <span className="pl-2 whitespace-nowrap">My Timetable</span>
        </div>
        <div onClick={() => setClickState("units-registration")} className="flex items-center text-royalblue font-medium mb-10 text-xl cursor-pointer hover:text-black transition-all">
          <FaPencilAlt className="w-10" />
          <span className="whitespace-nowrap pl-2">Units Registration</span>
        </div>
        <div onClick={() => setClickState("exam-results")} className="flex items-center text-royalblue font-medium mb-10 text-xl cursor-pointer hover:text-black transition-all">
          <FaBookReader className="w-10" />
          <span className="whitespace-nowrap pl-2">Exam Results</span>
        </div>
        <div onClick={() => setClickState("fees-statement")} className="flex items-center text-royalblue font-medium mb-10 text-xl cursor-pointer hover:text-black transition-all">
          <FaReceipt className="w-10"/>
          <span className="whitespace-nowrap pl-2">Fees Statement</span>
        </div>
        <div onClick={() => setClickState("accomodation")} className="flex-items-center text-royalblue font-medium text-xl cursor-pointer hover:text-black transition-all">
          <span>
            <FaBed className="w-10"/>
            <FaUtensils className="w-10"/>
          </span>
          <span className="pl-2">Hostels and Catering</span>
        </div>
      </ul>
    </div>
  );
};

export default PortalSidebar;
