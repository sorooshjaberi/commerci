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
  const toggleSideMenu =() => { setIsMenuOpen(perv=>!perv) }
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
      {isMenuOpen && <Menu toggleSideMenu={toggleSideMenu} />}
      {!isMedium && <MenuButton toggleSideMenu={toggleSideMenu} isOpen = {isMenuOpen}/>}
    </AppBar>
  );
};

export default NavBar;
