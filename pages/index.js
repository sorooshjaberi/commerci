 
// import Products from "@/components/products/Products";
import { getProductsByCategory } from "@/lib/store-api-utils";
const HomePage = (props) => {
  return (
    <div id='home' style={{width:'100vw'}} >
      {/* <Products products={props.products} /> */}
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
