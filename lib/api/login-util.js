import { signIn } from "next-auth/react";
export const loginHandler = async ({ email, password }) => {
//   console.log(data);
  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  if(result.error)throw new Error('login failed');
  console.log(result);
};
