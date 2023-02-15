import { addUser, dbClose, dbConnect } from "@/lib/api/mongo-utils";

const handler = async (req, res) => {
  if (!req.method === "POST") {
    res.status(401).json({ message: "only use this api to post " });
    return;
  }
  const bodyInJson = JSON.parse(req.body);

  let _id;
  try {
    _id = await addUser(bodyInJson);
  } catch (err) {
    res.status(402).json({ message: "couldn't add data to mongodb" });
    return;
  }
  console.log(_id);
  res.status(201).json({
    message: "Account has been created! ",
    body: { ...bodyInJson, _id },
  });
};
export default handler;
