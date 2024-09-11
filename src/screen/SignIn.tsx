"use client";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Link from "next/link";

import { signIpSchema as validationSchema } from "@/core/validation/user";
import { useFormik } from "formik";
import { useState } from "react";
import { ProgressBar } from "@/components";
import { doCredential } from "@/core/actions/signin";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};

const SignIn: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleCreateAccount = async (values: any) => {
    setIsLoading(true);
    await doCredential(values)
      .then((res) => {
        console.log(res);
        if (res?.ok) {
          toast.success("Bem-vindo(a)!");
          router.push("/loja");
        } else if (!res?.ok) {
          toast.error(res?.error);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleCreateAccount,
  });

  return (
    <>
      {isLoading && <ProgressBar />}
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col w-full justify-center items-center gap-y-5 p-7 rounded-lg drop-shadow"
      >
        <Typography className="font-semibold text-blue-900">Login</Typography>
        <TextField
          label="E-mail"
          value={values.email}
          name="email"
          onChange={handleChange}
          error={!!errors?.email && touched?.email}
          helperText={errors?.email}
          fullWidth
        />
        <TextField
          label="Senha"
          type="password"
          value={values.password}
          name="password"
          onChange={handleChange}
          error={!!errors?.password && touched?.password}
          helperText={errors?.password}
          fullWidth
        />
        <Box className="w-full">
          <Button variant="contained" fullWidth type="submit">
            Entrar
          </Button>
          <Divider className="my-2">ou</Divider>
          <Button fullWidth LinkComponent={Link} href="/cadastrar">
            Cadastre-se
          </Button>
        </Box>
      </form>
    </>
  );
};

export default SignIn;
