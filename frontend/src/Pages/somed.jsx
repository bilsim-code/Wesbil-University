import { FaArrowRight } from "react-icons/fa";

const Somed = () => {
  return (
    <div>
      <div className="hero bg-somedHero h-[100vh] bg-no-repeat bg-right bg-cover flex items-center justify-center text-center">
        <div className="flex flex-col ">
          <h2 className="text-4xl font-bold text-white">
            Welcome to Wesbil University School of Medicine
          </h2>
          <p className="text-gold text-3xl font-medium  mt-3 bg-gradient-to-bl from-heroBg">
            Advancing Health, Transforming Lives
          </p>
        </div>
      </div>
      {/* BODY */}
      <div className="mt-20 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 bg-royalblue rounded-md shadow-md px-3 py-5  footer-md:flex-row footer-md:items-center ">
          <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] group cursor-pointer">
            <span className="whitespace-nowrap text group-hover:invisible">About School</span>
            <FaArrowRight />
          </h3>
          <p className="text-white">
          Welcome to the School of Business, where iWelcome to the School of Medicine, where our commitment to excellence in education, research, and patient care drives our mission to advance health and transform lives. We are dedicated to training the next generation of compassionate and skilled healthcare professionals who are prepared to meet the challenges of an ever-evolving medical landscape
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
            Our mission is to educate and inspire future medical leaders who are equipped with the knowledge, skills, and empathy needed to improve health outcomes and advance the field of medicine. We strive to foster a culture of innovation, collaboration, and ethical practice.
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
            The School of Medicine is renowned for its rigorous academic programs that combine foundational medical knowledge with hands-on clinical experience. Our curriculum is designed to provide a comprehensive education that spans the basic sciences, clinical skills, and advanced medical specialties. We offer a range of programs, including undergraduate medical education (MD), graduate medical education (residencies and fellowships), and continuing medical education for practicing physicians.
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
            In today’s interconnected world, having a global perspective is crucial. Our School offers numerous international programs, including study abroad opportunities, global internships, and partnerships with top technology institutions worldwide. These experiences help our students understand and navigate the global tech landscape effectively.
            </p>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-4 basis-[50%]">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[300px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:invisible">
                Clinical Excellence
              </span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
            Our students and faculty have access to state-of-the-art clinical facilities and diverse patient populations, providing a rich learning environment for developing clinical skills. We are affiliated with top-tier hospitals and healthcare institutions, where our students gain invaluable hands-on experience and our faculty provide exceptional patient care. We emphasize a patient-centered approach to healthcare, ensuring that our graduates are not only skilled clinicians but also compassionate caregivers.
            </p>
          </div>
        </div>

        <div className="bg-med bg-no-repeat bg-center bg-cover h-[100vh] flex flex-col gap-10 rounded-md mt-10 shadow-xl">
          {/* join us */}
          <div className="flex basis-[50%] flex-col gap-4 bg-royalblue  px-3 py-5 rounded-md footer-md:flex-row footer-md:items-center">
            <h3 className="bg-gold flex gap-2 w-fit py-2 px-4 rounded-full items-center font-bold footer-md:w-[200px] cursor-pointer group">
              <span className="whitespace-nowrap text group-hover:opacity-0">Join Us</span>
              <FaArrowRight />
            </h3>
            <p className="text-white">
            Whether you are a prospective student, a healthcare professional seeking advanced training, or a researcher looking to contribute to medical science, the School of Medicine offers a supportive and dynamic environment to help you achieve your goals. Join us in our mission to advance health, transform lives, and shape the future of medicine.
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

export default Somed