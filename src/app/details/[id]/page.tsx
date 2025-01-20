"use client";

import { usePathname, useRouter } from "next/navigation";
import { useQueryTodoById } from "@/app/hooks/query/useQueryTodoById";
import Button from "@/app/components/Button";
import { useDelete } from "@/app/hooks/mutation/useDelete";

const Details = () => {
  const router = useRouter();
  const path = usePathname();
  const id = path.split("/")[2];
  const { data, isLoading } = useQueryTodoById({ id });
  const { mutate } = useDelete(id);
  return (
    <>
      {isLoading ? (
        <>...Loading</>
      ) : (
        <div className="flex flex-col w-full gap-3 items-center">
          <div className="flex w-[500px] justify-between">
            <Button
              title="Go Back"
              variant="info"
              onClick={() => router.back()}
            />
            <Button title="Edit" onClick={() => router.push(`/edit/${id}`)} />
            <Button title="Delete" variant="danger" onClick={mutate} />
          </div>
          <div className="bg-white h-[500px] w-[500px] rounded-lg flex flex-col gap-2 p-2 items-center">
            <div className="font-bold text-xl">{data?.title}</div>
            <div>
              <div>{data?.details}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
