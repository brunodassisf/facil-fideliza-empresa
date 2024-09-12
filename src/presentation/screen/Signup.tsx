"use client";

import { Button, Divider, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import VMasker from "vanilla-masker";

import { signUpSchema as validationSchema } from "@/core/validation/user";
import { formatarString } from "@/core/util/format";
import { ProgressBar } from "@/presentation/components/index";
import { useState } from "react";
import doCreateUser from "@/core/actions/signup";
import { toast } from "react-toastify";
import { doCredential } from "@/core/actions/signin";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  phone: "",
  name: "",
  tag: "",
  password: "",
  passwordConfirmation: "",
};

const SignUp: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleCreateAccount = async (values: any) => {
    setIsLoading(true);
    await doCreateUser(values)
      .then(async (res) => {
        if (res?.ok) {
          toast.success(res?.msg);
          await doCredential({
            email: values.email,
            password: values.password,
          }).then((res) => {
            if (res?.ok) {
              toast.success("Seja bem-vindo(a)!!");
              router.push("/loja");
            } else {
              toast.error(res?.error);
            }
          });
        }
      })
      .finally(() => setIsLoading(false));
  };

  const { values, errors, touched, handleChange, setFieldValue, handleSubmit } =
    useFormik({
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
        <Typography className="font-semibold text-blue-900">
          Cadastre-se
        </Typography>
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
          label="Telefone"
          fullWidth
          value={values.phone}
          name="phone"
          onChange={(ev) =>
            setFieldValue(
              "phone",
              VMasker.toPattern(ev.target.value, "(99) 99999-9999")
            )
          }
          error={!!errors?.phone && touched?.phone}
          helperText={errors?.phone}
        />
        <TextField
          label="Nome do seu negócio"
          fullWidth
          value={values.name}
          name="name"
          onChange={(ev) => {
            handleChange(ev);
            setFieldValue("tag", formatarString(ev.target.value));
          }}
          error={!!errors?.name && touched?.name}
          helperText={errors?.name}
        />
        <TextField
          label="Tag"
          disabled
          fullWidth
          helperText="Será preenchido de acordo com o nome do seu negócio"
          value={values.tag}
        />
        <TextField
          label="Senha"
          type="password"
          fullWidth
          value={values.password}
          name="password"
          onChange={handleChange}
          error={!!errors?.password && touched?.password}
          helperText={errors?.password}
        />
        <TextField
          label="Confirmar senha"
          type="password"
          fullWidth
          value={values.passwordConfirmation}
          name="passwordConfirmation"
          onChange={handleChange}
          error={
            !!errors?.passwordConfirmation && touched?.passwordConfirmation
          }
          helperText={errors?.passwordConfirmation}
        />
        <div className="w-full">
          <Button variant="contained" type="submit" fullWidth>
            Cadastrar
          </Button>
          <Divider className="my-2">ou</Divider>
          <Button fullWidth LinkComponent={Link} href="/">
            Fazer login
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
