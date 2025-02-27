import { CONFIG } from "@/app/lib/config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface AddTodoProps {
  data: { title: string; details: string };
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
  const router = useRouter();
  return useMutation({
    mutationKey: ["add-todo"],
    mutationFn: ({ data }: AddTodoProps) => AddTodo({ data }),
    onSuccess: () => router.push("/"),
  });
};
