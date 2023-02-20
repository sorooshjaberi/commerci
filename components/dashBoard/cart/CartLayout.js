import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";
import Accountant from "./Accountant";
import CartItems from "./CartItems";
import Unstable_Grid2 from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userAction } from "@/store/user";
const CartLayout = ({ data, user }) => {
  const isCartFirstTime = useSelector((store) => store.user.firstTime.cart);
  const dispatch = useDispatch();
  const [cartsData, setCartsData] = useState([]);
  useEffect(() => {
    //if it's the first time cart is mounted, fetch products from the database
    if (isCartFirstTime) {
      fetch("api/products/getCartProducts", {
        method: "POST",
        body: JSON.stringify({ cart: user.body.cart }),
      })
        .then((res) => res.json())
        .then((res) => {
          setCartsData(res.cartItemsData);
          res && dispatch(userAction.createCartData(res.cartItemsData));
          dispatch(userAction.firstTimeDone("cart"));
        });
    }
    //else set the cart items regarding to redux
     else {
      setCartsData(data);
    }
  }, [data]);

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
          <CartItems data={cartsData} />
        </Unstable_Grid2>
      </Paper>
      <Paper sx={{ bgcolor: "#fafafa", flex: 1, height: "100%" }}>
        <Accountant data={data} />
      </Paper>
    </Stack>
  );
};

export default CartLayout;
