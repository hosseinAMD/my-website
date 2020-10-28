export interface TextInputProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
