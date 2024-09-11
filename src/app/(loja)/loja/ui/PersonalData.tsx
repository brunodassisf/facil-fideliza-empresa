"use client";

import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import VMasker from "vanilla-masker";

export default function PersonalData() {
  const { data: session } = useSession();

  return (
    <div>
      <TextField
        label="E-mail"
        value={session?.user.email}
        name="email"
        fullWidth
      />
      <TextField
        label="Telefone"
        fullWidth
        value={session?.user.phone}
        name="phone"
      />
      <TextField
        label="Nome do seu negócio"
        fullWidth
        value={session?.user.name}
        name="name"
      />
      <TextField label="Tag" disabled fullWidth value={session?.user.tag} />
    </div>
  );
}
