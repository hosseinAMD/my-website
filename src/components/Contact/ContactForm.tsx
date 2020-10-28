import TextArea from "./TextArea";
import TextInput from "./TextInput";

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col space-y-4 bg-gray-100 rounded-lg py-10 px-4 h-full">
      <TextInput name="name" placeholder="Your Name" />
      <TextInput name="email" type="email" placeholder="Your Email" />
      <TextInput
        name="phone"
        type="tel"
        placeholder="Your Phone Number(optional)"
      />
      <TextArea name="message" placeholder="Your valuable message..." />
      <input
        type="submit"
        value="Submit"
        className="w-full bg-blue-500 rounded-lg text-white font-semibold py-2"
      />
    </form>
  );
};

export default ContactForm;
