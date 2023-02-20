import CategoryLayout from "@/components/singleCategory/CategoryLayout";
import Spinner from "@/components/ui/Spinner";
import { getOneCategoryProducts } from "@/lib/store-api-utils";
 

const CategoryPage = ({data}) => {
  if(!data)return <Spinner/>
  return <CategoryLayout data={data}/>;
};

export default CategoryPage;

export async function getStaticProps(context) {
  const catId = context.params.category;
  let productsData = getOneCategoryProducts(catId);
  return {
    props:{data:productsData}
  }
}
export async function getStaticPaths() {
//  const paths = Array(5).fill(0).map((e,i)=>i+1).map(e=>({params:{category:e.toString()}}))
  return {
    paths :[],
    fallback: false,
  };
}
