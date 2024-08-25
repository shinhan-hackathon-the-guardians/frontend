import React from "react";
import { Relationship } from "@/constant/relationship";

interface SelectFieldProps {
  label: string;
  options: readonly Relationship[];
  value: Relationship;
  onChange: (value: Relationship) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, value, onChange }) => {
  const selectId = `${label}-select`;

  return (
    <div className="mb-4">
      <label htmlFor={selectId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value as Relationship)}
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
