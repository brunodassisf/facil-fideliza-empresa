import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Link from "next/link";

const SignIn: React.FC = () => {
  return (
    <Box
      component="form"
      className="bg-white flex flex-col w-full justify-center items-center gap-y-5 p-7 rounded-lg drop-shadow"
    >
      <Typography className="font-semibold text-blue-900">Login</Typography>
      <TextField label="E-mail" fullWidth />
      <TextField label="Senha" fullWidth />
      <Box className="w-full">
        <Button variant="contained" fullWidth>
          Entrar
        </Button>
        <Divider className="my-2">ou</Divider>
        <Button fullWidth LinkComponent={Link} href="/cadastrar">
          Cadastre-se
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
