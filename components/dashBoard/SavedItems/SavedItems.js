import React from "react";
import ProductItem from "../../products/productItems/ProductItem";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
const SavedItems = ({ savedItems }) => {
  const products = savedItems.map((savedItem) => {
    return (
      <Grid xs={3} key={savedItem.id}>
        <ProductItem data={savedItem} />
      </Grid>
    );
  });

  return <Grid container spacing='10rem' >{products}</Grid>;
};

export default SavedItems;