//Here, i should have images displayed in grid, each image should have a 'read more' button on top.When i click the button, a paragraph containing the testimonials appears and the image disappears.This should be managed using state

import { useState } from "react";
import { testimonialContent } from "./TestimonialsContent";
import OutsideClickHandler from "react-outside-click-handler";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  function handleReadMore(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }
  return (
    <>
      <div className="flex justify-center w-full px-3 nav-ul-md:px-0 max-w-3xl mx-auto items-center mt-10 mb-8">
        <hr className="bg-gray flex-1" />
        <h1 className="mx-4 text-2xl font-medium">Testimonials </h1>
        <hr className="bg-gray flex-1" />
      </div>
      <div className="grid grid-cols-1 480px:grid-cols-2 nav-ul-md:grid-rows-1 nav-ul-md:grid-cols-4 p-4 gap-4 px-10 my-20">
        {testimonialContent.map((item, index) => (
            <div key={index}>
            <OutsideClickHandler onOutsideClick={() => setActiveIndex(null)}>                    
          <div
            style={{ backgroundImage: `url(${item.image})` }}
            className={` bg-no-repeat bg-cover bg-center h-64 relative flex items-center justify-center rounded-md shadow-md hover:scale-[1.05] hover:overflow-hidden transition-all duration-500 ${activeIndex === index && "h-[74vh] test-xl:h-[70vh] test-lg:h-[60vh] 480px:h-[78vh] test-md:h-[60vh] test-sm:h-[94vh] nav-ul-md:h-[78vh]"}`}
          >
            {activeIndex === index ? (
              <div className="absolute inset-0 bg-white  p-2 ">
                <p className="flex flex-col">
                  <span>{item.details}</span>
                  <span className="italic font-medium">{item.speaker}</span>
                </p>
              </div>
            ) : (
              <button
                onClick={() => handleReadMore(index)}
                className="bg-gold-fade-x text-white p-1 rounded-md text-sm uppercase"
              >
                Read More ˃
              </button>
            )}
          </div>
          </OutsideClickHandler>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
