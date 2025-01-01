"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../../components/Input";
import { useAddTodo } from "@/app/hooks/query/useAddTodo";

const CreatePost = () => {
  const router = useRouter();
  const methods = useForm();
  const { register, handleSubmit, getValues } = methods;

  const { mutate } = useAddTodo();

  function handleClick() {
    const { title, details } = getValues();
    handleSubmit(
      mutate({
        data: { title, details, authorId: "212" },
      })
    );
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

export default CreatePost;
