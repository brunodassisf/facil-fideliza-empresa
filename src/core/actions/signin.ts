import { signIn } from "next-auth/react";

export async function doCredential(data: any) {
  const { email, password } = data;
  return await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
}
