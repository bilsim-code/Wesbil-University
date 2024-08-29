import { User, Send, } from "react-feather";
import {FaBriefcase, FaPhoneAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="mx-auto w-full  min-h-screen p-6">
      {/* Profile Header */}
      <div className="profile-cont flex flex-col items-center justify-center text-center uppercase mb-8">
        <h1 className="text-xl text-white font-bold pb-2.5 max-430px:lowercase max-430px:leading-8 line">Mr. John Paulsn Porter</h1>
        <p className="text-sm">Student</p>
        <Link
          to={"/student-profile/eregistrar/edit-profile"}
          className="bg-gold uppercase p-2 mt-4 rounded-md text-sm font-medium text-white"
        >
          Edit Profile
        </Link>
      </div>
      
      {/* Profile Details */}
      <div className="relative max-w-4xl mx-auto bg-gray-fade shadow-lg rounded-lg p-6 text-black-shade max-430px:pl-5">
        <div className="absolute left-1.5 top-4 bg-gold text-white p-2 rounded">
          <User />
        </div>
        <div className="border-l-4 border-gray-fade pl-8">
          <h2 className="text-lg font-semibold mb-4 uppercase max-test-md:text-sm">Personal Details</h2>
          <ul className="space-y-2 text-gray-700 pl-4 max-test-md:text-[12px]">
            <li>
              <span className="font-bold">Name:</span> <span>Mr. John Paulsn Porter</span>
            </li>
            <li>
              <span className="font-bold">Student No:</span> <span>whatever/343/22</span>
            </li>
            <li>
              <span className="font-bold">Gender:</span> <span>Male</span>
            </li>
            <li>
              <span className="font-bold">Date of Birth:</span> <span>2005-08-02</span>
            </li>
            <li>
              <span className="font-bold">National ID Number:</span> <span>33333333</span>
            </li>
            <li>
              <span className="font-bold">Disability:</span> <span>No</span>
            </li>
          </ul>
        </div>
      </div>

      {/* contact */}

      <div className="relative max-w-4xl my-10 mx-auto bg-gray-fade shadow-lg rounded-lg p-6 text-black-shade max-430px:pl-5">
        <div className="absolute left-1.5 top-4 bg-green-alt text-white p-2 rounded">
          <FaPhoneAlt />
        </div>
        <div className="border-l-4 border-gray-fade pl-8">
          <h2 className="text-lg font-semibold mb-4 uppercase max-test-md:text-sm">Contact Details</h2>
          <ul className="space-y-2 text-gray-700 pl-4 max-test-md:text-[12px]">
            <li>
              <span className="font-bold">Phone Number:</span> <span>0703981030</span>
            </li>
            <li>
              <span className="font-bold">Email:</span> <span>whatever@gmail.org</span>
            </li>
           
          </ul>
        </div>
      </div>

      {/* address information */}
      <div className="relative max-w-4xl my-10 mx-auto bg-gray-fade shadow-lg rounded-lg p-6 text-black-shade max-430px:pl-5">
        <div className="absolute left-1.5 top-4 bg-white text-black p-2 rounded">
          <Send />
        </div>
        <div className="border-l-4 border-gray-fade pl-8">
          <h2 className="text-lg font-semibold mb-4 uppercase max-test-md:text-sm">Address Information</h2>
          <ul className="space-y-2 text-gray-700 pl-4 max-test-md:text-[12px]">
            <li>
              <span className="font-bold">Country:</span> <span>KENYA</span>
            </li>
            <li>
              <span className="font-bold">County:</span> <span>Nakuru</span>
            </li>
            <li>
              <span className="font-bold">Sub County:</span> <span>Nakuru East</span>
            </li>
            <li>
              <span className="font-bold">Town:</span> <span>Nakuru Wast</span>
            </li>
           
          </ul>
        </div>
      </div>

      {/* course details */}
      <div className="relative max-w-4xl my-10 mx-auto bg-gray-fade shadow-lg rounded-lg p-6 text-black-shade max-430px:pl-5">
        <div className="absolute left-1.5 top-4 bg-black text-white p-2 rounded">
          <FaBriefcase />
        </div>
        <div className="border-l-4 border-gray-fade pl-8">
          <h2 className="text-lg font-semibold mb-4 uppercase max-test-md:text-sm">Course Details</h2>
          <ul className="space-y-2 text-gray-700 pl-4 max-test-md:text-[12px]">
            <li>
              <span className="font-bold">Campus:</span> <span>Main Campus</span>
            </li>
            <li>
              <span className="font-bold">Department:</span> <span>Computer Science</span>
            </li>
            <li>
              <span className="font-bold">Course:</span> <span>Bachelor of Science in Computer Science</span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
