"use client";

import InputField from "@/app/components/Input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Details = () => {
  const router = useRouter();
  const { handleSubmit, getValues } = useForm();

  function handleEdit() {
    const { title, details } = getValues();
    // handleSubmit({
    //   title,details
    // });
  }
  return (
    <div className="bg-white h-[500px] w-[500px] rounded-lg flex flex-col gap-2 p-4 items-center justify-between ">
      <div className="flex flex-col gap-4 w-full items-center"> 
        <div className="font-bold text-xl">title</div>
        <div className="flex flex-col gap-2 w-full">
          <InputField name="title" />
          <InputField name="details" />
        </div>
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
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Details;
