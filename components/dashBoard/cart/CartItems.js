import ProductItem from "@/components/products/productItems/ProductItem";
 import Unstable_Grid2 from "@mui/material/Unstable_Grid2";
const CartItems = ({ data }) => {
  const items = data.map((itemData) => (
    <Unstable_Grid2 xs={6}>
      <ProductItem key={itemData.id} data={itemData} isCart />
    </Unstable_Grid2>
  ));
  return <>{items}</>;
};

export default CartItems;
