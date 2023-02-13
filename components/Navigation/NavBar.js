import React from "react";
import { AppBar, Paper, Button, Typography } from "@mui/material";
import Image from "next/image";
import { Box, Stack } from "@mui/system";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";
import Link from "next/link";
const NavBar = () => {
  const paperStyle = {
    height: "6rem",
    minWidth: "9rem",
    borderRadius: 4,
    bgcolor: "transparent",
    // border: "1px solid white",
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "#444",
        height: "9rem",
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "row",
        px: "2rem",
        py: 1,
      }}
    >
      {/* group 1 */}
      <Box
        sx={{
          // backgroundColor: "#444",
          // height: "8rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          width: "60%",
          justifyContent: "",
          // px: "2rem",
        }}
      >
        {/* logo */}
        <Link href={'/'}>
          <Box sx={{ height: "6rem", width: "9rem" }}>
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              src={"/Logo.png"}
              width={300}
              height={200}
            />
          </Box>
        </Link>
        {/* searchBar */}
        <Box
          display={"flex"}
          alignItems="flex-end"
          width={"70%"}
          ml="3rem"
          sx={{
            "& label": {
              color: "#fff",
              fontSize: "2rem",
            },
            "& div::before": {
              borderBottomColor: "#fff ",
            },
            "& input": {
              fontSize: "2rem",
              color: "#fff",
              borderColor: "#fff",
            },
            "& input:focus ": {
              // display:'none'
            },
          }}
        >
          <SearchIcon
            sx={{
              color: "action.active",
              mr: 1,
              my: 0.5,
              fontSize: 40,
              color: "##ffffff59",
              opacity: ".5",
              scale: "-1 1",
              position: "relative",
            }}
          />
          <TextField fullWidth label="Search" variant="filled" />
        </Box>
      </Box>
      {/* user Box */}
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent="end"
        sx={{
          width: "30%",
        }}
      >
        <Paper
          sx={{
            ...paperStyle,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4.5,
          }}
        >
          <Stack direction={"row"} spacing={2}>
            <Typography color={"white"} variant="h4">
              SignUp
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ height: "auto", width: "auto", borderColor: "white" }}
            />
            <Typography color={"white"} variant="h4">
              SignIn
            </Typography>
          </Stack>
        </Paper>
        <Divider
          orientation="vertical"
          sx={{ width: "auto", height: "auto", borderColor: "white" }}
        />
        <Paper sx={{ bgcolor: "transparent", p: 1, cursor: "pointer" }}>
          <ShoppingCartIcon sx={{ color: "white", fontSize: "5rem" }} />
        </Paper>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
