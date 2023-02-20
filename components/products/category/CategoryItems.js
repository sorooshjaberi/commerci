 
import ProductItem from "../productItems/ProductItem";
import Stack from "@mui/material/Stack";

const CategoryItems = ({ data }) => {
  const shortData = data.slice(0,6)
  const items = shortData.map((item) => {
    return <ProductItem key={item.id} data={item} />;
  });
  return (
    <Stack
    spacing={1}
      direction="row"
      sx={{
      }}
    >
      {items}
    </Stack>
  );
};

export default CategoryItems;
