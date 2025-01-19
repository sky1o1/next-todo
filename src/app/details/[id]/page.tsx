"use client";

import { usePathname, useRouter } from "next/navigation";
import { useQueryTodoById } from "@/app/hooks/query/useQueryTodoById";

const Details = () => {
  const router = useRouter();
  const path = usePathname();
  const id = path.split("/")[2];
  const { data, isLoading } = useQueryTodoById({ id });
  return (
    <>
      {isLoading ? (
        <>...Loading</>
      ) : (
        <div className="bg-white h-[500px] w-full rounded-lg flex flex-col gap-2 p-2 items-center">
          <div
            className="bg-green-500 p-2 rounded-lg cursor-pointer hover:bg-green-400"
            onClick={() => router.back()}
          >
            Go Back
          </div>
          <div className="font-bold text-xl">{data?.title}</div>
          <div>
            <div>{data?.details}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
