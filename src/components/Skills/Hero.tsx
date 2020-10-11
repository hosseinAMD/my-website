const Hero: React.FC = () => {
  return (
    <div className="py-6 md:py-10 bg-hue">
      <div className="container mx-auto">
        <div className="mx-4 md:w-2/3 md:mx-auto md:grid md:grid-cols-2 md:gap-8 md:items-center">
          <div>
            <p className="text-3xl text-gray-800 font-bold text-center md:text-left">
              What You Can{" "}
              <span className="text-5xl text-blue-600">EXPECT</span>
            </p>
            <p className="text-3xl text-gray-800 font-bold text-center md:text-left">
              From <span className="text-5xl text-blue-600">Me</span>
            </p>
          </div>
          <div className="flex flex-row mt-4 md:mt-0 md:flex-col space-x-4 md:space-y-4">
            <img
              className="w-20 md:w-32 mx-auto"
              src="/img/web.png"
              alt="Web Techs Logo"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-20 md:w-32 mx-auto"
                src="/img/react.png"
                alt="React Logo"
              />
              <img
                className="w-20 md:w-32 mx-auto"
                src="/img/responsive.png"
                alt="Responsive Design Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
