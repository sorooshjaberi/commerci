import { Paper, Stack } from "@mui/material";
import React from "react";
import Accountant from "./Accountant";
import CartItems from "./CartItems";

const CartLayout = ({ data }) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        "& > *": {
          bgcolor: "#fafafa",
        },
      }}
    >
      <Paper>
        <CartItems data={data} />
      </Paper>
      <Paper>
        <Accountant />
      </Paper>
    </Stack>
  );
};

export default CartLayout;
