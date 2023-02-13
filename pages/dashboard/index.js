import DashboadrLayout from "@/components/dashBoard/DashboardLayout";
import React from "react";
import { getUserData, getProductById } from "@/lib/store-api-utils";
const DashBoard = () => {
  return <DashboadrLayout />;
};

export default DashBoard;
export async function getServerSideProps() {
  const userData = await getUserData();
  let savedProductsData = userData.saved;
  savedProductsData = await getProductById(...savedProductsData);
  const boughtProductsData = userData.history;
  console.log(savedProductsData);
  if (true) {
    return {
      props: {
        // savedProducts: savedProductsData,
        // history: boughtProductsData,
        // firstName: userData.name,
        // lastName: userData.lastName,
        // wallet: userData.wallet,
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
