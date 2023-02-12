import Box from "@mui/material/Box";
import React from "react";
import CategorySlider from "./category/categorySlider";
const Products = ({ products }) => {
  return (
    <Box
      sx={{
        bgcolor: "grey.800",
        pt: 5,
        width:'100vw',px:2
      }}
    >
      <CategorySlider categoryItems={products[0]} imageUrl="/clothes.webp" />
      <CategorySlider
        categoryItems={products[1]}
        imageUrl="/electronics.webp"
      />
      <CategorySlider categoryItems={products[2]} imageUrl="/home.webp" />
      <CategorySlider categoryItems={products[3]} imageUrl="/clothes.webp" />
      <CategorySlider categoryItems={products[4]} imageUrl="/others.webp" />
    </Box>
  );
};

export default Products;
