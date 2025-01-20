import { CONFIG } from "@/app/lib/config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface useUpdateTodoProps {
  data: { id: string; title: string; details: string };
}

const UpdateTodo = async ({ data }: useUpdateTodoProps) => {
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/update/todo`, {
      method: "PATCH",
      body: JSON.stringify({
        id: data.id,
        title: data.title,
        details: data.details,
      }),
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const useUpdateTodo = (id: string) => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["update-todo", id],
    mutationFn: ({ data }: useUpdateTodoProps) => UpdateTodo({ data }),
    onSuccess: () => router.push("/"),
  });
};
