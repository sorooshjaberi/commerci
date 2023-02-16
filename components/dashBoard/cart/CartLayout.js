import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Accountant from "./Accountant";
import CartItems from "./CartItems";
import Unstable_Grid2 from '@mui/material/Unstable_Grid2'

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
        <Unstable_Grid2 overflow={"scroll"} container spacing={2}>
          <CartItems data={data} />
        </Unstable_Grid2>
      </Paper>
      <Paper sx={{ bgcolor: "#fafafa", flex: 1, height: "100%" }}>
        <Accountant data={data} />
      </Paper>
    </Stack>
  );
};

export default CartLayout;
