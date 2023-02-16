import { Box, Button, Paper, Stack, Typography } from "@mui/material";
 
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { userAction } from "@/store/user";
const ProductAmountControllers = ({ data }) => {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(userAction.cartIncrement(data.id));
  };
  const subHandler = () => {
    dispatch(userAction.cartDecrement(data.id));
  };
  const cartStore = useSelector((store) => store.user.cart);
  const amount = cartStore.find((item) => item.id == data.id).amount;
  console.log(data.amount);
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{ translate: "0 -0rem", mb: "1rem" }}
    >
      <Button onClick={subHandler}>
        <RemoveIcon />
      </Button>
      <Paper
        sx={{
          width: "4rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">{amount}</Typography>
      </Paper>
      <Button onClick={addHandler}>
        <AddIcon />
      </Button>
    </Stack>
  );
};

export default ProductAmountControllers;
