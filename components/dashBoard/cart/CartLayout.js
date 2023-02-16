import { Paper, Stack } from "@mui/material";
 
import Accountant from "./Accountant";
import CartItems from "./CartItems";
import { Unstable_Grid2 as Grid2 } from "@mui/material";
const CartLayout = ({ data }) => {
  return (
    <Stack
      sx={{ height: "100%", overflow: "scroll" }}
      direction={"row"}
      spacing={2}
    >
      <Paper
        sx={{
          bgcolor: "#fafafa",
          width: "70%",
          p: 2,
          height: "100%",
          overflow: "scroll",
        }}
      >
        <Grid2 overflow={"scroll"} container spacing={2}>
          <CartItems data={data} />
        </Grid2>
      </Paper>
      <Paper sx={{ bgcolor: "#fafafa", flex: 1, height: "100%" }}>
        <Accountant data={data} />
      </Paper>
    </Stack>
  );
};

export default CartLayout;
