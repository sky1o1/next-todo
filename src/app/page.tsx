"use client";
import { useRouter } from "next/navigation";
import Cards from "./components/Cards";

const todoList = [
  {
    id: 1,
    title: "shopping",
    details: "go to BBSM",
  },
  {
    id: 2,
    title: "singing",
    details: "go to karaoke",
  },
  {
    id: 3,
    title: "playing",
    details: "go to game station",
  },
  {
    id: 4,
    title: "showering",
    details: "go to shower",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold"> Dashboard Page</div>
        <div className="flex flex-col justify-center">
          <div className="text-lg font-semibold"> Todo lists</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {todoList.map((list) => (
          <Cards key={list?.id} title={list?.title} details={list?.details} />
        ))}
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
