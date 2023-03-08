import { Box, List, ListItem } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { useState } from "react";
import Logout from "../dashBoard/mainLayout/Logout";
const Menu = ({toggleSideMenu}) => {
  const { data } = useSession();
  const loggedInItems = [{ text: "dashboard", link: "/dashboard" }];
  const notLoggedInItems = [{ text: "login", link: "/sign-in" }];
  const menuItems = data ? loggedInItems : notLoggedInItems;
  const listItemStyle = {
    textAlign: "center",
    borderBottom: "2px solid #fff",
    display: "block",
    fontSize: "2rem",
    "&:hover": {
      color: " rgba(103,83,220,1)",
      borderBottom: "2px solid  rgba(103,83,220,1)",
    },
  };
  return (
    <>
      <div
        id="overlay"
        style={{
          backgroundColor: "transparent",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: "10",
          top: "0",
          left: "0",
        }}
        onClick={toggleSideMenu}
      >
        <Box
          sx={{
            bgcolor: "#0b0b0bc7",
            height: "100%",
            backdropFilter: "blur(5px)",
            width: "70%",
            position: "absolute",
            right: "0",
            transition: "all .5s ease-in",
          }}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              margin: "4rem auto",
              height: "100%",
            }}
          >
            <List
              sx={{
                height: "100%",
                p: "2rem",
              }}
            >
              {menuItems.map((item) => {
                return (
                  <Link href={item.link}>
                    <ListItem sx={listItemStyle}>{item.text}</ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
          <Box>
            {/* buttons */}
            menuuuuuuuuuuuuuuu
            {data && <Logout/>}
          </Box>
        </Box>
      </div>
    </>
  );
};
export default Menu;
