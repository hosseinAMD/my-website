import ContactForm from "./ContactForm";

const Container: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="text-center flex flex-col space-y-6">
        <p className="text-3xl text-gray-900 font-semibold">Contact Me</p>
        <p className="w-1/2 mx-auto text-lg text-gray-900">
          Feel free to contact me if you need any{" "}
          <strong className="text-blue-600">advice in learning</strong>,{" "}
          <strong className="text-blue-600">developing a project</strong> or
          have a valid <strong className="text-blue-600">job offer</strong>
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:w-2/3 md:mx-auto">
        <div>
          <img
            src="/img/me-transparent.png"
            alt="Hossein Ahmadi Photo"
            className="w-full"
          />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Container;
