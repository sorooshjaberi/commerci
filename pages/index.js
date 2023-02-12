import React from "react";
import Products from "@/components/products/Products";
import { getProductsByCategory } from "@/lib/store-api-utils";
import Image from "next/image";
const HomePage = (props) => {
  // console.log(props.products);
  return (
    <div>
      <Products products={props.products} />
    </div>
  );
};

export default HomePage;
export async function getStaticProps(context) {
  const results = await getProductsByCategory();
  return {
    props: {
      products: results,
    },
  };
}
