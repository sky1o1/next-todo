import { CONFIG } from "@/app/lib/config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const DeleteFxn = async (id: string) => {
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/delete?id=${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const useDelete = (id: string) => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["delete-todo", id],
    mutationFn: () => DeleteFxn(id),
    onSuccess: () => router.push("/"),
  });
};
