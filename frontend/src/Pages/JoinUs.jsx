import { useNavigate } from "react-router-dom";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const JoinUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")} className="p-2 text-purple flex ">
        {" "}
        <span>&#8592;</span> Go back to home page
      </button>
      <form className="max-w-[90%] w-[800px] mx-auto mt-6 mb-10 shadow-md shadow-blue-shade-fade rounded-md p-3 text-almost-black">
        <h2 className="font-medium text-lg pt-3 pb-7">
          Wish to join us? fill in this form. (Fields with
          <span className="text-red">*</span> are required)
        </h2>
        <div className="grid grid-cols-2 max-430px:grid-cols-1 items-center mb-5 gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="firstName">
              <span>First Name</span> <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              className="form-input rounded"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="lastName">
              <span>Last Name</span> <span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              className="form-input rounded"
            />
          </div>
        </div>
        {/* email and phone number */}
        <div className="grid grid-cols-2 max-430px:grid-cols-1 items-center mb-5 gap-5">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">
              <span>Email</span> <span className="text-red">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="form-input rounded"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="phone">
              <span>Phone Number</span> <span className="text-red">*</span>
            </label>
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="form-input rounded w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-full mb-5">
          <label htmlFor="high-school">
            <span>High School</span> <span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="highschool"
            id="high-school"
            placeholder="High School Attended"
            className="form-input rounded"
          />
        </div>
        <div className="grid grid-cols-3 max-480px:grid-cols-2 max-308:grid-cols-1 items-center mb-5 gap-2">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="year">
              <span>Completion Year</span>
              <span className="text-red">*</span>
            </label>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="Enter Year"
              className="form-input rounded"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="exam">
              <span>Exam Type</span>
              <span className="text-red">*</span>
            </label>
            <select name="exam" id="exam" className="form-select rounded">
              <option value="kcse">KCSE</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="grade">
              <span></span>Grade<span className="text-red">*</span>
            </label>
            {/* make it uppercase */}
            <select name="grade" id="grade" className="form-input rounded">
              <option value=""><em>KCSE Mean Grade</em></option>
              <option value="A">A</option>
              <option value="A">A-</option>
              <option value="A">B+</option>
              <option value="A">B</option>
              <option value="A">B-</option>
              <option value="A">C+</option>
              <option value="A">C</option>
              <option value="A">C-</option>
              <option value="A">D+</option>
              <option value="A">D</option>
              <option value="A">D-</option>
            </select>
          </div>
        </div>

        {/* course and campus */}
        <div className="grid grid-cols-2  max-430px:grid-cols-1 items-center mb-5 gap-5">
            <FormControl fullWidth>
              <InputLabel id="course-label">
                Course <span className="text-red">*</span>
              </InputLabel>
              <Select
                labelId="course-label"
                id="course"
                name="course"
                label="Course"
                defaultValue=""
                className="rounded "
                MenuProps={{
                  PaperProps: {
                    style: {
                      whiteSpace: "normal", // Ensures text wraps
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select your course</em>
                </MenuItem>
                <MenuItem value="bsc-cs">
                  Bachelor of Science in Computer Science
                </MenuItem>
                <MenuItem value="bsc-se">
                  Bachelor of Science in Software Engineering
                </MenuItem>
                <MenuItem value="bsc-ds">
                  Bachelor of Science in Data Science
                </MenuItem>
                <MenuItem value="diploma-cs">
                  Diploma in Computer Science
                </MenuItem>
                <MenuItem value="bsc-is">
                  Bachelor of Science in Information Systems
                </MenuItem>
                <MenuItem value="diploma-is">
                  Diploma in Information Systems
                </MenuItem>
                <MenuItem value="certificate-is">
                  Certificate in Information Systems
                </MenuItem>
                <MenuItem value="bsc-it">
                  Bachelor of Science in Information Technology
                </MenuItem>
                <MenuItem value="btech-it">
                  Bachelor of Technology in Information Technology
                </MenuItem>
                <MenuItem value="diploma-it">
                  Diploma in Information Technology
                </MenuItem>
                <MenuItem value="bcom-acc">
                  Bachelor of Commerce in Accounting
                </MenuItem>
                <MenuItem value="bcom-fin">
                  Bachelor of Commerce in Finance
                </MenuItem>
                <MenuItem value="diploma-acc">Diploma in Accounting</MenuItem>
                <MenuItem value="bcom-mkt">
                  Bachelor of Commerce in Marketing
                </MenuItem>
                <MenuItem value="bcom-hrm">
                  Bachelor of Commerce in Human Resource Management
                </MenuItem>
                <MenuItem value="diploma-mkt">Diploma in Marketing</MenuItem>
                <MenuItem value="mbbs">
                  Bachelor in Medicine and Surgery
                </MenuItem>
                <MenuItem value="bsc-nur">
                  Bachelor of Science in Nursing
                </MenuItem>
                <MenuItem value="diploma-clin-med">
                  Diploma in Clinical Medicine
                </MenuItem>
                <MenuItem value="bsc-clin-health">
                  Bachelor of Science in Clinical Health
                </MenuItem>
                <MenuItem value="diploma-clin-health">
                  Diploma in Clinical Health
                </MenuItem>
                <MenuItem value="bsc-math">
                  Bachelor of Science in Mathematics
                </MenuItem>
                <MenuItem value="bsc-appl-math">
                  Bachelor of Science in Applied Mathematics
                </MenuItem>
                <MenuItem value="diploma-math">Diploma in Mathematics</MenuItem>
                <MenuItem value="bsc-stats">
                  Bachelor of Science Statistics
                </MenuItem>
                <MenuItem value="diploma-stats">Diploma in Statistics</MenuItem>
                <MenuItem value="bed-arts">
                  Bachelor of Education in Arts
                </MenuItem>
                <MenuItem value="bed-sci">
                  Bachelor of Education in Science
                </MenuItem>
                <MenuItem value="diploma-ed">Diploma in Education</MenuItem>
                <MenuItem value="ba-soc">
                  Bachelor of Arts in Sociology
                </MenuItem>
                <MenuItem value="ba-psych">
                  Bachelor of Arts in Psychology
                </MenuItem>
                <MenuItem value="diploma-sw">Diploma in Social Work</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="campus-label">
                Campus<span className="text-red">*</span>
              </InputLabel>
              <Select
                labelId="campus-label"
                id="campus"
                name="campus"
                label="Campus"
                defaultValue=""
                className="rounded "
                MenuProps={{
                  PaperProps: {
                    style: {
                      whiteSpace: "normal", // Ensures text wraps
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select your preferred campus</em>
                </MenuItem>
                <MenuItem value="main">
                 Main Campus
                </MenuItem>
                <MenuItem value="alt">
                  Alt Campus
                </MenuItem>
              </Select>
            </FormControl>


         {/*    <FormControl fullWidth>
              <InputLabel id="campus-label">Preferred Campus <span className="text-red">*</span></InputLabel>
              <Select
              labelId="course-label"
              id="course"
              name="course"
              defaultValue=""
              className="rounded"
              MenuProps={{
                PaperProps: {
                  style: {
                    whitespace: 'normal'
                  }
                }
              }}
              >
                <MenuItem value="">
                <em>Select your preferred campus</em>
                </MenuItem>
                <MenuItem value="main">Main Campus</MenuItem>
        <MenuItem value="alt">Alt Campus</MenuItem>

              </Select>
            </FormControl> */}
         {/*  <div className="flex flex-col gap-1 w-full">
            <label htmlFor="campus">
              <span>Preferred Campus</span> <span className="text-red">*</span>
            </label>
            <select name="campus" id="campus" className="form-input rounded">
              <option value="Main">Main Campus</option>
              <option value="other">alt campus</option>
            </select>
          </div> */}
        </div>

        <button className="bg-black text-white py-2 px-10 my-5 font-medium">
          Submit
        </button>
      </form>
    </>
  );
};

export default JoinUs;
