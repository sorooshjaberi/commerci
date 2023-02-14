import { Paper, Stack } from "@mui/material";
import React from "react";
import Accountant from "./Accountant";
import CartItems from "./CartItems";
import { Unstable_Grid2 as Grid2 } from "@mui/material";
const CartLayout = ({ data }) => {
  return (
    <div id="aaaaaaaaaaaaaaaaa">
      <Stack sx={{height:'100%', }} direction={"row"} spacing={2}>
        <Paper sx={{ bgcolor: "#fafafa", width: "70%", overflow: "hidden" }}>
          <Grid2 container spacing={2}>
            <CartItems data={data} />
          </Grid2>
        </Paper>
        <Paper sx={{ bgcolor: "#fafafa" }}>
          <Accountant />
        </Paper>
      </Stack>
    </div>
  );
};

export default CartLayout;
