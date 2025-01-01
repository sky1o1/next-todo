"use client";

import { useFormContext } from "react-hook-form";

const InputField = ({
  name,
  type = "text",
  placeholder,
}: {
  name: string;
  type?: string;
  placeholder?: string;
}) => {
  const { register } = useFormContext();

  return (
    <input
      className="h-[50px] w-full rounded-lg border-2 hover:border-gray-400"
      {...register(name)}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;
