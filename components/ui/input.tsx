import React from "react";

interface InputProps {
  name: string;
  onChange: any;
  onBlur?: any;
  value: string;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  onChange,
  onBlur,
  value,
  placeholder,
  type,
}) => {
  return (
    <div className="relative w-full max-w-sm">
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type || "text"}
        className="block w-60 rounded border border-gray-500 bg-[#333] px-3 pt-4 pb-1 text-sm text-white appearance-none focus:outline-none focus:ring-0 peer mt-2"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-300 duration-150 transform -translate-y-3 scale-75 top-2.5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
