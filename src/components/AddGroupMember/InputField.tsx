import React from "react";
import Input from "@mui/material/Input";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        fullWidth
        disableUnderline
        className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
