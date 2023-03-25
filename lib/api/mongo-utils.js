import { MongoClient } from "mongodb";
let client;
// try{
//   MongoClient.connect(
//     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gqmm34o.mongodb.net/?retryWrites=true&w=majority`
//   )
// }catch(err){
// console.log('err ',err);
// }
export const dbConnect = async () => {
  client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gqmm34o.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.`
  );
  return client;
};

export const dbClose = async () => {
  client?.close();
};

export const getUsersCollection = async () => {
  client = await dbConnect();
  const db = client.db("commerci");
  const collection = db.collection("users");
  return collection;
};

export const addUser = async (bodyInJson) => {
  const collection = await getUsersCollection();
  const userData = {
    ...bodyInJson,
    wallet: 0,
    saved: [],
    history: [],
    cart: [],
  };
  const res = await collection.insertOne(userData);
  await dbClose();
  if (!res.insertedId) throw new Error("failed");

  return res.insertedId;
};
export const getUserByEmail = async (email) => {
try{
  const collection = await getUsersCollection();
  const user = await collection.findOne({ email: email });
  await dbClose();
  return user;
}catch(err){
console.log('erica' , err);
}
};
