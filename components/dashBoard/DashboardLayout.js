import { Stack } from "@mui/material";
import React from "react";
import TabDetails from "./TabDetails";
import UserData from "./UserData";
import SideBar from "./SideBar";
import TabPanel from "./TabPanel";
const DashboadrLayout = () => {
  
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
      <SideBar />
      <TabDetails />
    </Stack>
  );
};

export default DashboadrLayout;
