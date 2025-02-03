import React from "react";
import { forwardRef } from "react";
interface InputsFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const InputsForm = forwardRef<HTMLInputElement, InputsFormProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
);

export default InputsForm;
