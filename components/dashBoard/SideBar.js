import React from "react";
import UserData from "./UserData";
import Tabs from "./Tabs";
import { Divider, Paper, Stack } from "@mui/material";
const SideBar = () => {
  return (
    <Paper sx={{ p: 2, width: "25rem" }}>
      <Stack spacing={2} direction={"column"}>
        <UserData />
        <Divider />
        <Tabs />
      </Stack>
    </Paper>
  );
};

export default SideBar;
