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
    <div className="w-full mb-8 text-grey">
      <label className="block text-md font-semibold mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b-2 border-grey focus:border-Button p-1 py-2 text-lg outline-none transition-all duration-100 ease-in-out p-2 text-lg"
      />
    </div>
  );
};

export default InputField;
