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
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full py-2 px-3 text-lg rounded-lg border-2 border-gray-400 text-gray-800 transition duration-150 focus:border-blue-500"
      />
    </div>
  );
};

export default TextInput;
