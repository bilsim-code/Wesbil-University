import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Soe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hero bg-soeHero h-[100vh] bg-no-repeat bg-center bg-cover flex items-center justify-center text-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-white">
            Welcome to Wesbil University School of Education, Arts, and Social Sciences
          </h2>
          <p className="text-gold text-2xl font-medium mt-3 bg-gradient-to-bl from-heroBg">
            Empowering Minds, Shaping Society
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
            Welcome to the School of Education, Arts, and Social Sciences, where we are committed to cultivating the next generation of educators, artists, and social scientists. Our School is dedicated to fostering creativity, critical thinking, and social responsibility through a dynamic and interdisciplinary approach to education.
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
              Our mission is to empower students with the knowledge, skills, and ethical values needed to excel in their chosen fields. Whether in education, the arts, or social sciences, we strive to create an environment that encourages intellectual growth, creativity, and a deep understanding of societal challenges.
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
              At the heart of the School of Education, Arts, and Social Sciences is our commitment to academic excellence. Our diverse range of programs, including teacher education, fine arts, psychology, sociology, and more, are designed to prepare students for meaningful careers that make a difference in society.
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
              In an increasingly interconnected world, our School offers students the opportunity to engage with global perspectives. Through study abroad programs, international collaborations, and diverse course offerings, we ensure that our graduates are prepared to navigate and contribute to a global society.
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
              The School of Education, Arts, and Social Sciences is a vibrant community where collaboration is key. We foster an environment where students, faculty, and alumni come together to share ideas, engage in research, and work on projects that address the needs of our communities. We believe in the power of education, art, and social sciences to drive social change.
            </p>
          </div>
        </div>

        <div className="bg-educ bg-no-repeat bg-right-bottom bg-cover h-[100vh] flex flex-col gap-10 rounded-md mt-10 shadow-xl">
          {/* join us */}
          <div className="flex basis-[50%] flex-col gap-4 bg-royalblue px-3 py-5 rounded-md footer-md:flex-row footer-md:items-center">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:opacity-0">Join Us</span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
              Whether you are a prospective student, a professional looking to enhance your skills, or a researcher eager to contribute to the field, the School of Education, Arts, and Social Sciences offers a supportive and dynamic environment to help you achieve your goals. Join us in our mission to inspire change and create a better future through education, the arts, and social sciences.
            </p>
          </div>
          {/* form */}
          <form className="bg-white-fade basis-[50%] flex flex-col items-center pt-[4%] px-3 gap-8">
            <h3 className="font-semibold text-white">
              Wish to be enrolled? Got a document request or a general inquiry? Report an issue?
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
  )
}

export default Soe