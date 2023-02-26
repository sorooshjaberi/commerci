import AppBar from "@mui/material/AppBar";
import UserButtons from "./UserPart";
import NavigationPart from "./NavigationPart";
const NavBar = () => {
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
      <UserButtons />
    </AppBar>
  );
};

export default NavBar;
