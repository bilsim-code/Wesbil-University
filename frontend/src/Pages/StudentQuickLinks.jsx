import { Link } from "react-router-dom";
import {
  FaBookReader,
  FaBook,
  FaBriefcase,
  FaUserGraduate,
  FaPenAlt,
  FaBed,
} from "react-icons/fa";

const StudentQuickLinks = () => {
  return (
    <>
      <h2 className="py-5 font-semibold text-xl">Quick Links</h2>
      <div className="grid grid-cols-5 max-1300px:grid-cols-4 max-1080px:grid-cols-3 max-840px:grid-cols-2 max-480px:grid-cols-1 gap-y-6 place-items-center bg-gray-fade rounded-md p-4 py-6">
        <Link
          to={"/student-portal/eregistrar/courses/"}
          className="bg-white rounded-2xl rounded-r-none hover:shadow-2xl hover:-translate-y-1 hover:duration-300 p-5 w-[220px] max-609px:w-[160px] max-w-full shadow-xl flex flex-col border-l-[6px] uppercase font-semibold gap-4 h-[140px] max-609px:h-[140px] max-480px:w-full"
        >
          <span className="text-red text-xl max-609px:text-lg">
            Course Status
          </span>
          <FaBookReader className="size-10 max-609px:size-10" />
        </Link>
        <Link
          to={"/student-portal/eregistrar/semregister"}
          className="bg-white rounded-2xl rounded-r-none hover:shadow-2xl hover:-translate-y-1 hover:duration-300 p-5 w-[220px] max-609px:w-[160px] max-w-full shadow-xl flex flex-col border-l-[6px] uppercase font-semibold gap-4 h-[140px] max-609px:h-[140px] max-480px:w-full"
        >
          <span className="text-red text-xl max-609px:text-lg">
            Units Registration
          </span>
          <FaBook className="size-10 max-609px:size-10" />
        </Link>
        <Link
          to={"/student-portal/eregistrar/feestatement"}
          className="bg-white rounded-2xl rounded-r-none hover:shadow-2xl hover:-translate-y-1 hover:duration-300 p-5 w-[220px] max-609px:w-[160px] max-w-full shadow-xl flex flex-col border-l-[6px] uppercase font-semibold gap-4 h-[140px] max-609px:h-[140px] max-480px:w-full"
        >
          <span className="text-red text-xl max-609px:text-lg">
            Fee Statement
          </span>
          <FaBriefcase className="size-10 max-609px:size-10" />
        </Link>
        <Link
          to={"/student-portal/eregistrar/profile"}
          className="bg-white rounded-2xl rounded-r-none hover:shadow-2xl hover:-translate-y-1 hover:duration-300 p-5 w-[220px] max-609px:w-[160px] max-w-full shadow-xl flex flex-col border-l-[6px] uppercase font-semibold gap-4 h-[140px] max-609px:h-[140px] max-480px:w-full"
        >
          <span className="text-red text-xl max-609px:text-lg">
            Student Profile
          </span>
          <FaUserGraduate className="size-10 max-609px:size-10" />
        </Link>
        <Link
          to={"/student-portal/eregistrar/examresults"}
          className="bg-white rounded-2xl rounded-r-none hover:shadow-2xl hover:-translate-y-1 hover:duration-300 p-5 w-[220px] max-609px:w-[160px] max-w-full shadow-xl flex flex-col border-l-[6px] uppercase font-semibold gap-4 h-[140px] max-609px:h-[140px] max-480px:w-full"
        >
          <span className="text-red text-xl max-609px:text-lg">
            Exam Results
          </span>
          <FaPenAlt className="size-10 max-609px:size-10" />
        </Link>
        <Link
          to={"/student-portal/eregistrar/hostel"}
          className="bg-white rounded-2xl rounded-r-none hover:shadow-2xl hover:-translate-y-1 hover:duration-300 p-5 w-[220px] max-609px:w-[160px] max-w-full shadow-xl flex flex-col border-l-[6px] uppercase font-semibold gap-4 h-[140px] max-609px:h-[140px] max-480px:w-full"
        >
          <span className="text-red text-xl max-609px:text-lg">
            View Hostels
          </span>
          <FaBed className="size-10 max-609px:size-10" />
        </Link>
      </div>
    </>
  );
};

export default StudentQuickLinks;
