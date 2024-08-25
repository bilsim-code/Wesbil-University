import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logoImg from "../assets/wesbil_logo.png";
import contact_icon from "../assets/contact.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Search, Menu, XOctagon, Home } from "react-feather";
import { useContext, useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import profile from '../assets/faculty1.jpg';
import { AppContext } from "./AppContext";

const Navbar = () => {
  const location = useLocation();
  const [LinkDropdownOn, setLinkDropdownOn] = useState(false);
  const [portalDropdownOn, setPortalDropdownOn] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const {setSidebarOn} = useContext(AppContext);

  const navRef = useRef();

  useEffect(() => {
   const scroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add("white-nav");
      } else {
        navRef.current.classList.remove("white-nav");
      }
    });

     return() => window.removeEventListener('scroll', scroll)
  }, []);
  return (
    <nav
      ref={navRef}
      className={`navbar flex justify-between px-4 pt-3 nav-ul-md:justify-around transition-all duration-1000 nav-ul-md:px-0 items-center  pb-3 pr-0 fixed right-0 left-0 top-0 z-50 overflow-hidden ${location.pathname === '/courses' || location.pathname === '/research' || location.pathname === "/mylibrary"  || location.pathname === "/student-portal" || location.pathname === '/staff-portal' || location.pathname === '/student-portal/elearning' || location.pathname === '/student-portal/eregistrar' ? 'bg-black' : ''}`}
    >
      {location.pathname === "/student-portal/eregistrar" ? (
        <div className="flex items-center gap-5">
          <Home className="text-white cursor-pointer w-6 h-8" onClick={() => setSidebarOn(prev => !prev)}/>
        </div>
      ) : (
             <RouterLink to={"/"}>
        <img
          src={logoImg}
          alt="wesbil-logo"
          title="wesbil-logo"
          className="w-[80px]  h-16 rounded-[4px] object-cover "
        />
      </RouterLink> 
      )}

      <OutsideClickHandler onOutsideClick={() => setMenuShow(false)}>
        <ul
          className={`nav-ul bg-royalblue fixed right-0 pt-20 pb-10 px-6 rounded-bl-xl w-64 max-w-[100%] nav-ul-md:flex list-none nav-ul-md:text-lg nav-ul-md:items-center nav-ul-md:w-auto nav-ul-md:relative nav-ul-md:p-0 nav-ul-md:bg-transparent nav-ul-md:top-0 top-[-600px] transition-all duration-300 ${menuShow ? "top-[0]" : null}`}
        >
          {location.pathname === '/student-portal' || location.pathname === '/student-portal/eregistrar' || location.pathname === '/student-portal/elearning' || location.pathname === '/staff-portal' ? (
            <>
             <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium">
            <RouterLink
              onClick={() => setMenuShow(false)}
              to={"/student-portal"}
              className={`hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear ${location.pathname === "/student-portal" ? "border-b-4 border-solid border-gold" : ""} `}
            >
              Home
            </RouterLink>
          </li>
            <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium">
              <RouterLink onClick={() => setMenuShow(false)} to={'student-portal/eregistrar'} className={`hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear ${location.pathname === "/student-portal/eregistrar" ? "border-b-4 border-solid border-gold" : ""} `}>E-Registrar</RouterLink>
            </li>

            <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium">
              <RouterLink onClick={() => setMenuShow(false)} to={'student-portal/elearning'} className={`hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear ${location.pathname === "/student-portal/elearning" ? "border-b-4 border-solid border-gold" : ""} `}>E-Learning</RouterLink>
            </li>

            <li className="nav-li pb-6 text-black nav-ul-md:text-black nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium">
            <button
              onClick={() => setMenuShow(false)}
              className="cursor-pointer  p-2 px-4 bg-gold hover:bg-gold-fade text-base rounded-xl flex items-center gap-2 whitespace-nowrap transition-colors duration-500"
            >
              <span>Logout</span>
            </button>
          </li>
            </>
          ) :(
            <>
             <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium">
            <RouterLink
              onClick={() => setMenuShow(false)}
              to={"/"}
              className={`hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear ${location.pathname === "/" ? "border-b-4 border-solid border-gold" : ""} `}
            >
              Home
            </RouterLink>
          </li>
            <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium">
            {location.pathname === "/" ? (
              <ScrollLink to="school" spy={true} smooth={true} offset={100} onClick={() => setMenuShow(false)} className="cursor-pointer hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear no-underline" >Schools</ScrollLink>
            ):(
                  <RouterLink
              to="/#school" // Points to the home page with hash
              onClick={() => setMenuShow(false)}
              className="cursor-pointer hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear"
            >
              Schools
            </RouterLink>
            )}
        
          </li>
          <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium">
            <RouterLink
              onClick={() => setMenuShow(false)}
              to={"mylibrary"}
              className={`hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear ${location.pathname === "/mylibrary" ? "border-b-4 border-solid border-gold" : ""} `}
            >
              myLibrary
            </RouterLink>
          </li>
        {/*   <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[10px] font-medium">
            <RouterLink
              onClick={() => setMenuShow(false)}
              to={"eregistrar"}
              className={`hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear ${location.pathname === "/eregistrar" ? "border-b-4 border-solid border-gold" : ""} `}
            >
              E-registrar
            </RouterLink>
          </li> */}
         {/*  <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[10px] font-medium">
            <RouterLink
              onClick={() => setMenuShow(false)}
              to={"elearning"}
              className={`hover:border-b-4 border-solid border-gold pb-1 hover:text-gold transition-colors duration-400 ease-linear ${location.pathname === "/elearning" ? "border-b-4 border-solid border-gold" : ""} `}
            >
              E-Learning
            </RouterLink>
          </li> */}

          <OutsideClickHandler onOutsideClick={() => setLinkDropdownOn(false)}>
            {/* Dropdown */}
            <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium ">
              <div
                className={`flex items-center gap-1 cursor-pointer`}
                onClick={() => setLinkDropdownOn(!LinkDropdownOn)}
              >
                <span className="whitespace-nowrap">Quick Links</span>
                <span>
                  {LinkDropdownOn ? (
                    <FaChevronUp className="size-3" />
                  ) : (
                    <FaChevronDown className="size-3" />
                  )}
                </span>
              </div>
              {LinkDropdownOn ? (
                <div className="flex flex-col gap-1 bg-black text-gold  p-3 rounded-xl z-10 transition-all duration-[2s] fixed nav-ul-md:mt-4">
                  <RouterLink
                    onClick={() => setMenuShow(false)}
                    to={"join-us"}
                    className="whitespace-nowrap hover:text-white transition-all duration-300"
                  >
                    Online Application Portal
                  </RouterLink>
                  <RouterLink
                    onClick={() => setMenuShow(false)}
                    to={"ict-support"}
                    className="hover:text-white transition-all duration-300"
                  >
                    ICT Support
                  </RouterLink>
                  <RouterLink
                    to={"student-email"}
                    className="whitespace-nowrap hover:text-white transition-all duration-300"
                    onClick={() => setMenuShow(false)}
                  >
                    Request Student Email
                  </RouterLink>
                </div>
              ) : null}
            </li>
          </OutsideClickHandler>

          {/* Dropdown */}
          <OutsideClickHandler
            onOutsideClick={() => setPortalDropdownOn(false)}
          >
            <li className="nav-li pb-6 text-white nav-ul-md:text-white nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium ">
              <div
                className=" flex items-center cursor-pointer "
                onClick={() => setPortalDropdownOn(!portalDropdownOn)}
              >
                <span className="pr-1">Portals</span>
                <span>
                  {portalDropdownOn ? (
                    <FaChevronUp className="size-3" />
                  ) : (
                    <FaChevronDown className="size-3" />
                  )}
                </span>
              </div>
              {portalDropdownOn ? (
                <div className="flex flex-col gap-1 bg-black text-gold  p-3 rounded-xl z-10 transition-all duration-[2s] fixed nav-ul-md:mt-4">
                  <RouterLink
                    onClick={() => setMenuShow(false)}
                    to={"student-portal-login"}
                    className="whitespace-nowrap  hover:text-white transition-all duration-300"
                  >
                    Student Portal
                  </RouterLink>
                  <RouterLink
                    onClick={() => setMenuShow(false)}
                    to={"staff-portal-login"}
                    className="whitespace-nowrap hover:text-white transition-all duration-300"
                  >
                    Staff Portal
                  </RouterLink>
                  {/* <RouterLink
                    onClick={() => setMenuShow(false)}
                    to={"staff-portal-login"}
                    className="whitespace-nowrap hover:text-white transition-all duration-300"
                  >
                    Staff Portal
                  </RouterLink> */}
                </div>
              ) : null}
            </li>
          </OutsideClickHandler>
          <li className="nav-li pb-6 text-black nav-ul-md:text-black nav-ul-md:p-0 nav-ul-md:pr-[30px] font-medium">
            <button
              onClick={() => setMenuShow(false)}
              className="cursor-pointer  p-2 bg-gold hover:bg-gold-fade text-base rounded-2xl flex items-center gap-2 whitespace-nowrap transition-colors duration-500"
            >
              <span>Contact Us</span>
              <img className="size-4" src={contact_icon} alt="" />
            </button>
          </li>
            </>
          )}
          
        </ul>
      </OutsideClickHandler>

      {location.pathname === '/student-portal' ? (
          <div className="relative">
             <img src={profile} alt='' className="w-[40px] rounded-full"/>
             <div className="absolute size-3 right-[-4px] bottom-[-2px] rounded-full bg-green"></div>
          </div>
         
        ) : (null)}

      <div className="flex gap-4 pr-4 nav-ul-md:pr-0">
      {!(location.pathname === "/student-portal" || location.pathname === '/staff-portal' || location.pathname === '/student-portal/elearning' || location.pathname === '/student-portal/eregistrar' ) && (
        <Search className="nav-icon size-6 cursor-pointer text-white" />
      )}
        
        {menuShow ? (
          <XOctagon
            className="nav-icon size-6 text-white cursor-pointer z-50 nav-ul-md:hidden"
            onClick={() => setMenuShow(false)}
          />
        ) : (
          <Menu
            className="nav-icon size-6 text-white cursor-pointer z-50 nav-ul-md:hidden"
            onClick={() => setMenuShow(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
