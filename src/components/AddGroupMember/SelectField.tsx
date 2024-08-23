import React from "react";
import { MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from "@mui/material";
import { Relationship } from "@/constant/relationship";

interface SelectFieldProps {
  label: string;
  options: readonly Relationship[];
  value: Relationship;
  onChange: (value: Relationship) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, value, onChange }) => {
  const handleChange = (event: SelectChangeEvent<Relationship>) => {
    onChange(event.target.value as Relationship);
  };

  return (
    <FormControl fullWidth variant="outlined" className="mb-4">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={handleChange} label={label} className="rounded-lg">
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
