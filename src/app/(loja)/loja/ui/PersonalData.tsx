"use client";

import { StoreContext } from "@/core/context/store";
import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import VMasker from "vanilla-masker";

export default function PersonalData() {
  const { store } = useContext(StoreContext);

  return (
    <div>
      <TextField label="E-mail" value={store.email} name="email" fullWidth />
      <TextField label="Telefone" fullWidth value={store.phone} name="phone" />
      <TextField
        label="Nome do seu negócio"
        fullWidth
        value={store.name}
        name="name"
      />
      <TextField label="Tag" disabled fullWidth value={store.tag} />
    </div>
  );
}
