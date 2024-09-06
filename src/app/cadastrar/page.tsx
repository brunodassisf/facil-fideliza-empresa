import SignUp from "@/screen/Signup";
import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";

export default function HomeScreen() {
  return (
    <Box component="section" className="">
      <Container
        maxWidth="xs"
        className="flex flex-col justify-center items-center mt-10 gap-y-4 pb-5"
      >
        <Image
          src="/logo.png"
          className="mb-4"
          alt="logo"
          width={50}
          height={50}
        />
        <Box>
          <Typography
            variant="h4"
            component="h1"
            className="font-semibold text-blue-900"
          >
            Fácil Fideliza
          </Typography>
          <Divider>
            <Typography className="font-thin text-blue-900">Empresa</Typography>
          </Divider>
        </Box>
        <SignUp />
      </Container>
    </Box>
  );
}
