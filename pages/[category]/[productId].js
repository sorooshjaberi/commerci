import React from "react";
import { getProductsByCategory } from "@/lib/store-api-utils";
import ProductDetail from "@/components/products/ProductDetail";
const ProductItem = ({ productDetail }) => {
  return <div style={{
  }}>
    <ProductDetail productDetail={productDetail} />
  </div>;
};

export default ProductItem;
export async function getStaticProps(context) {
  const allData = await getProductsByCategory();

  const { params } = context;
  const { category, productId } = params;

  const productDetail = allData[category - 1].find((product) => {
    return product.id == productId;
  });
  return {
    props: { productDetail },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
