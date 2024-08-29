import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";

const Hostel = () => {
  return (
    <div className="relative">
      <h2 className="font-semibold font-serif text-black-shade mb-16">
        ACCOMODATION
      </h2>

      <Link to="reserve-bed" className="mb-3 p-2 rounded-md bg-royalblue text-white flex items-center w-fit absolute top-10 right-0 max-400px:text-[12px] max-400px:font-semibold max-w-full">
        <FaBed />
        <span className="pl-1">Reserve Bed</span>
      </Link>

      <div className="max-w-5xl">
        <div className="grid text-[.5rem] grid-rows-2 grid-cols-3 gap-y-3 gap-x-1 font-bold  border-b-2 bg-gray-fade 480px:grid-cols-6 480px:grid-rows-1 place-items-start pl-[1%] py-2 480px:text-[10px] 609px:text-sm">
          <p className="">ACADEMIC-YEAR</p>
          <p>SEMESTER</p>
          <p>HOSTEL</p>
          <p>ROOM</p>
          <p>BED</p>
          <p>STATUS</p>
        </div>
        <div className="grid text-[.5rem] grid-rows-2 grid-cols-3 gap-y-3 gap-x-1  border-b bg-white mt-2 480px:grid-cols-6 480px:grid-rows-1 place-items-start pl-[1%] py-2 480px:text-[10px] 609px:text-sm">
          <p className="">2024</p>
          <p>1</p>
          <p>Whatever</p>
          <p>0</p>
          <p>0</p>
          <p>RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
