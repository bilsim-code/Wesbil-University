import { Link } from "react-scroll";
import faculty1 from "../assets/faculty1.jpg";
import faculty2 from "../assets/faculty2.jpg";
import FacultyCarousel from "../Components/FacultyCarousel";

const Courses = () => {
  const schools = [
    {
      name: "School of Technology",
      id: "courses-tech",
      departments: [
        {
          name: "Department of Computer Science",
          courses: [
            "Bachelor of Science in Computer Science",
            "Bachelor of Science in Software Engineering",
            "Bachelor of Science in Data Science",
            "Diploma in Computer Science",
          ],
        },
        {
          name: "Department of Information Systems",
          courses: [
            "Bachelor of Science in Information Systems",
            "Diploma in Information Systems",
            "Certificate in Information Systems",
          ],
        },
        {
          name: "Department of Information Technology",
          courses: [
            "Bachelor of Science in Information Technology",
            "Bachelor of Technology in Information Technology",
            "Diploma in Information Technology",
          ],
        },
      ],

      //faculty
      faculty: [
        {
          image: faculty1,
          name: "whoever whoever",
          qualifications: "Phd in Computer Science from Princeton University",
          role: "Head of Department of Computer Science",
        },
        {
          image: faculty2,
          name: "whoever whoever",
          qualifications: "Phd in Information Systems",
          role: "Head of Department of Information Systems",
        },
        {
          image: faculty1,
          name: "blablabla",
          qualifications: "Masters in IT",
          role: "Head of Department of Information Technology",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
      ],
    },
    {
      name: "School of Business",
      id: "courses-business",
      departments: [
        {
          name: "Department of Accounting and Finance",
          courses: [
            "Bachelor of Commerce in Accounting",
            "Bachelor of Commerce in Finance",
            "Diploma in Accounting",
          ],
        },
        {
          name: "Department of Marketing and Management",
          courses: [
            "Bachelor of Commerce in Marketing",
            "Bachelor of Commerce in Human Resource Management",
            "Diploma in Marketing",
          ],
        },
      ],

      //faculty
      faculty: [
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Head of Department of Marketing and Management",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Head of Department of Accounting and Finance",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
      ],
    },
    {
      name: "School of Medicine",
      id: "courses-med",
      departments: [
        {
          name: "Department of Medicine",
          courses: [
            "Bachelor of Medicine and Surgery",
            "Bachelor of Science in Nursing",
            "Diploma in Clinical Medicine",
          ],
        },
        {
          name: "Department of Public Health",
          courses: [
            "Bachelor of Science in Public Health",
            "Diploma in Public Health",
          ],
        },
      ],

      //faculty
      faculty: [
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Head of Department of Medicine",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Head of Department of Public Health",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
      ],
    },
    {
      name: "School of Mathematics and Statistics",
      id: "courses-maths",
      departments: [
        {
          name: "Department of Mathematics",
          courses: [
            "Bachelor of Science in Mathematics",
            "Bachelor of Science in Applied Mathematics",
            "Diploma in Mathematics",
          ],
        },
        {
          name: "Department of Statistics",
          courses: [
            "Bachelor of Science in Statistics",
            "Diploma in Statistics",
          ],
        },
      ],

      //faculty
      faculty: [
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Head of Department of Mathematics",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Head of Department of Statistics",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
      ],
    },
    {
      name: "School of Education, Arts & Social Sciences",
      id: "courses-edu",
      departments: [
        {
          name: "Department of Education",
          courses: [
            "Bachelor of Education in Arts",
            "Bachelor of Education in Science",
            "Diploma in Education",
          ],
        },
        {
          name: "Department of Social Sciences",
          courses: [
            "Bachelor of Arts in Sociology",
            "Bachelor of Arts in Psychology",
            "Diploma in Social Work",
          ],
        },
      ],

      //faculty
      faculty: [
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Head of Department of Education",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Head of Department of Social Sciences",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "",
          qualifications: "",
          role: "Lecturer",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-32 w-[90%] mx-auto">
      <div className="mb-20">
        <p className="font-semibold text-xl font-serif">
          Wesbil University has 5 schools, each with their own departments and
          courses. The schools include:
        </p>
        <ul className="list-none">
          {schools.map((school) => (
            <li key={school.id}>
              <Link
                to={school.id}
                spy={true}
                smooth={true}
                offset={-100}
                className="text-blue-shade-1 font-medium text-lg cursor-pointer hover:underline"
                activeClass="text-purple"
              >
                {school.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {schools.map((school) => (
        <div key={school.id} id={school.id} className="mb-14">
          <h1 className="text-2xl font-bold uppercase pb-10">{school.name}</h1>
          <div className="">
            <div className="grid grid-cols-3 gap-2.5 max-nav-ul-md:grid-cols-1">
              {school.departments.map((dept) => (
                <div key={dept.name} className="pb-10">
                  <h2 className="text-lg font-semibold underline">
                    {dept.name}
                  </h2>
                  <ul className="list-disc list-inside">
                    {dept.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="flex">
                {school.faculty.map((item, index) => (
                  <FacultyCarousel key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
