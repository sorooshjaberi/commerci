import { Box } from "@mui/material";
import CartButtons from "./CartButtons";
import SaveButtons from "./SaveButtons";

const ProductItemButtons = ({ data }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0rem",
        right: "0rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CartButtons data={data} />
      <SaveButtons data={data} />
    </Box>
  );
};

export default ProductItemButtons;
