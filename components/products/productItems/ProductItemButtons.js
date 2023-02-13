import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "@/store/user";
import { Paper, Card, Box } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import CartButtons from "./CartButtons";
import SaveButtons from "./SaveButtons";

const ProductItemButtons = ({ data }) => {
  //   const [isAdded, setIsAdded] = useState(false);
  //   const userStore = useSelector((store) => store.user.cart);
  //   const dispatch = useDispatch();
  //   const addShoppingCartHandler = (e) => {
  //     e.stopPropagation();
  //     dispatch(userAction.setCartData(data));
  //     console.log(userStore);
  //     setIsAdded(true);
  //   };
  //   const removeShoppingCartHandler = (e) => {
  //     e.stopPropagation();

  //     dispatch(userAction.removeCartData(data.id));
  //     console.log(userStore);
  //     setIsAdded(false);
  //   };

  //   const controllersStyle = {

  //     p: 1,
  //     opacity: ".7",
  //     m: "1rem",
  //     cursor: "pointer",
  //     mb:'.6rem'
  //   };
  //   const cartController = !isAdded ? (
  //     <Paper
  //       onClick={addShoppingCartHandler}
  //       sx={{ ...controllersStyle, bgcolor: "primary.light" }}
  //     >
  //       <AddShoppingCartIcon />
  //     </Paper>
  //   ) : (
  //     <Paper
  //       onClick={removeShoppingCartHandler}
  //       sx={{ ...controllersStyle, bgcolor: "error.light" }}
  //     >
  //       <RemoveShoppingCartIcon />
  //     </Paper>
  //   );
  const saveButton = (
    <Paper
      sx={{
        p: 1,
        opacity: ".7",
        m: "1rem",
        cursor: "pointer",
        backgroundColor: "success.light",
      }}
    >
      <BookmarkAddIcon />
    </Paper>
  );
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
      <SaveButtons data ={data}/>
    </Box>
  );
};

export default ProductItemButtons;
