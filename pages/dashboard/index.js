import DashboadrLayout from "@/components/dashBoard/mainLayout/DashboardLayout";

// import {
//   getUserData,
//   getProductById,
//   getCartItemById,
// } from "@/lib/store-api-utils";
// import { getSession } from "next-auth/react";
// import { getServerSession } from "next-auth";
// import { getUserByEmail } from "@/lib/api/mongo-utils";
const DashBoard = () => {
  return <DashboadrLayout  />;
};

export default DashBoard;
// export async function getServerSideProps({ req, res }) {
//   // const cookie =req.getCookie('next-auth.session-token')
//   // const loginData = await getServerSession(req, res);
//   // const userData = await getUserByEmail(loginData.user.email);
//   // console.log("userData:", userData);
//   // const savedProductsData = await getProductById(userData.saved);
//   // const boughtProductsData = userData.history;
//   // const cartItemsData = await getCartItemById(userData.cart);

//   return {
//     props: {
//       // user: {
//       //   savedProducts: savedProductsData,
//       //   history: boughtProductsData,
//       //   firstName: userData.name,
//       //   lastName: userData.lastName,
//       //   wallet: userData.wallet,
//       //   cartProducts: [...cartItemsData],
//       // },
//       // user: {
//       //   ...userData,
//       //   _id: "",
//       // },
//     },
//   };
// }
