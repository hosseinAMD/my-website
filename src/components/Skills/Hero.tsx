const Hero: React.FC = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <p className="text-4xl text-center text-gray-900 font-semibold mb-10">
          Skills and Abilities
        </p>
        <div className="w-1/2 mx-auto grid grid-cols-3 gap-8 items-center">
          <img className="w-32 mx-auto" src="/img/react.png" alt="React Logo" />
          <img
            className="w-32 mx-auto"
            src="/img/web.png"
            alt="Web Techs Logo"
          />
          <img
            className="w-32 mx-auto"
            src="/img/responsive.png"
            alt="Responsive Design Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
