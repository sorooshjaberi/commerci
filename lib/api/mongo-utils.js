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

export const addUser = async (bodyInJson) => {
     client = await dbConnect();
    const db = client.db("commerci");
    const collection = db.collection("users");
    const res =await collection.insertOne(bodyInJson);
    await dbClose();
    if(!res.insertedId)throw new Error("failed")

    return res.insertedId
};


export const findUser =(email) => {

  
}