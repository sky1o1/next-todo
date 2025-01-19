import { CONFIG } from "@/app/lib/config";
import { useQuery } from "@tanstack/react-query";

const QueryTodo = async () => {
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/fetch/todo`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const useQueryTodo = () => {
  return useQuery({
    queryKey: ["query-todo"],
    queryFn: QueryTodo,
  });
};
