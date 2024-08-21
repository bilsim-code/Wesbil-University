import { Link } from "react-router-dom";

const Programs = () => {
    return (
        <div className="bg-gray">
            <h2 className="text-center py-2 text-2xl font-medium text-blue-shade-1">Our Programmes</h2>
      <div className=" flex justify-center flex-wrap gap-6 p-10">
          <Link to={'/diploma'} className="prog-cont cursor-pointer relative ">
              <button className="bg-white p-2 rounded-md cursor-pointer shadow-2xl shadow-blue-shade-1 z-20 relative">
                  Diploma Programmes
              </button>
              <div className="prog-div bg-blue-shade-fade  w-1/2  h-full absolute top-[-8px] py-7 rounded-md translate-x-1/2 z-10 transition-all duration-500">
              </div>
          </Link>
          <Link to={'/bachelors'} className="prog-cont cursor-pointer relative">
          <button className="bg-white p-2 rounded-md cursor-pointer shadow-2xl shadow-blue-shade-1 z-20 relative">
                  Bachelors Programmes
              </button>
              <div className="prog-div prog-gold bg-gold-fade-x w-1/2  h-full absolute top-[-8px] py-7 rounded-md translate-x-1/2 z-10 transition-all duration-500">
              </div>
          </Link>
          <Link to={'/masters'} className="prog-cont cursor-pointer relative">
          <button className="bg-white p-2 rounded-md cursor-pointer shadow-2xl shadow-blue-shade-1 z-20 relative">
                Masters Programmes
              </button>
              <div className="prog-div bg-blue-shade-fade  w-1/2  h-full absolute top-[-8px] py-7 rounded-md translate-x-1/2 z-10 transition-all duration-500">
              </div>
          </Link>
          <Link to={'/post-graduate'} className="prog-cont cursor-pointer relative">
          <button className="bg-white p-2 rounded-md cursor-pointer shadow-2xl shadow-blue-shade-1 z-20 relative">
                  Post Graduate Diploma
              </button>
              <div className="prog-div prog-gold bg-gold-fade-x w-1/2  h-full absolute top-[-8px] py-7 rounded-md translate-x-1/2 z-10 transition-all duration-500">
              </div>
          </Link>
      </div>
      </div>
    );
  }
  
  export default Programs;
  