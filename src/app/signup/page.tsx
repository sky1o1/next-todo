"use client";

import { FormProvider, useForm } from "react-hook-form";
import InputField from "../components/Input";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { useCreateUser } from "../hooks/mutation/useCreateUser";

const Signup = () => {
  const router = useRouter();
  const methods = useForm();
  const { handleSubmit, getValues } = methods;
  const { mutate } = useCreateUser();

  const handleClick = () => {
    const { age, name, email, password } = getValues();
    mutate({
      data: {
        age,
        email,
        name,
        password,
      },
    });
    console.log(getValues());
  };

  return (
    <div className="p-4 w-[550px] h-[700px] rounded-[20px] flex flex-col gap-4 bg-white">
      <div className="text-xl text-black font-semibold">Signup</div>
      <div className="flex flex-col gap-2">
        <FormProvider {...methods}>
          <div className="w-full flex gap-4">
            <InputField
              required={true}
              name="name"
              placeholder="Enter Name"
              label="Name"
            />
            <InputField
              required={true}
              name="age"
              placeholder="Enter Age"
              label="Age"
              type="number"
            />
          </div>
          <InputField
            required={true}
            name="email"
            placeholder="Enter Email"
            label="Email"
            type="email"
          />

          <InputField
            required={true}
            name="password"
            placeholder="Enter Password"
            label="Password"
            type="password"
          />
          <InputField
            required={true}
            name="repassword"
            placeholder="Enter Password Again"
            label="Confirm Password"
            type="password"
          />
        </FormProvider>
      </div>
      <Button onClick={handleSubmit(handleClick)} title="Sign up" />
      <p className="text-l font-semibold">Have an Account?</p>
      <Button onClick={() => router.push("/login")} title="Login" />
      <Button variant="info" onClick={() => router.push("/")} title="Go Back" />
    </div>
  );
};

export default Signup;
