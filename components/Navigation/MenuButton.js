import { Menu, Close } from "@mui/icons-material";
const MenuButton = ({ toggleSideMenu, isOpen }) => {
  return (
    <div
      onClick={toggleSideMenu}
      style={{
        fontSize: "5rem",
        zIndex:"11"
      }}
    >
      {isOpen ? <Close fontSize="5rem" /> : <Menu fontSize="5rem" />}
    </div>
  );
};
export default MenuButton;
