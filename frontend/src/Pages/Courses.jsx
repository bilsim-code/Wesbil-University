import { Link } from "react-scroll";
import faculty1 from "../assets/faculty1.jpg";
import faculty2 from "../assets/faculty2.jpg";
import FacultyCarousel from "../Components/FacultyCarousel";
import { ArrowRightCircle } from "react-feather";
import { useEffect, useState } from "react";

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
      faculty: [
        {
          image: faculty1,
          name: "Dr. John Smith",
          qualifications: "PhD in Computer Science from Stanford University",
          role: "Head of Department of Computer Science",
        },
        {
          image: faculty1,
          name: "Dr. John Doe",
          qualifications: "PhD in Information Systems from MIT",
          role: "Head of Department of Information Systems",
        },
        {
          image: faculty2,
          name: "Dr. Emily Johnson",
          qualifications: "Masters in IT from Harvard University",
          role: "Head of Department of Information Technology",
        },
        {
          image: faculty1,
          name: "Prof. Michael Brown",
          qualifications: "PhD in Software Engineering",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Prof. Sarah Davis",
          qualifications: "PhD in Data Science",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Dr. David Wilson",
          qualifications: "Masters in Computer Science",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Dr. Lisa Martinez",
          qualifications: "PhD in Cybersecurity",
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
      faculty: [
        {
          image: faculty2,
          name: "Dr. Karen Lee",
          qualifications: "PhD in Accounting from University of Chicago",
          role: "Head of Department of Accounting and Finance",
        },
        {
          image: faculty1,
          name: "Dr. Robert Wilson",
          qualifications: "PhD in Marketing from UCLA",
          role: "Head of Department of Marketing and Management",
        },
        {
          image: faculty2,
          name: "Prof. Angela Harris",
          qualifications: "Masters in Finance",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Prof. Steven Clark",
          qualifications: "PhD in Business Administration",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Prof. Olivia Walker",
          qualifications: "Masters in Marketing",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Dr. Daniel Lewis",
          qualifications: "PhD in Human Resource Management",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Dr. Jessica Taylor",
          qualifications: "Masters in Strategic Management",
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
      faculty: [
        {
          image: faculty2,
          name: "Dr. Alice Green",
          qualifications: "MD from Johns Hopkins University",
          role: "Head of Department of Medicine",
        },
        {
          image: faculty1,
          name: "Dr. Brian White",
          qualifications: "PhD in Public Health from Yale University",
          role: "Head of Department of Public Health",
        },
        {
          image: faculty2,
          name: "Prof. Nancy Harris",
          qualifications: "MD in Clinical Medicine",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Prof. Steven Adams",
          qualifications: "MD in Surgery",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Dr. Elizabeth Taylor",
          qualifications: "PhD in Epidemiology",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Dr. Charles King",
          qualifications: "MD in Internal Medicine",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Dr. Laura Martinez",
          qualifications: "PhD in Public Health",
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
      faculty: [
        {
          image: faculty1,
          name: "Dr. Thomas Wright",
          qualifications: "PhD in Mathematics from Princeton University",
          role: "Head of Department of Mathematics",
        },
        {
          image: faculty2,
          name: "Dr. Olivia Young",
          qualifications: "PhD in Statistics from Cambridge University",
          role: "Head of Department of Statistics",
        },
        {
          image: faculty1,
          name: "Prof. Jack Lewis",
          qualifications: "Masters in Applied Mathematics",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Prof. Emma Harris",
          qualifications: "PhD in Mathematical Statistics",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Dr. James Robinson",
          qualifications: "Masters in Statistics",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Dr. Emily Clark",
          qualifications: "PhD in Computational Mathematics",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Dr. Daniel Brown",
          qualifications: "Masters in Data Science",
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
      faculty: [
        {
          image: faculty2,
          name: "Dr. Julia Allen",
          qualifications: "PhD in Education from University of Oxford",
          role: "Head of Department of Education",
        },
        {
          image: faculty1,
          name: "Dr. Mark Lewis",
          qualifications: "PhD in Social Sciences from University of Edinburgh",
          role: "Head of Department of Social Sciences",
        },
        {
          image: faculty2,
          name: "Prof. Nancy Scott",
          qualifications: "Masters in Educational Psychology",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Prof. Michael Carter",
          qualifications: "PhD in Sociology",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Dr. Jessica Adams",
          qualifications: "Masters in Social Work",
          role: "Lecturer",
        },
        {
          image: faculty2,
          name: "Dr. Rachel Turner",
          qualifications: "PhD in Education Policy",
          role: "Lecturer",
        },
        {
          image: faculty1,
          name: "Dr. Kevin Thompson",
          qualifications: "Masters in Counseling Psychology",
          role: "Lecturer",
        },
      ],
    },
  ];
  

  const [facultyIndex, setFacultyIndex] = useState(
    Array(schools.length).fill(0)
  );

  function handleRight() {
    setFacultyIndex((prevIndexes) => {
      return prevIndexes.map((index, schoolIndex) => {
        const school = schools[schoolIndex];
        return school ? (index < school.faculty.length - 1 ? index + 1 : 0) : index;
      });
    });
  }

  useEffect(() => {
    const interval = setInterval(handleRight, 8000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      {schools.map((school, schoolIndex) => (
        <div key={school.id} id={school.id} className="mb-14">
          <h1 className="text-2xl font-bold uppercase pb-10">{school.name}</h1>
          <div>
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
            <div className="relative h-[400px] max-240px:h-[500px] w-[315px] max-w-[100%] overflow-x-hidden">
              <div
                className="flex transition-all duration-1000"
                style={{
                  transform: `translateX(-${facultyIndex[schoolIndex] * 100}%)`,
                }}
              >
                {school.faculty.map((item, index) => (
                  <FacultyCarousel key={index} item={item} />
                ))}
              </div>
              <ArrowRightCircle
                onClick={() => handleRight()}
                className="absolute top-[20%] right-0 cursor-pointer bg-white size-8 rounded-full hover:bg-royalblue hover:text-white transition-all duration-300"
              />
              <ul className="absolute bottom-0 flex flex-wrap gap-3">
                {school.faculty.map((_, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setFacultyIndex((prevIndexes) => {
                        const updatedIndexes = [...prevIndexes];
                        updatedIndexes[schoolIndex] = index;
                        return updatedIndexes;
                      });
                    }}
                    className={`${
                      index === facultyIndex[schoolIndex]
                        ? "bg-royalblue"
                        : "bg-gray"
                    } size-5 cursor-pointer`}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
