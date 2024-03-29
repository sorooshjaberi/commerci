// import { addUser, getUsersCollection } from "@/lib/api/mongo-utils";
import {
  getUsers,
  addUser,
  alreadyCreated as getAlready,
} from "@/lib/signUpUser";

const handler = async (req, res) => {
  if (!req.method === "POST") {
    res.status(401).json({ message: "only use this api to post " });
    return;
  }
  const bodyInJson = JSON.parse(req.body);
  // const collection = await getUsersCollection();
  const alreadyCreated = await getAlready(bodyInJson.email);
  // const alreadyCreated = await collection.findOne({
  //   email: bodyInJson.email,
  // });
  if (alreadyCreated) {
    res.status(402).json({ message: "this email has already an account" });
    return;
  }
  console.log(bodyInJson);
  // let _id;
  // try {
  //   _id = await addUser(bodyInJson);
  // } catch (err) {
  //   res.status(402).json({ message: "couldn't add data to mongodb" });
  //   return;
  // }
  try {
    await addUser(bodyInJson);
  } catch (err) {
    res.status(402).json({ message: "create account failed" });
  }
  res.status(201).json({
    message: "Account has been created! ",
    body: bodyInJson,
  });
};
export default handler;
