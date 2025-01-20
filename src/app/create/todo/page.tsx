"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../components/Input";
import { useAddTodo } from "@/app/hooks/mutation/useAddTodo";
import Button from "@/app/components/Button";

const CreatePost = () => {
  const router = useRouter();
  const methods = useForm();
  const { register, handleSubmit, getValues } = methods;

  const { mutate } = useAddTodo();

  function handleClick() {
    const { title, details } = getValues();
    mutate({
      data: { title, details },
    });
  }
  return (
    <div className=" h-[500px] w-[500px] flex flex-col gap-4 justify-center items-center bg-white rounded-lg p-4 ">
      <FormProvider {...methods}>
        <div className="text-lg font-semibold ">Add Todo</div>

        <div className="w-full h-full flex flex-col gap-3  ">
          <InputField name="title" placeholder="Enter Title" />
          <textarea
            className="h-[50px] w-full rounded-lg border-2   hover:border-gray-400"
            {...register("details")}
            name="details"
            placeholder="Enter Details"
            rows={4}
          />
        </div>
        <div className="flex gap-6">
          <Button
            title="Go Back"
            variant="info"
            onClick={() => router.back()}
          />

          <Button title="Submit" onClick={handleSubmit(handleClick)} />
        </div>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
