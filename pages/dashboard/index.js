import DashboadrLayout from "@/components/dashBoard/mainLayout/DashboardLayout";
import React from "react";
import {
  getUserData,
  getProductById,
  getCartItemById,
} from "@/lib/store-api-utils";
const DashBoard = ({ user }) => {
  return <DashboadrLayout user={user} />;
};

export default DashBoard;
export async function getServerSideProps({ req, res }) {
  const userData = await getUserData();
  const savedProductsData = await getProductById(userData.saved);
  const boughtProductsData = userData.history;
  const cartItemsData = await getCartItemById(userData.cart);
  if (false) {
    return {
      props: {
        user: {
          savedProducts: savedProductsData,
          history: boughtProductsData,
          firstName: userData.name,
          lastName: userData.lastName,
          wallet: userData.wallet,
          cartProducts: [...cartItemsData],
        },
      },
    };
  } else {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
}
