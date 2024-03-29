import { getUsersCollection, dbClose } from "@/lib/api/mongo-utils";
import { passwordVerifier } from "@/lib/password-crypt-utils";
import { findUser } from "@/lib/signUpUser";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
const authenticator = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        // const collection = await getUsersCollection();
        // const user = await collection.findOne({ email: credentials.email });
        const user = await findUser(credentials.email);
        if (!user) {
          // await dbClose();
          throw new Error("User not found");
        }
        const isRight = await passwordVerifier(
          credentials.password,
          user.password
        );
        if (!isRight) {
          // await dbClose();
          throw new Error("Wrong password");
        }
        // dbClose();
        return { email: user.email, id: user._id };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
export default authenticator;
