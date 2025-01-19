import { CONFIG } from "@/app/lib/config";
import { useQuery } from "@tanstack/react-query";

const QueryTodoById = async (id: string) => {
  console.log(id);
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/fetch/todo_id?id=${id}`);
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const useQueryTodoById = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["query-todo-id", id],
    queryFn: () => QueryTodoById(id),
    enabled: !!id,
  });
};
