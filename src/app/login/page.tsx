"use client";

import { FormProvider, useForm } from "react-hook-form";
import InputField from "../components/Input";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const methods = useForm();
  const { handleSubmit, getValues } = methods;

  const handleClick = () => {
    console.log(getValues());
  };
  return (
    <div className="p-4 w-[350px] h-[500px] rounded-[20px] flex flex-col gap-4 bg-white">
      <div className="text-xl text-black font-semibold">Login</div>
      <div className="flex flex-col gap-2">
        <FormProvider {...methods}>
          <InputField
            required={true}
            name="username"
            placeholder="Enter Username"
            label="Username"
          />
          <InputField
            required={true}
            name="password"
            placeholder="Enter Password"
            label="Password"
            type="password"
          />
        </FormProvider>
      </div>
      <Button onClick={handleSubmit(handleClick)} title="Login" />
      <p className="text-l font-semibold">Dont Have an Account?</p>
      <Button onClick={() => router.push("/signup")} title="Sign Up" />
      <Button variant="info" onClick={() => router.push("/")} title="Go Back" />
    </div>
  );
};

export default Login;
