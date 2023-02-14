import React from "react";
import SignButton from "./SignButton";
import Paper from "@mui/material/paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { uiAction } from "@/store/ui";
import { useDispatch } from "react-redux";

const UserButtons = () => {
  const LoggedIn = true;
  const dispatch = useDispatch();
  const openCart = () => {
    dispatch(uiAction.changeTab(0))
  }
  const enteringButton = LoggedIn ? (
    <Link href={"/dashboard"}>
      <Paper sx={{ bgcolor: "transparent", p: 1, cursor: "pointer" }}>
        <PersonIcon sx={{ color: "white", fontSize: "5rem" }} />
      </Paper>
    </Link>
  ) : (
    <Link href={"/sign-in"}>
      {" "}
      <SignButton />
    </Link>
  );
  return (
    <Stack
      direction={"row"}
      spacing={2}
      justifyContent="end"
      sx={{
        width: "30%",
      }}
    >
      {enteringButton}

      <Divider
        orientation="vertical"
        sx={{ width: "auto", height: "auto", borderColor: "white" }}
      />
      <Link href={"dashboard"}>
        <Paper
          onClick={openCart}
          sx={{ bgcolor: "transparent", p: 1, cursor: "pointer" }}
        >
          <ShoppingCartIcon sx={{ color: "white", fontSize: "5rem" }} />
        </Paper>
      </Link>
    </Stack>
  );
};

export default UserButtons;
