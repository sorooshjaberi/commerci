import { useEffect } from "react";
import TabDetails from "../Tabs/TabDetails";
import SideBar from "./SideBar";
import { userAction } from "@/store/user";
import { uiAction } from "@/store/ui";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import useSWR from "swr";

const fetcher = (url) => {
  return fetch(url).then((res) => res.json());
};
const DashboadrLayout = () => {
  const dispatch = useDispatch();
  const userStore = useSelector((store) => store.user);
  const { data: user, isLoading, error} = useSWR("api/products/getUserData", fetcher);
  console.log(`log  => file: DashboardLayout.js:17  => data:`, user);
  
  useEffect(() => {
   if (!userStore.firstTime.user) return;
   if(!user)return;
    //if it's the first time after loading :
    const { name: firstName, lastName, wallet, history } = user.body;
    dispatch(userAction.setUserData({ firstName, lastName, wallet, history }));
    dispatch(userAction.firstTimeDone('user'));
  }, [user]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    dispatch(uiAction.changeAlert({type:'error' , context:"loading your data failed"}))
    return;
  }
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        width: "100%",
        height: "80vh",
        py: "3rem",
        px: "15rem",
      }}
    >
      <SideBar />
      <TabDetails user={user}  />
    </Stack>
  );
};

export default DashboadrLayout;
