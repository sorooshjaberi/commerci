import Logo from "./Logo";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
const NavigationPart = ({ isSmall }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: {
          md: "60%",
          sm: "80%",
        },
        justifyContent: "",
      }}
    >
      <Logo />
      {!isSmall && <SearchBar />}
    </Box>
  );
};

export default NavigationPart;
