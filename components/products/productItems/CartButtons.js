import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "@/store/user";
import { Paper } from "@mui/material";
import Paper from '@mui/material/Paper'

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { uiAction } from "@/store/ui";

const CartButtons = ({ data, loginStatus }) => {
  const [isAdded, setIsAdded] = useState(false);
  const userStore = useSelector((store) => store.user.cart);
  const added = !!userStore.find((savedItem) => savedItem.id == data.id);
  useEffect(() => {
    if (added) {
      setIsAdded(true);
    }
  }, []);
  const dispatch = useDispatch();
  const addShoppingCartHandler = (e) => {
    if (!loginStatus) {
      dispatch(
        uiAction.changeAlert({
          type: "error",
          context: "signin to add products to cart",
        })
      );
      return;
    }
    e.stopPropagation();
    dispatch(userAction.setCartData(data));
    console.log(userStore);
    setIsAdded(true);
  };
  const removeShoppingCartHandler = (e) => {
    e.stopPropagation();

    dispatch(userAction.removeCartData(data.id));
    console.log(userStore);
    setIsAdded(false);
  };

  const controllersStyle = {
    p: 1,
    opacity: ".7",
    m: "1rem",
    cursor: "pointer",
    mb: ".6rem",
  };
  const cartController = !isAdded ? (
    <Paper
      onClick={addShoppingCartHandler}
      sx={{ ...controllersStyle, bgcolor: "grey.400" }}
    >
      <AddShoppingCartIcon />
    </Paper>
  ) : (
    <Paper
      onClick={removeShoppingCartHandler}
      sx={{ ...controllersStyle, bgcolor: "success.light" }}
    >
      <RemoveShoppingCartIcon />
    </Paper>
  );
  return <>{cartController}</>;
};

export default CartButtons;
