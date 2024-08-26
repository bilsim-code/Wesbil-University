import { Link as RouterLink, useLocation } from "react-router-dom";
//import {Link as ScrollLink} from 'react-scroll';
import footer_logo from "../assets/footer-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
import {  } from "react";

const Footer = () => {
  const location = useLocation();
  return (
    <>
    {!(location.pathname === "/student-portal/eregistrar" || location.pathname === '/student-portal/eregistrar/courses/' || location.pathname === '/student-portal/eregistrar/student-progression' || location.pathname === '/student-portal/eregistrar/examination' || location.pathname === '/student-portal/eregistrar/finance' || location.pathname === '/student-portal/eregistrar/accomodation' || location.pathname === '/student-portal/eregistrar/course-transfers') && (
    <div className="bg-royalblue mt-20">
      {/* top */}
      <div className="p-6 grid grid-cols-1 grid-rows-4 text-white footer-md:grid-cols-4 footer-md:grid-rows-1">
        {/* image */}
        <div className="justify-self-center flex flex-col gap-4 mb-5 footer-md:justify-self-start footer-md:items-center footer-md:justify-center footer-md:p-2">
          <img
            src={footer_logo}
            alt=""
            className="footer-md:w-[220px] lg:w-[400px]"
          />
          <h2 className="text-center text-lg font-medium">
            Making World Leaders
          </h2>
        </div>
        {/* schools */}
        <div className="footer-md:border-r footer-md:border-l footer-md:p-2">
          <h2 className="font-bold text-2xl border-b border-dotted border-white mb-2 nav-ul-md:mr-24">
            Schools
          </h2>
          <div className="flex flex-col gap-2">
            <RouterLink to={"sob"} className="hover:underline">
              Schools of Business
            </RouterLink>
            <RouterLink to={"sot"} className="hover:underline">
              Schools of Technology
            </RouterLink>
            <RouterLink to={"som"} className="hover:underline">
             <p>Schools of Medicine</p> 
            </RouterLink>
            <RouterLink to={"sms"} className="hover:underline">
              Schools of Mathematics and Statistics
            </RouterLink>
            <RouterLink to={"soe"} className="hover:underline">
              Schools of Education, Arts & Social Sciences
            </RouterLink>
          </div>
        </div>
        {/* campuses */}
        <div className="footer-md:border-r footer-md:p-2">
          <h2 className="font-bold text-2xl border-b border-dotted border-white mb-2 nav-ul-md:mr-24">
            Campuses
          </h2>
          <div className="flex flex-col gap-2">
            <RouterLink to={"main-campus"} className="hover:underline">
              Main Campus
            </RouterLink>
            <RouterLink to={"alt-campus"} className="hover:underline">
              Alt Campus
            </RouterLink>
          </div>
        </div>
        {/* Quick Links */}
        <div className="footer-md:p-2">
          <h2 className="font-bold text-2xl border-b border-dotted border-white mb-2 nav-ul-md:mr-24">
            Quick Links
          </h2>
          <div className="flex flex-col gap-2">
            <RouterLink className="hover:underline">Virtual Campus</RouterLink>
            <RouterLink to={"student-portal"} className="hover:underline">
              Student Portal
            </RouterLink>
            <RouterLink to={"staff-portal"} className="hover:underline">
              Staff Portal
            </RouterLink>
            <RouterLink to={"student-email"} className="hover:underline">
              Student Email Activation Guide{" "}
            </RouterLink>
            <RouterLink className="hover:underline flex items-center gap-2">
              <span>Tenders</span>
              <div className="text-[10px] rounded-sm text-black font-bold bg-gold uppercase tender-show">
                + new
              </div>
            </RouterLink>
            <RouterLink className="hover:underline">Careers</RouterLink>
          </div>
        </div>
      </div>
      {/* bottom */}
      <footer className="bg-black text-white flex  flex-col-reverse gap-4 items-center justify-center footer-md:justify-around  footer-md:gap-0 py-10  mt-20 footer-md:font-mono nav-ul-md:flex-row">
        <p className="pb-4">
          &copy;Copyright All Rights Reserved {new Date().getFullYear()} |
          Wesbil University
        </p>
        <div className="flex gap-[10%]">
          <a href="">
            <FaFacebook className="size-6" />
          </a>
          <a href="">
            <FaInstagram className="size-6" />
          </a>
          <a href="">
            <FaXTwitter className="size-6" />
          </a>
          <a href="">
            <FaLinkedin className="size-6" />
          </a>
          <a href="mailto:bildadsimiyu4@gmail.com"> 
            <FaEnvelope className="size-6" />
          </a>
        </div>
      </footer>
    </div>
  )}
  </>
  );
};

export default Footer;
