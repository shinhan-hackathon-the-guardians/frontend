import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="w-full mb-6 text-grey">
      <label className="block text-md font-semibold mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-grey focus:border-Button focus:border-b-2 outline-none transition-all duration-100 ease-in-out text-md pb-2"
      />
    </div>
  );
};

export default InputField;
