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
      <textarea id={name} name={name} rows={5} placeholder={placeholder} />
    </div>
  );
};

export default TextArea;
