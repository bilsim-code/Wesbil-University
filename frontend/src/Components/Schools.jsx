import schoolAssets from "./schoolsAssets";
//import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Schools = () => {
  return (
    <div>
      <div id="school" className="grid grid-cols-3 nav-ul-md:grid-cols-6 border-2 border-x border-t-[6px]  border-gray border-solid mx-10 nav-ul-md:mx-24 mb-20">
        {schoolAssets.map((item, index) => (
          <RouterLink
            to={item.url}
            key={index}
            className="justify-self-center w-full flex flex-col items-center gap-1 py-6 px-3 border border-gray border-solid text-blue-shade-1 font-semibold cursor-pointer hover:bg-gray-fade transition-all ease-in duration-200"
          >
            <img
              src={item.image}
              alt=""
              className="w-10 h-10 480px:w-14 480px:h-10 object-contain"
            />
            <p>{item.p}</p>
          </RouterLink>
        ))}
      </div>
      <div className="bg-gray">
      <h2 className="text-center font-medium text-2xl text-blue-shade-1 pt-2">Our Schools</h2>
      <div
        id="schools"
        className="w-full bg-gray flex flex-wrap gap-3 px-10 py-10 mb-10 items-center nav-ul-md:justify-center" 
      >
        <RouterLink
          to={"sob"}
          className="bg-gold-fade p-3 skew-x-[-20deg] rounded-l-md font-bold text-blue-shade-1 hover:text-royalblue transition-all duration-1000 ease-in-out"
        >
          <button>School of Business</button>
        </RouterLink>
        <RouterLink
          to={"sot"}
          className="bg-gold-fade p-3 skew-x-[-20deg] font-bold text-blue-shade-1  hover:text-royalblue transition-all duration-1000 ease-in-out"
        >
          School of Technology
        </RouterLink>
        <RouterLink
          to={"som"}
          className="bg-gold-fade p-3 skew-x-[-20deg] font-bold text-blue-shade-1  hover:text-royalblue transition-all duration-1000 ease-in-out"
        >
          School of Medicine
        </RouterLink>
        <RouterLink
          to={"sms"}
          className="bg-gold-fade p-3 skew-x-[-20deg] font-bold text-blue-shade-1  hover:text-royalblue transition-all duration-1000 ease-in-out"
        >
          School of Mathematics and Statistics
        </RouterLink>
        <RouterLink
          to={"soe"}
          className="bg-gold-fade p-3 skew-x-[-20deg] rounded-r-md font-bold text-blue-shade-1  hover:text-royalblue transition-all duration-1000 ease-in-out"
        >
          School of Education, Arts &amp; Sciences
        </RouterLink>
      </div>
      </div>
    </div>
  );
};

export default Schools;
