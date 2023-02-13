import React from "react";
import Logo from "./Logo";
import Box from '@mui/material/Box'
import SearchBar from "./SearchBar";
const NavigationPart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "60%",
        justifyContent: "",
      }}
    >
      <Logo />
      <SearchBar />
    </Box>
  );
};

export default NavigationPart;
