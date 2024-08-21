const StudentPortal = () => {
  return (
    <>
      <div className="480px:text-gold">
        <p>I am a min-width</p>
      </div>
      <div className="max-480px:text-royalblue">
        <p>I am a max-width</p>
      </div>
      <button className="bg-royalblue rounded-lg p-2 text-white focus:outline-none hover:ring-2 ring-gold mb-3 grid mx-auto">Click Here</button>
      <ul className="ml-10 space-y-2">
        <li className="first:bg-gold">kdjfd</li>
        <li className="odd:bg-gold even:bg-royalblue ">kdjfd</li>
        <li className="odd:bg-gold even:bg-royalblue">kdjfd</li>
        <li className="odd:bg-gold even:bg-royalblue">kdjfd</li>
        <li className="last:bg-black last:text-white">kdjfd</li>
      </ul>
    </>
  );
};

export default StudentPortal;
