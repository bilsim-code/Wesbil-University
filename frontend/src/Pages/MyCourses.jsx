import { FaClock, FaUserGraduate , FaCalculator, } from "react-icons/fa";
import {AlertTriangle, Repeat} from 'react-feather'
import {MdPlayArrow} from 'react-icons/md'

const MyCourses = () => {
  return (
    <div className="w-[600px] max-w-full mx-auto">
      <h1 className="uppercase font-medium py-6">My Course</h1>
      <div className="mb-10">
        <h1 className="font-medium bg-black-fade py-2.5 pl-[11.5%] text-gray-alt">
          Bachelor of Science in Computer Science
        </h1>
        <div className="flex gap-4 items-center h-[130px] max-test-lg:h-[200px]">
          {/* icons */}
          <div className="grid grid-rows-2 h-full gap-10 bg-green-bg pb-14 pt-4 px-3">
            <FaClock className="size-4 text-green-alt" />
            <FaUserGraduate className="size-4 text-green-alt" />
          </div>
          {/* content */}
          <div className="grid grid-rows-2 h-full gap-10 pb-14 pt-4 text-gray-alt">
            <h2>
              <span className="font-bold text-lg">Course Duration: </span> <span className="text-lg">4 Years</span>
            </h2>
            <h2>
              <span className="font-bold text-lg">Entry Grade: </span>
              <span className="text-lg">Minimum KCSE Mean Grade A-</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="font-medium bg-black-fade py-2.5 pl-[11.5%] text-gray-alt">
          Course Details
        </h1>
        <div className="flex gap-4 items-center h-[130px] max-test-lg:h-[200px]">
          {/* icons */}
          <div className="grid grid-rows-2 h-full gap-10 bg-green-bg pb-14 pt-4 px-3">
            <FaCalculator className="size-4 text-green-alt" />
            <Repeat className="size-4 text-green-alt" />
          </div>
          {/* content */}
          <div className="grid grid-rows-2 h-full gap-10 pb-14 pt-4 text-gray-alt">
            <h2>
              <span className="font-bold text-lg">Department: </span> <span className="text-lg">Computer Science and Information Technology</span>
            </h2>
            <h2>
              <span className="font-bold text-lg">Intake: </span>
              <span className="text-lg">September</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="font-medium bg-black-fade py-2.5 pl-[11.5%] text-gray-alt">
          Registration Details
        </h1>
        <div className="flex gap-4 items-center h-[130px] max-test-lg:h-[200px]">
          {/* icons */}
          <div className="grid grid-rows-2 h-full gap-10 bg-green-bg pb-14 pt-4 px-3">
            <MdPlayArrow className="size-6 text-green-alt" />
            <AlertTriangle className="size-4 text-green-alt" />
          </div>
          {/* content */}
          <div className="grid grid-rows-2 h-full gap-10 pb-14 pt-4 text-gray-alt">
            <h2>
              <span className="font-bold text-lg">Stage: </span> <span className="text-lg">Y2S2</span>
            </h2>
            <h2>
              <span className="font-bold text-lg">Status: </span>
              <span className="text-lg text-green-alt">Registered</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
