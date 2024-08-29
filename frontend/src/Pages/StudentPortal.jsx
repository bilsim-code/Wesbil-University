import profile from '../assets/faculty1.jpg';

const StudentPortal = () => {
  return (
    <div className="mt-24 min-h-screen w-[1280px] max-w-[90%] mx-auto ">
      <div className='flex flex-col items-center gap-3'>
        <img src={profile} alt="" title='your-profile' className='w-[300px] max-w-full'/>
        <h1 className='font-semibold text-[1.4rem]'><span className='text-royalblue uppercase font-mono'>Name: </span><span className='font-mono'>Wanjala Bildad Simiyu</span></h1>
        <h1 className='font-semibold text-[1.4rem] font-mono'><span className='text-royalblue uppercase'>ADM No: </span><span>BSCS/151J/2022</span></h1>
        <h1 className='font-semibold text-[1.4rem] font-mono'><span className='text-royalblue uppercase'>school: </span><span>School of Technology</span></h1>
        <h1 className='font-semibold text-[1.4rem] font-mono'><span className='text-royalblue uppercase'>Department: </span><span>Department of Computer Science</span></h1>
        <h1 className='font-semibold font-mono text-[1.4rem] text-center'><span className='text-royalblue uppercase'>Course: </span><span>Bachelor of Science in Computer Science</span></h1>
        <div className='flex items-center justify-between gap-[20px]'>
          <h1 className='font-semibold text-[1.4rem] font-mono'><span className='text-royalblue uppercase'>Year: </span> <span>3</span></h1>
          <h1 className='font-semibold text-[1.4rem] font-mono'><span className='text-royalblue uppercase'>Semester: </span>1</h1>
        </div>
        {/* units */}
        <div>
          <h1 className='text-center mt-2 font-bold text-[1.8rem]'>My Units</h1>
          <hr className='mb-3 bg-royalblue border-0 h-[1px]'/>
          <ul className='list-decimal font-sans flex flex-col gap-1 '>
            <li>Human Computer Interaction</li>
            <li>Computer Architecture and Organization</li>
            <li>Artificial Intelligence</li>
            <li>Data Communication</li>
            <li>Advanced Database Management Systems</li>
            <li>Object-Oriented Programming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
