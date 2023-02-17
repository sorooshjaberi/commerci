import { getProductById } from "@/lib/store-api-utils";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/lib/api/mongo-utils";
import { getCartItemById } from "@/lib/store-api-utils";
const handler = async (req, res) => {
  const session = await getServerSession(req, res);
  const userData = await getUserByEmail(session.user.email);
  // const userDataObject = JSON.parse(userData)
  //these should be fetched when their tab is opened
  //useeffect and first time for each one
  // const savedProductsData = await getProductById(userData.saved);
  // const boughtProductsData = userDataObject.history;
  // const cartItemsData = await getCartItemById(userDataObject.cart);
  // getProductById(userData.saved);
  res.json({ message: "hey" ,body:(userData) });
};

export default handler;
// {
//   _id: new ObjectId("63ed4720bdcda678f0421ce1"),
//   email: 'xyz@abc.com',
//   password: '$2a$12$Y0ZdGgj0CLXU4aeI1jj1YuBk/ar/2QYYZfJqCmb7RusgdqlkHPec2',
//   name: 'soroosh',
//   lastName: 'jaberi',
//   wallet: 0,
//   saved: [],
//   history: [],
//   cart: []
// }
