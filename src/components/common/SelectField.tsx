import { useState, useRef, useEffect } from "react";

interface SelectFieldProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

function SelectField<T extends string>({
  label,
  options,
  value,
  onChange,
}: SelectFieldProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full mb-2 text-grey" ref={dropdownRef}>
      <div>
        <label
          className="block text-md font-semibold mb-2"
          id={`${label}-label`}
        >
          {label}
        </label>
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={`${label}-label`}
          className="w-full border-b border-grey cursor-pointer flex justify-between items-center focus:border-blue-500 text-md outline-none transition-all duration-100 ease-in-out bg-white pb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{value}</span>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180 text-Button" : "text-grey "
            }`}
          >
            ▼
          </span>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "mt-2 max-h-360" : "max-h-0"
        }`}
      >
        <div
          ref={optionsRef}
          role="listbox"
          className="bg-white border-solid border-2 border-Button rounded-lg shadow-lg"
        >
          {options.map((option) => (
            <div
              key={option}
              role="option"
              aria-selected={option === value}
              className="px-2 py-3 hover:bg-blue-100 cursor-pointer transition-colors duration-150 ease-in-out"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectField;
