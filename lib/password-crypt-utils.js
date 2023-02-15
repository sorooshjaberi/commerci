import { hash, compare } from "bcryptjs";
export const hashedPassword = async (stringPassword, intensity = 12) => {
  const hashed = await hash(stringPassword, intensity);
  return hashed;
};
export const passwordVerifier = async (password, hashedPassword) => {
  const isRight = await compare(password, hashedPassword);
  return isRight;
};
