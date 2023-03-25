import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import React from "react";
import CategoryItem from "./categoryItem";

const CategoryContainer = ({ categories }) => {
  const items = categories.map((category,i) => (
    <Grid key={i} md={2} sm={4}>
      <CategoryItem key={category.id} data={category} />
    </Grid>
  ));
  return (
    <Grid
      container
      columnSpacing={1}
      rowSpacing={2}
      p={2}
      mt={0}
      minHeight={"25rem"}
      display={"flex"}
      flexDirection="row"
      alignItems={"center"}
      justifyContent="space-evenly"
      flexWrap={"wrap"}
      sx={{
        backgroundColor: "#111",
        background: "",
      }}
    >
      {items}
    </Grid>
  );
};

export default CategoryContainer;
