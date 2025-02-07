import { CONFIG } from "@/app/lib/config";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface UserData {
  data: { name: string; age: number; email: string; password: string };
}

const CreateUser = async ({ data }: UserData) => {
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/create/user`, {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        age: +data.age,
        email: data.email,
        password: data.password,
        role: "USER",
      }),
    });
    return res.json();
  } catch (err) {
    alert(err);
  }
};

export const useCreateUser = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["createUser"],
    mutationFn: ({ data }: UserData) => CreateUser({ data }),
    onSuccess: () => router.push("/login"),
  });
};
