import { MongoClient } from "mongodb";
let client;
export const dbConnect = async () => {
  client = await MongoClient.connect(
    "mongodb+srv://test:PvAtNbKsN7mLAxdE@cluster0.gqmm34o.mongodb.net/?retryWrites=true&w=majority"
  );
  return client;
};

export const dbClose = async () => {
  client.close();
};

export const getUsersCollection = async () => {
  client = await dbConnect();
  const db = client.db("commerci");
  const collection = db.collection("users");
  return collection;
};

export const addUser = async (bodyInJson) => {
  const collection = await getUsersCollection();
  const res = await collection.insertOne(bodyInJson);
  await dbClose();
  if (!res.insertedId) throw new Error("failed");

  return res.insertedId;
};