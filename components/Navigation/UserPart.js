import React from "react";
import SignButton from "./SignButton";
import Paper from '@mui/material/paper'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const UserButtons = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      justifyContent="end"
      sx={{
        width: "30%",
      }}
    >
      <SignButton />
      <Divider
        orientation="vertical"
        sx={{ width: "auto", height: "auto", borderColor: "white" }}
      />
      <Paper sx={{ bgcolor: "transparent", p: 1, cursor: "pointer" }}>
        <ShoppingCartIcon sx={{ color: "white", fontSize: "5rem" }} />
      </Paper>
    </Stack>
  );
};

export default UserButtons;
