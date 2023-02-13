import React from "react";
import AppBar from "@mui/material/AppBar";
import UserButtons from "./UserPart";
import NavigationPart from "./NavigationPart";
const NavBar = () => {
  const appBarStyles = {
    backgroundColor: "#444",
    height: "9rem",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
    px: "2rem",
    py: 1,
    justifyContent:'space-between'
  };
  return (
    <AppBar sx={appBarStyles}>
      <NavigationPart />
      <UserButtons />
    </AppBar>
  );
};

export default NavBar;
