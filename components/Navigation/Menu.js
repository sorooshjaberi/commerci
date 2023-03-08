import { Box, List, ListItem } from "@mui/material";
import { useState } from "react";
const Menu = (isOpen) => {
  return (
    <>
      <div
        id="overlay"
        style={{
          backgroundColor: "#33333",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: "10",
          top: "0",
          left: "0",
        }}
      >
        <Box
          sx={{
            bgcolor: "#aaa",
            height: "100%",
            width: "80%",
            position: "absolute",
            right: "0",
            transition: "all .5s ease-in",
          }}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          Menu
        </Box>
      </div>
    </>
  );
};
export default Menu;
