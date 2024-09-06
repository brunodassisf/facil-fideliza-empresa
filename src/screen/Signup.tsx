"use client";

import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";

import { signUpSchema as validationSchema } from "@/core/validation/user";

const initialValues = {
  email: "",
  phone: "",
  name: "",
  tag: "",
  password: "",
  passwordConfirmation: "",
};

const SignUp: React.FC = () => {
  const handleCreateAccount = (values: any): void => {};

  const { values, errors, touched, handleChange, setFieldValue, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleCreateAccount,
    });

  return (
    <Box
      component="form"
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
        onChange={handleChange}
        error={!!errors?.phone && touched?.phone}
        helperText={errors?.phone}
      />
      <TextField
        label="Nome do seu negócio"
        fullWidth
        value={values.name}
        name="name"
        onChange={handleChange}
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
        fullWidth
        value={values.password}
        name="password"
        onChange={handleChange}
        error={!!errors?.password && touched?.password}
        helperText={errors?.password}
      />
      <TextField
        label="Confirmar senha"
        fullWidth
        value={values.passwordConfirmation}
        name="passwordConfirmation"
        onChange={handleChange}
        error={!!errors?.passwordConfirmation && touched?.passwordConfirmation}
        helperText={errors?.passwordConfirmation}
      />
      <Box className="w-full">
        <Button variant="contained" type="submit" fullWidth>
          Cadastrar
        </Button>
        <Divider className="my-2">ou</Divider>
        <Button fullWidth LinkComponent={Link} href="/">
          Fazer login
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
