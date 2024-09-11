"use server";

import prisma from "../lib/prisma";

export default async function getStore(id: string) {
  const store = await prisma.store.findFirst({ where: { id } });

  return store;
}
