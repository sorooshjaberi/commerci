import CategoryContainer from "@/components/categorySection/categoryContainer";
import AllProducts from "@/components/products/allProducts";
import useSWR from "swr";
import { getProductsByCategory } from "@/lib/store-api-utils";
const fetchDatasByCat = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};
const HomePage = (props) => {
  const { data, isLoading } = useSWR(
    "/api/products/getProductsByCategory",
    fetchDatasByCat
  );
  console.log(data);
  return (
    <div id="home" style={{ width: "100vw" }}>
      <CategoryContainer categories={props.categories} />
      <AllProducts products={data} />
    </div>
  );
};

export default HomePage;
export async function getStaticProps(context) {
  const results = await getProductsByCategory();
  const categories = results.map((category) => category[0].category);
  return {
    props: {
      categories,
    },
  };
}
