import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sms = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero bg-smsHero h-[100vh] bg-no-repeat bg-center bg-cover flex items-center justify-center text-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-white">
            Welcome to Wesbil University School of Mathematics and Statistics
          </h2>
          <p className="text-gold text-2xl font-medium mt-3 bg-gradient-to-bl from-heroBg">
            Unlocking the Power of Numbers, Shaping the Future
          </p>
        </div>
      </div>

      <div className="mt-20 mx-4 font-semibold text-2xl cursor-pointer underline hover:no-underline transition-all duration-500 text-purple w-fit" onClick={() => navigate('/courses')}>See Our Courses</div>
      {/* BODY */}
      <div className="mt-20 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 bg-royalblue rounded-md shadow-md px-3 py-5 footer-md:flex-row footer-md:items-center">
          <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] group cursor-pointer">
            <span className="whitespace-nowrap text group-hover:invisible">About School</span>
            <FaArrowRight />
          </h3>
          <p className="text-white">
            Welcome to the School of Mathematics and Statistics, where innovation meets excellence
            in education. At our School, we are dedicated to shaping the
            mathematicians and statisticians of tomorrow through a comprehensive and dynamic
            educational experience. Our commitment is to provide a nurturing
            environment that fosters intellectual growth, ethical
            decision-making, and a global perspective.
          </p>
        </div>

        <div className="flex flex-col footer-md:flex-row bg-royalblue rounded-md shadow-md px-3 py-5 mt-8 gap-10 footer-md:gap-[4%]">
          {/* 1 */}
          <div className="flex flex-col gap-4 basis-[50%]">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] group cursor-pointer">
              <span className="whitespace-nowrap text group-hover:invisible">Our Mission</span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
              Our mission is to cultivate knowledgeable, skilled, and ethically
              responsible professionals who can navigate the complexities of the modern world of mathematics and statistics. We aim to equip our
              students with the tools they need to excel in diverse careers,
              drive innovation, and make a positive impact on society.
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
              At the heart of the School of Mathematics and Statistics is our unwavering
              commitment to academic excellence. Our diverse range of
              undergraduate, graduate, and research programs are designed to meet the evolving needs of the field. We offer specialized courses in areas such as applied mathematics, statistical modeling, data science, and more, ensuring
              that our students receive a well-rounded education that is both
              rigorous and relevant.
            </p>
          </div>
        </div>

        <div className="flex flex-col footer-md:flex-row bg-royalblue rounded-md shadow-md px-3 py-5 mt-8 gap-10 footer-md:gap-[4%]">
          {/* 1 */}
          <div className="flex flex-col gap-4 basis-[50%]">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:invisible">Global Perspective</span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
              In today’s interconnected world, having a global perspective is
              crucial. Our School offers numerous international programs,
              including study abroad opportunities, international internships,
              and collaborations with leading institutions worldwide. These
              experiences enable our students to understand and navigate the
              global landscape effectively.
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
              The School of Mathematics and Statistics fosters a collaborative and inclusive
              community where students, faculty, and alumni work together to
              achieve common goals. Our vibrant campus life, student
              organizations, and events provide ample opportunities for personal
              and professional growth. We encourage our students to engage with
              the community, embrace diversity, and develop strong leadership
              skills.
            </p>
          </div>
        </div>

        <div className="bg-math bg-fixed bg-no-repeat bg-top bg-cover h-[100vh] flex flex-col gap-10 rounded-md mt-10 shadow-xl">
          {/* join us */}
          <div className="flex basis-[50%] flex-col gap-4 bg-royalblue px-3 py-5 rounded-md footer-md:flex-row footer-md:items-center">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:opacity-0">Join Us</span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
              Whether you are a prospective student, a professional seeking to advance your career, or a researcher looking to
              contribute to the field, the School of Mathematics and Statistics offers a
              supportive and dynamic environment to help you achieve your goals.
              Join us in our mission to drive innovation, foster leadership, and
              create a better future for communities worldwide.
            </p>
          </div>
          {/* form */}
          <form className="bg-white-fade basis-[50%] flex flex-col items-center pt-[4%] px-3 gap-8">
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
              <button className="cursor-pointer bg-gold-fade-x w-[100px] text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sms;
