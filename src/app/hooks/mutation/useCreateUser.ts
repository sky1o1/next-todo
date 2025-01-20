import { CONFIG } from "@/app/lib/config";
import { useMutation } from "@tanstack/react-query";

interface UserData {
  data: { name: string; age: number; email: string };
}

const CreateUser = async ({ data }: UserData) => {
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/create/user`, {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        age: +data.age,
        email: data.email,
        role: "ADMIN",
      }),
    });
    return res.json();
  } catch (err) {
    alert(err);
  }
};

export const useCreateUser = () => {
  return useMutation({
    mutationKey: ["createUser"],
    mutationFn: ({ data }: UserData) => CreateUser({ data }),
  });
};
