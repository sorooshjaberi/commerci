 
import ProductItem from "../../products/productItems/ProductItem";
import { Unstable_Grid2 as Grid } from "@mui/material";
import Unstable_Grid2 from "@mui/material/Unstable_Grid2";
const SavedItems = ({ savedItems }) => {
  const products = savedItems.map((savedItem) => {
    return (
      <Unstable_Grid2 xs={3} key={savedItem.id}>
        <ProductItem data={savedItem} />
      </Unstable_Grid2>
    );
  });

  return <Grid container spacing='10rem' >{products}</Grid>;
};

export default SavedItems;
