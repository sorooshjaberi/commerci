import { getProductsByCategory } from "@/lib/store-api-utils";
export default async function handler(req, res) {
  const defaultUrl = "https://api.escuelajs.co/api/v1/products/?categoryId=";
  const datas = [];
  const fetchCategory = async (url) => {
    const data = await (await fetch(url)).json();
    datas.push(data);
  };
  const allFetched = Promise.all([
    fetchCategory(defaultUrl + "1"),
    fetchCategory(defaultUrl + "2"),
    fetchCategory(defaultUrl + "3"),
    fetchCategory(defaultUrl + "4"),
    fetchCategory(defaultUrl + "5"),
  ]);
  allFetched.then(() => {
    res.status(200).json(datas);
  });
}
