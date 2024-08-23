import profile from '../assets/faculty1.jpg';

const StudentPortal = () => {
  return (
    <div className="mt-24 min-h-screen w-[1280px] max-w-[90%] mx-auto ">
      <div>
        <img src={profile} alt="" />
        <h1><span>Name: </span><span>Wanjala Bildad Simiyu</span></h1>
        <h1><span>ADM No: </span><span>BSCS/151J/2022</span></h1>
        <h1><span>Course: </span><span>BACHELOR OF SCIENCE IN COMPUTER SCIENCE</span></h1>
        <div>
          <h1><span>Year: </span> <span>3</span></h1>
          <h1><span>Semester: </span>1</h1>
        </div>
        {/* units */}
        <div>
          <h1>My Units</h1>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
