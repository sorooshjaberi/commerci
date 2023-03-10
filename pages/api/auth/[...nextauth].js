import { getUsersCollection, dbClose } from "@/lib/api/mongo-utils";
import { passwordVerifier } from "@/lib/password-crypt-utils";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
const authenticator = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const collection = await getUsersCollection();
        const user = await collection.findOne({ email: credentials.email });
        if (!user) {
          await dbClose();
          throw new Error("User not found");
        }
        const isRight = await passwordVerifier(
          credentials.password,
          user.password
        );
        if (!isRight) {
          await dbClose();
          throw new Error("Wrong password");
          return;
        }
        dbClose();
        const data = {
          name: user.name,
          lastName: user.lastName,
          email: user.email,
        };
        return { email: user.email ,id:user._id };
      },
    }),
  ],
  callbacks:{

  },
  secret:process.env.NEXTAUTH_SECRET
});
export default authenticator;
