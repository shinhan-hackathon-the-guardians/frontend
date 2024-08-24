import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
      />
    </div>
  );
};

export default InputField;
