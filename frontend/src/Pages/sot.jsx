import { FaArrowRight,  } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

const Sot = () => {
const navigate = useNavigate();
  return (
    <div>
      <div className="hero bg-sotHero h-[100vh] bg-no-repeat bg-center bg-cover flex items-center justify-center text-center">
        <div className="flex flex-col ">
          <h2 className="text-3xl font-bold text-white">
            Welcome to Wesbil University School of Technology
          </h2>
          <p className="text-gold text-2xl font-medium  mt-3 bg-gradient-to-bl from-heroBg">
            Where Innovation meets creativity
          </p>
        </div>
      </div>
      {/* BODY */}
      <div className="mt-20 mx-4 font-semibold text-2xl cursor-pointer underline hover:no-underline transition-all duration-500 text-purple w-fit" onClick={() => navigate('/courses')}>See Our Courses</div>
      <div className="mt-20 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 bg-royalblue rounded-md shadow-md px-3 py-5  footer-md:flex-row footer-md:items-center ">
          <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] group cursor-pointer">
            <span className="whitespace-nowrap text group-hover:invisible">About School</span>
            <FaArrowRight />
          </h3>
          <p className="text-white">
          Welcome to the School of Technology, where the future of innovation and excellence in education converge. Our School is dedicated to preparing the next generation of technology leaders through a robust and forward-thinking educational experience. We are committed to fostering a dynamic environment that promotes intellectual growth, creative problem-solving, and a global perspective on technology.
          </p>
        </div>

        <div className="flex flex-col footer-md:flex-row bg-royalblue rounded-md shadow-md px-3 py-5 mt-8 gap-10 footer-md:gap-[4%]">
          {/* 1 */}
          <div className="flex flex-col gap-4 basis-[50%] ">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] group cursor-pointer">
              <span className="whitespace-nowrap text group-hover:invisible">Our Mission</span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
            Our mission is to develop skilled, innovative, and ethically responsible technology professionals who can navigate and drive the advancements in the tech industry. We strive to equip our students with the knowledge, skills, and mindset necessary to excel in various tech-related careers, contribute to technological advancements, and make a positive impact on society.
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-4 basis-[50%]">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[240px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:invisible">
                Academic Excellence
              </span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
            At the core of the School of Technology is our steadfast commitment to academic excellence. We offer a comprehensive range of undergraduate, graduate, and professional programs designed to meet the rapidly evolving demands of the technology sector. Our curriculum covers critical areas such as computer science, information technology, cybersecurity, data science, artificial intelligence, and software engineering, ensuring our students receive a rigorous and relevant education.
            </p>
          </div>
        </div>

        <div className="flex flex-col footer-md:flex-row bg-royalblue rounded-md shadow-md px-3 py-5 mt-8 gap-10 footer-md:gap-[4%]">
          {/* 1 */}
          <div className="flex flex-col gap-4 basis-[50%] ">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:invisible">Global Perspective</span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
            In today’s interconnected world, having a global perspective is crucial. Our School offers numerous international programs, including study abroad opportunities, global internships, and partnerships with top technology institutions worldwide. These experiences help our students understand and navigate the global tech landscape effectively
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-4 basis-[50%]">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[300px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:invisible">
                Community and Collaboration
              </span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
            The School of Technology fosters a collaborative and inclusive community where students, faculty, and alumni work together to achieve common goals. Our vibrant campus life, tech clubs, and events provide ample opportunities for personal and professional growth. We encourage our students to engage with the community, embrace diversity, and develop strong leadership and teamwork skills.
            </p>
          </div>
        </div>

        <div className="bg-tech bg-fixed bg-no-repeat bg-right bg-cover h-[100vh] flex flex-col gap-10 rounded-md mt-10 shadow-xl">
          {/* join us */}
          <div className="flex basis-[50%] flex-col gap-4 bg-royalblue  px-3 py-5 rounded-md footer-md:flex-row footer-md:items-center">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:opacity-0">Join Us</span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
            Whether you are a prospective student, a tech professional seeking to advance your career, or a researcher aiming to contribute to the field, the School of Technology offers a supportive and dynamic environment to help you achieve your goals. Join us in our mission to drive technological innovation, foster leadership, and create a better future through technology.
            </p>
          </div>
          {/* form */}
          <form className="bg-white-fade basis-[50%]  flex flex-col items-center pt-[4%] px-3 gap-8">
            <h3 className="font-semibold text-white">
              Wish to be enrolled? Got a document request or a general inquiry?
              Report an issue?
            </h3>
            <div className="flex flex-wrap gap-3">
            <input type="text" placeholder="Your name" name="name" />
            <input type="email" placeholder="Your email" name="email" />
            <input
              type="text"
              name="your_number"
              id="your-number"
              placeholder="Phone Number"
            />
            <select name="topic" id="join-us-select">
              <option value="program">Enroll for a program</option>
              <option value="letter">Recognition/Completion letter</option>
              <option value="exemptions">Exemptions</option>
              <option value="exam">Course Work/Exam Issues</option>
            </select>
            <textarea
              name="message"
              id="message"
              placeholder="message"
              className="w-1/2"
            ></textarea>
            <button className="cursor-pointer bg-gold-fade-x w-[100px] text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sot