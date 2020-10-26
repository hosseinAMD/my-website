const Hero: React.FC = () => {
  return (
    <div className="py-6 md:py-10 bg-green-400">
      <div className="container mx-auto">
        <div className="mx-4 md:w-2/3 md:mx-auto md:grid md:grid-cols-2 md:gap-8 md:items-center">
          <div>
            <p className="text-2xl text-gray-800 font-bold text-center md:text-left">
              Majored in{" "}
              <span className="text-4xl text-white">SOFTWARE ENGINEERING</span>
            </p>
            <p className="text-2xl text-gray-800 font-bold text-center md:text-left">
              Explore{" "}
              <span className="text-4xl text-white">
                MY ACADEMIC EXPERIENCE
              </span>
            </p>
          </div>
          <div className="text-center text-white text-6xl">
            <img src="/img/university.png" alt="contract" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
