import ProductItem from "@/components/products/productItems/ProductItem";
 import Unstable_Grid2 from "@mui/material/Unstable_Grid2";
const CartItems = ({ data }) => {
  console.log('carts data ' ,data);
  const items = data.map((itemData) => (
    <Unstable_Grid2 key={itemData.title} xs={6}>
      <ProductItem  data={itemData} isCart />
    </Unstable_Grid2>
  ));
  return <>{items}</>;
};

export default CartItems;
