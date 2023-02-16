import  { useEffect } from "react"
import TabDetails from "../Tabs/TabDetails";
import SideBar from "./SideBar";
import { userAction } from "@/store/user";
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack'

const DashboadrLayout = ({ user }) => {
  const userStore = useSelector((store) => store.user);
  const { firstName, lastName, wallet, savedProducts, cartProducts, history } =
    user;
  const dispatch = useDispatch();
  useEffect(() => {
    if (userStore.firstTime) return;
    dispatch(userAction.setUserData({ firstName, lastName, wallet, history }));
    dispatch(userAction.createCartData(cartProducts));
    dispatch(userAction.createSavedData(savedProducts));
    dispatch(userAction.firstTimeDone());
  }, []);
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        width: "100%",
        height: "90vh",
        py: "5rem",
        px: "15rem",
      }}
    >
      <SideBar user={user} />
      <TabDetails user={user} />
    </Stack>
  );
};

export default DashboadrLayout;
