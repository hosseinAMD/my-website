const Hero: React.FC = () => {
  return (
    <div className="py-10 bg-yellow-400">
      <div className="container mx-auto">
        <div className="w-2/3 mx-auto grid grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-3xl text-gray-800 font-bold">
              What You Can{" "}
              <span className="text-5xl text-blue-600">EXPECT</span>
            </p>
            <p className="text-3xl text-gray-800 font-bold">
              From <span className="text-5xl text-blue-600">Me</span>
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <img
              className="w-32 mx-auto"
              src="/img/web.png"
              alt="Web Techs Logo"
            />
            <div className="grid grid-cols-2">
              <img
                className="w-32 mx-auto"
                src="/img/react.png"
                alt="React Logo"
              />
              <img
                className="w-32 mx-auto"
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
