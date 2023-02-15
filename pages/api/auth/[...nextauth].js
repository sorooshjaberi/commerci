import { getUsersCollection, dbClose } from "@/lib/api/mongo-utils";
import { passwordVerifier } from "@/lib/password-crypt-utils";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
const authenticator = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const collection = await getUsersCollection();
        const user = collection.findOne({ email: credentials.email });
        if (!user) {
          await dbClose();
          throw new Error("User not found");
        }
        const isRight = passwordVerifier(credentials.password, user.password);
        if (!isRight) {
          await dbClose();
          throw new Error("Wrong password");
        }
        dbClose();
        return { ...user };
      },
    }),
  ],
});
export default authenticator;
