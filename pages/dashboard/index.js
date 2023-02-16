import DashboadrLayout from "@/components/dashBoard/mainLayout/DashboardLayout";
 
import {
  getUserData,
  getProductById,
  getCartItemById,
} from "@/lib/store-api-utils";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/lib/api/mongo-utils";
const DashBoard = ({ user }) => {
  return <p>...</p>
  return <DashboadrLayout user={user} />;
};

export default DashBoard;
export async function getServerSideProps({ req, res }) {
  const loginData = await getServerSession(req,res)
  if (loginData) {
    const user = await getUserByEmail(loginData.user.email);
    const userData = user;
    const savedProductsData = await getProductById(userData.saved);
    const boughtProductsData = userData.history;
    const cartItemsData = await getCartItemById(userData.cart);

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
