import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import Hero from "../Components/Hero";
import Schools from "../Components/Schools";
import { ChevronLeft, ChevronRight } from "react-feather";
import carouselImages from "../Components/CarouselImages";
import Programs from "../Components/Programs";
import { FaCircleChevronUp } from "react-icons/fa6";
import { Link } from "react-scroll";
import Questions from "../Components/Accordion";
import Countup from 'react-countup';
import Testimonials from "../Components/Testimonials";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });

    //cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < carouselImages.length - 1 ? prev + 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  function handleRight() {
    setIndex((prev) => (prev < carouselImages.length - 1 ? prev + 1 : 0));
  }

  function handleLeft() {
    setIndex((prev) => (prev > 0 ? prev - 1 : carouselImages.length - 1));
  }

  const location = useLocation();
  useEffect(() => {
    const scrollToHash = () => {
      const hash = location.hash;
      if(hash) {
        const element = document.querySelector(hash);
        if(element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }
    };
    scrollToHash();

     // Optionally, handle re-scroll if needed
     window.addEventListener('hashchange', scrollToHash);

     return () => {
         window.removeEventListener('hashchange', scrollToHash);
     };
  }, [location])

  return (
    <div>
      <Hero />
      <Schools />
      <div className="w-full mx-auto mb-10 relative overflow-hidden">
        <Carousel carouselImages={carouselImages} index={index} />
        <div className="icons flex absolute inset-0 items-center justify-between mx-3">
          <ChevronLeft
            className="text-white bg-blue-shade-1 rounded-full font-extrabold size-8 p-1 cursor-pointer z-10"
            onClick={handleLeft}
          />
          <ChevronRight
            className="text-white bg-blue-shade-1 rounded-full font-extrabold size-8 p-1 cursor-pointer z-10"
            onClick={handleRight}
          />
        </div>
        <ul className="dots w-full mx-auto flex justify-center gap-[4%] nav-ul-md:gap-[2%] absolute inset-0 items-end pb-4">
          <li
            className={`size-3.5 cursor-pointer nav-ul-md:w-6 nav-ul-md:h-2 rounded-full bg-blue-shade-1 ${index === 0 ? "bg-white" : null}`}
            onClick={() => setIndex(0)}
          ></li>
          <li
            className={`size-3.5 cursor-pointer nav-ul-md:w-6 nav-ul-md:h-2 rounded-full bg-blue-shade-1 ${index === 1 ? "bg-white" : null}`}
            onClick={() => setIndex(1)}
          ></li>
          <li
            className={`size-3.5 cursor-pointer nav-ul-md:w-6 nav-ul-md:h-2 rounded-full bg-blue-shade-1 ${index === 2 ? "bg-white" : null}`}
            onClick={() => setIndex(2)}
          ></li>
          <li
            className={`size-3.5 cursor-pointer nav-ul-md:w-6 nav-ul-md:h-2 rounded-full bg-blue-shade-1 ${index === 3 ? "bg-white" : null}`}
            onClick={() => setIndex(3)}
          ></li>
          <li
            className={`size-3.5 cursor-pointer nav-ul-md:w-6 nav-ul-md:h-2 rounded-full bg-blue-shade-1 ${index === 4 ? "bg-white" : null}`}
            onClick={() => setIndex(4)}
          ></li>
          <li
            className={`size-3.5 cursor-pointer nav-ul-md:w-6 nav-ul-md:h-2 rounded-full bg-blue-shade-1 ${index === 5 ? "bg-white" : null}`}
            onClick={() => setIndex(5)}
          ></li>
        </ul>
      </div>
      <Programs />
      <Testimonials/>
      {/* countup */}
      <div className="flex flex-col items-center my-4 bg-gray p-10">
        <span className="font-bold text-3xl text-gold-fade-x">
          <Countup start={1000} end={12000} duration={4} />
          <span className="">+</span>
        </span>
        <span className="font-medium">Enrolled Students</span>
      </div>

      <Questions/>
      {/* Bottom */}
      {showScrollTop && (
        <Link
          to="hero"
          spy={true}
          smooth={true}
          className="fixed bottom-6 right-2 z-50"
        >
          <FaCircleChevronUp className="size-7 cursor-pointer text-white bg-transparent" />
        </Link>
      )}

      
    </div>
  );
};

export default Home;
