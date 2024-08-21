import { Link } from "react-scroll";

const Courses = () => {
  return (
    <div className="min-h-screen mt-32 w-[90%] mx-auto">
      <div className="mb-20">
        <p className="font-semibold text-xl font-serif">
          Wesbil University has 5 schools, each with their own departments and
          courses.The schools include:
        </p>
        <ul className="list-none">
          <li>
            <Link
              to="courses-tech"
              spy={true}
              smooth={true}
              offset={-100}
              className="text-blue-shade-1 font-medium text-lg cursor-pointer hover:underline"
            >
              School of Technology
            </Link>
          </li>
          <li>
            <Link
              to="courses-business"
              spy={true}
              smooth={true}
              offset={-100}
              className="text-blue-shade-1 font-medium text-lg cursor-pointer hover:underline"
              activeClass="text-purple"
            >
              School of Business
            </Link>
          </li>
          <li>
            <Link
              to="courses-med"
              spy={true}
              smooth={true}
              offset={-100}
              className="text-blue-shade-1 font-medium text-lg cursor-pointer hover:underline"
              activeClass="text-purple"
            >
              School of Medicine
            </Link>
          </li>
          <li>
            <Link
              to="courses-maths"
              spy={true}
              smooth={true}
              offset={-100}
              className="text-blue-shade-1 font-medium text-lg cursor-pointer hover:underline"
              activeClass="text-purple"
            >
              School of Mathematics and Statistics
            </Link>
          </li>
          <li>
            <Link
              to="courses-edu"
              spy={true}
              smooth={true}
              offset={-100}
              className="text-blue-shade-1 font-medium text-lg cursor-pointer hover:underline"
              activeClass="text-purple"
            >
              School of Education, Arts & Social Sciences
            </Link>
          </li>
        </ul>
      </div>

      {/* school of technology */}
      <div id="courses-tech" className="mb-14">
        <h1 className="text-2xl font-bold uppercase pb-10">
          School of Technology
        </h1>
        <div className="grid grid-cols-3 gap-2.5 max-nav-ul-md:grid-cols-1">
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of Computer Science
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in Computer Science</li>
            <li>Bachelor of Science in Software Engineering</li>
            <li>Bachelor of Science in Data Science</li>
            <li>Diploma in Computer Science</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of Information Systems
          </h2>
          <ul className="list-disc list-inside">
            <li>whatever</li>
            <li>whatever</li>
            <li>whatever</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of Information Technology
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in Information Technology</li>
            <li>Bachelor of Technology in Information Technology</li>
            <li>Diploma in Information Technology</li>
          </ul>
        </div>
        </div>
      </div>

      {/* courses business */}
      <div id="courses-business">
        <h1 className="text-2xl font-bold uppercase pb-10">
          School of Business
        </h1>
        <div className="grid grid-cols-3 gap-2.5 max-nav-ul-md:grid-cols-1">
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of Whatever
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Science in ...</li>
            <li>Diploma in ...</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of ...
          </h2>
          <ul className="list-disc list-inside">
            <li>whatever</li>
            <li>whatever</li>
            <li>whatever</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of ...
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Technology in ...</li>
            <li>Diploma in ...</li>
          </ul>
        </div>
        </div>
      </div>

      {/* courses-medicine */}
      <div id="courses-med">
        <h1 className="text-2xl font-bold uppercase pb-10">
          School of Medicine
        </h1>
        <div className="grid grid-cols-3 gap-2.5 max-nav-ul-md:grid-cols-1">
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of Whatever
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Science in ...</li>
            <li>Diploma in ...</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of ...
          </h2>
          <ul className="list-disc list-inside">
            <li>whatever</li>
            <li>whatever</li>
            <li>whatever</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of ...
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Technology in ...</li>
            <li>Diploma in ...</li>
          </ul>
        </div>
        </div>
      </div>

       {/* courses maths */}
       <div id="courses-maths">
        <h1 className="text-2xl font-bold uppercase pb-10">
          School of Mathematics and Statistics
        </h1>
        <div className="grid grid-cols-3 gap-2.5 max-nav-ul-md:grid-cols-1">
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of ...
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Science in ...</li>
            <li>Diploma in ...</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of ...
          </h2>
          <ul className="list-disc list-inside">
            <li>whatever</li>
            <li>whatever</li>
            <li>whatever</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of ...
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Technology in ...</li>
            <li>Diploma in ...</li>
          </ul>
        </div>
        </div>
      </div>

      {/* courses edu */}
      <div id="courses-edu">
        <h1 className="text-2xl font-bold uppercase pb-10">
          School of Education, Arts & Social Sciences
        </h1>
        <div className="grid grid-cols-3 gap-2.5 max-nav-ul-md:grid-cols-1">
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of ...
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Science in ...</li>
            <li>Diploma in ...</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of Information Systems
          </h2>
          <ul className="list-disc list-inside">
            <li>whatever</li>
            <li>whatever</li>
            <li>whatever</li>
          </ul>
        </div>
        <div className="pb-10">
          <h2 className="text-lg font-semibold underline">
            Department of Information Technology
          </h2>
          <ul className="list-disc list-inside">
            <li>Bachelor of Science in ...</li>
            <li>Bachelor of Technology in ...</li>
            <li>Diploma in ...</li>
          </ul>
        </div>
        </div>
      </div>
  
    </div>
  );
};

export default Courses;
