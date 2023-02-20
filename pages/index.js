import CategoryContainer from "@/components/categorySection/categoryContainer";
import AllProducts from "@/components/products/allProducts";
import { getProductsByCategory } from "@/lib/store-api-utils";
const HomePage = (props) => {
  return (
    <div id="home" style={{ width: "100vw" }}>
      <CategoryContainer categories={props.categories} />
      <AllProducts products={props.products} />
    </div>
  );
};

export default HomePage;
export async function getStaticProps(context) {
  const results = await getProductsByCategory();
  const categories = results.map((category) => category[0].category);
  return {
    props: {
      products: results,
      categories,
    },
  };
}
