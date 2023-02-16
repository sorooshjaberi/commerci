import Box from "@mui/material/Box";

import CartButtons from "./CartButtons";
import SaveButtons from "./SaveButtons";
import { useSession } from "next-auth/react";
const ProductItemButtons = ({ data: datas }) => {
  const { data, status } = useSession();
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
      <CartButtons loginStatus={!!data} data={datas} />
      <SaveButtons loginStatus={!!data} data={datas} />
    </Box>
  );
};

export default ProductItemButtons;
