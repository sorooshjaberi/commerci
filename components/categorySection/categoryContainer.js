import { Box } from "@mui/material";
import React from "react";
import CategoryItem from "./categoryItem";

const CategoryContainer = ({ categories }) => {
  const items = categories.map((category) => (
    <CategoryItem key={category.id} data={category} />
  ));
  return (
    <Box
      p={2}
      mt={2}
      height={"25rem"}
      bgcolor="primary.main"
      display={"flex"}
      flexDirection="row"
      alignItems={"center"}
      justifyContent="space-evenly"
    >
      {items}
    </Box>
  );
};

export default CategoryContainer;
