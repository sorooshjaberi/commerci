import Box from "@mui/material/Box";
import CategorySlider from "./category/categorySlider";
const AllProducts = ({ products }) => {
  return (
    <Box
      sx={{
        bgcolor: "#111",
        pt: 1,
        width: "100vw",
        px: 2,
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

export default AllProducts;
