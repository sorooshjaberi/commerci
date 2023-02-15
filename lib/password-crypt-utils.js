import { hash } from "bcryptjs";
export const hashedPassword = async (stringPassword, intensity = 12) => {
  const hashed = await hash(stringPassword, intensity);
  return hashed;
};
