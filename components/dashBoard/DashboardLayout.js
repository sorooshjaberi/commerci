import { Stack } from "@mui/material";
import React from "react";
import TabDetails from "./TabDetails";
import UserData from "./UserData";
import SideBar from "./SideBar";
import TabPanel from "./TabPanel";
import { userAction } from "@/store/user";
import { useDispatch, useSelector } from "react-redux";
const DashboadrLayout = ({ user }) => {
  const dispatch = useDispatch();
  dispatch(userAction.setUserData(user));
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        width: "100%",
        minHeight: "90vh",
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
