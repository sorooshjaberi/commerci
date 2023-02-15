import { signIn } from "next-auth/react";
export const loginHandler = async ({ email, password }) => {
  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (result?.error) throw new Error(result.error || "login failed");
};
