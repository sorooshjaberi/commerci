import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/lib/api/mongo-utils";
const handler = async (req, res) => {
  const session = await getServerSession(req, res);

  const userData = await getUserByEmail(session.user.email);

  res.json({ message: "hey", body: userData });
};

export default handler;
