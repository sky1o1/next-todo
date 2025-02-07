"use client";

import { useFormContext } from "react-hook-form";

const InputField = ({
  name,
  type = "text",
  placeholder,
  label,
  required = false,
}: {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full">
      <div>{required ? `${label}*` : label}</div>
      <input
        className={`h-[50px] w-full rounded-lg border-2 hover:border-gray-400 ${
          errors[name] ? "border-red-500" : ""
        }`}
        {...register(name, {
          required: required ? `${label || name} is required` : false,
        })}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-red-500">
          {errors[name]?.message as React.ReactNode}
        </p>
      )}
    </div>
  );
};

export default InputField;
