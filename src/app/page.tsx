"use client";
import { useRouter } from "next/navigation";
import Cards from "./components/Cards";
import { useQueryTodo } from "./hooks/query/useQueryTodo";

interface TodoType {
  id: string;
  title: string;
  details: string;
}

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useQueryTodo();
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold">Dashboard Page</div>
        <div className="flex flex-col justify-center">
          <div className="text-lg font-semibold">Todo lists</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <>...loading</>
        ) : (
          <>
            {data?.map((list: TodoType) => (
              <Cards
                key={list?.id}
                id={list?.id}
                title={list?.title}
                details={list?.details}
              />
            ))}
          </>
        )}
        <div
          className="flex  p-2  h-20 justify-center  items-center border-2 border-red-500 gap-2 rounded-lg cursor-pointer bg-slate-200 hover:bg-red-400"
          onClick={() => router.push("/create/todo")}
        >
          <div className="text-lg font-bold">ADD TODO +</div>
        </div>
      </div>
    </div>
  );
}
