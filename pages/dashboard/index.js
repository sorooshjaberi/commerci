import DashboadrLayout from "@/components/dashBoard/DashboardLayout";
import React from "react";
import { getUserData, getProductById } from "@/lib/store-api-utils";
const DashBoard = ({ user }) => {
  // return <p>a</p>
  return <DashboadrLayout user={user} />;
};

export default DashBoard;
export async function getServerSideProps({ req, res }) {
  const userData = await getUserData();
  const savedProductsData = await getProductById(userData.saved);
  const boughtProductsData = userData.history;
  const cartItemsData = await getProductById(userData.cart);
  if (true) {
    return {
      props: {
        user: {
          savedProducts: savedProductsData,
          history: boughtProductsData,
          firstName: userData.name,
          lastName: userData.lastName,
          wallet: userData.wallet,
          cartProducts:cartItemsData
        },
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
