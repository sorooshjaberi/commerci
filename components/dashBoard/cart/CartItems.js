import ProductItem from "@/components/products/productItems/ProductItem";
import React from "react";
import { Unstable_Grid2 as Grid} from "@mui/material";
const CartItems = ({ data }) => {
  const items = data.map((itemData) => (
    <Grid xs={6}>
      <ProductItem key={itemData.id} data={itemData} isCart />
    </Grid>
  ));
  return <>{items}</>;
};

export default CartItems;
