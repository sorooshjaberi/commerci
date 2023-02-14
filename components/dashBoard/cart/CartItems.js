import ProductItem from "@/components/products/productItems/ProductItem";
import React from "react";
import CartItem from "./CartItem";
const CartItems = ({ data }) => {
  console.log(data);
  const items = data.map((itemData) => <ProductItem data={itemData} />);
  return <>{items}</>;
};

export default CartItems;
