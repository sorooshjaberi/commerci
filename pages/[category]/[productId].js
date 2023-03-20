import { getProductsByCategory } from "@/lib/store-api-utils";
import ProductDetail from "@/components/products/ProductDetail";
import Spinner from "@/components/ui/Spinner";
const ProductItem = ({ productDetail }) => {
  console.log(productDetail);
  if (!productDetail) {
    return <Spinner />;
  }
  return (
    <div>
      <ProductDetail productDetail={productDetail} />
    </div>
  );
};

export default ProductItem;
export async function getStaticProps(context) {
  // const allData = await getProductsByCategory();

  const { params } = context;
  const { category, productId } = params;
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productId}`
  );
  const json = await res.json();
  // const productDetail = allData[category - 1]?.find((product) => {
  //   return product.id == productId;
  // });
  return {
    props: { productDetail: json },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
