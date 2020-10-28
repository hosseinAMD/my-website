export interface TextAreaProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  placeholder = "Write your mesage...",
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        rows={5}
        placeholder={placeholder}
        className="w-full py-2 px-3 text-lg rounded-lg border-2 border-gray-400 text-gray-800 transition duration-150 focus:border-blue-500"
      />
    </div>
  );
};

export default TextArea;
