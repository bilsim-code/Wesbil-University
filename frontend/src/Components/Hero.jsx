const Hero = () => {
  return (
    <div className="hero flex items-center justify-center  h-screen w-full bg-center bg-cover bg-no-repeat">
      <div className="text-white pl-4 nav-ul-md:pl-0">
        <h2 className="480px:text-[40px]  text-3xl font-bold">Welcome to Wesbil University</h2>
        <div className="480px:text-3xl text-2xl pt-2 480px:pt-5">
          <span className="text-gold font-serif">Motto: </span>Making World Leaders
        </div>
        <div className="480px:text-3xl text-2xl pt-2 480px:pt-5">
          <span className="text-gold font-serif">Vision: </span>To be an institution known for exporting pure
          game changers
        </div>
      </div>
    </div>
  );
};

export default Hero;
