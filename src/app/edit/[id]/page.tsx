"use client";

import Button from "@/app/components/Button";
import InputField from "@/app/components/Input";
import { useUpdateTodo } from "@/app/hooks/mutation/useUpdateTodo";
import { useQueryTodoById } from "@/app/hooks/query/useQueryTodoById";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface DataType {
  data: {
    title: string;
    createdAt: string;
    details: string;
    id: string;
    updatedAt: string;
  };
  isLoading: boolean;
}

const Details = () => {
  const router = useRouter();
  const methods = useForm();
  const path = usePathname();
  const id = path.split("/")[2];
  const { data, isLoading } = useQueryTodoById({ id }) as DataType;
  const { handleSubmit, getValues, setValue } = methods;
  const { mutate } = useUpdateTodo(id);

  function handleEdit() {
    const { title, details } = getValues();
    mutate({ data: { id, title: title, details: details } });
  }

  useEffect(() => {
    if (data) {
      setValue("title", data?.title);
      setValue("details", data?.details);
    }
  }, [data]);

  return (
    <FormProvider {...methods}>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <div className="bg-white h-[500px] w-[500px] rounded-lg flex flex-col gap-2 p-4 items-center justify-between ">
          <div className="flex flex-col gap-4 w-full items-center">
            <div className="font-bold text-xl">title</div>
            <div className="flex flex-col gap-2 w-full">
              <InputField name="title" />
              <InputField name="details" />
            </div>
          </div>
          <div className="flex gap-6">
            <Button
              title=" Go Back"
              variant="info"
              onClick={() => router.back()}
            />

            <Button title="Edit" onClick={handleSubmit(handleEdit)} />
          </div>
        </div>
      )}
    </FormProvider>
  );
};

export default Details;
