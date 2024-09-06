"use server";

import { generateHash } from "../lib/bcrypt";
import prisma from "../lib/prisma";
import VMasker from "vanilla-masker";

export default async function doCreateUser(data: any) {
  const { password, name, email, phone, tag } = data;
  const hash = await generateHash(password);
  const unMaskerPhone = VMasker.toNumber(phone);
  const newUser = await prisma.store.create({
    data: { hash, name, email, phone: unMaskerPhone, tag },
  });
  if (newUser)
    return {
      ok: true,
      msg: "Usuário criado com sucesso",
    };
}
