"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../components/Input";
import { useCreateUser } from "@/app/hooks/mutation/useCreateUser";

const CreateUser = () => {
  const router = useRouter();
  const methods = useForm();
  const { handleSubmit, getValues } = methods;

  const { mutate } = useCreateUser();

  function handleClick() {
    const { name, age, email } = getValues();
    handleSubmit(mutate({ data: { name, age, email } }));
  }

  return (
    <div className=" h-[500px] w-[500px] flex flex-col gap-4 justify-center items-center bg-white rounded-lg p-4 ">
      <FormProvider {...methods}>
        <div className="text-lg font-semibold ">Create User</div>

        <div className="w-full h-full flex flex-col gap-3  ">
          <InputField name="name" placeholder="Enter Name" />
          <InputField name="email" placeholder="Enter Email" type="email" />
          <InputField name="age" placeholder="Enter Age" type="number" />
        </div>
        <div className="flex gap-6">
          <button
            color="success"
            className=" h-[40px] w-[100px] bg-white rounded-lg border-2 border-gray-400 mt-2 hover:bg-gray-200 "
            type="submit"
            onClick={() => router.back()}
          >
            Go Back
          </button>
          <button
            color="success"
            className=" h-[40px] w-[100px] bg-white rounded-lg border-2 border-gray-400 mt-2 hover:bg-gray-200 "
            type="submit"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </FormProvider>
    </div>
  );
};

export default CreateUser;
