import React from "react";
interface InputsFormPrps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id: string;
}
const InputsForm: React.FC<InputsFormPrps> = ({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  id = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      id={id}
    />
  );
};
export default InputsForm;
