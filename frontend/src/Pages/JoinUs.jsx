import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();
  return (
    <>
    <button onClick={() => navigate("/")} className="p-2 text-purple"> <span>&lArr;</span> Go back to home page</button>
    <form className="max-w-[90%] w-[800px] mx-auto mt-20 mb-10 shadow-md shadow-blue-shade-fade rounded-md p-3 text-almost-black">
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
          <label htmlFor="secondName">
            <span>Second Name</span> <span className="text-red">*</span>
          </label>
          <input
            type="text"
            name="secondName"
            id="secondName"
            placeholder="Enter your second name"
            className="form-input rounded"
          />
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
          <label htmlFor="year"><span >Completion Year</span><span className="text-red">*</span></label>
          <input type="number" name="year" id="year" placeholder="Enter Year" className="form-input rounded" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="exam"><span>Exam Type</span><span className="text-red">*</span></label>
          <select name="exam" id="exam" className="form-select rounded">
            <option value="kcse">KCSE</option>
            <option value="other">other</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="grade"><span></span>Grade<span className="text-red">*</span></label>
          {/* make it uppercase */}
          <input
            type="text"
            name="grade"
            id="grade"
            placeholder="Enter exam grade"
            className="form-input rounded"
          />
        </div>
      </div>
      <button className="bg-black text-white py-2 px-10 my-5 font-medium">Submit</button>
    </form>
    </>
  );
};

export default JoinUs;
