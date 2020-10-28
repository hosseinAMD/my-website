import TextArea from "./TextArea";
import TextInput from "./TextInput";

const ContactForm: React.FC = () => {
  return (
    <form>
      <TextInput name="name" placeholder="Your Name" />
      <TextInput name="email" type="email" placeholder="Your Email" />
      <TextInput
        name="phone"
        type="tel"
        placeholder="Your Phone Number(optional)"
      />
      <TextArea name="message" placeholder="Your valuable message..." />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;
