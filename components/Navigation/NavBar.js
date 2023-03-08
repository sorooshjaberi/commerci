import AppBar from "@mui/material/AppBar";
import UserButtons from "./UserPart";
import NavigationPart from "./NavigationPart";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
const NavBar = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false)
  const isMedium = useMediaQuery("(min-width:900px)")
  const appBarStyles = {
    backgroundColor: "#111",
    height: "9rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    px: "2rem",
    py: 1,
    justifyContent: "space-between",
  };
  return (
    <AppBar sx={appBarStyles}>
      <NavigationPart />
      {isMedium && <UserButtons />}
      {isMenuOpen && <Menu isOpen={isMenuOpen}/>}
      {!isMedium && <MenuButton toggleSideMenu={() => { setIsMenuOpen(perv=>!perv) }} isOpen = {isMenuOpen}/>}
    </AppBar>
  );
};

export default NavBar;
