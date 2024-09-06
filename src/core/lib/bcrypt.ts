import * as bcrypt from "bcryptjs";

const saltRounds = 10;

export async function generateHash(password: string) {
  return bcrypt.hash(password, saltRounds);
}

export async function compareHash(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
