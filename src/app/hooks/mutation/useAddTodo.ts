import { CONFIG } from "@/app/lib/config";
import { useMutation } from "@tanstack/react-query";

interface AddTodoProps {
  data: { title: string; details: string; authorId: string };
}

const AddTodo = async ({ data }: AddTodoProps) => {
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/create/todo`, {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        details: data.details,
      }),
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const useAddTodo = () => {
  return useMutation({
    mutationKey: ["add-todo"],
    mutationFn: ({ data }: AddTodoProps) => AddTodo({ data }),
  });
};
