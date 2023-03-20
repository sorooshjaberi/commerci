import { useState, memo, useEffect } from "react";
const defaultUrl = "https://api.escuelajs.co/api/v1/products/?categoryId=";
const fetchCategory = async (url) => {
  const data = await (await fetch(url)).json();
  datas.push(data);
};
const datas = [];

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Promise.all([
      fetchCategory(defaultUrl + "1"),
      fetchCategory(defaultUrl + "2"),
      fetchCategory(defaultUrl + "3"),
      fetchCategory(defaultUrl + "4"),
      fetchCategory(defaultUrl + "5"),
    ]).then(() => {
      setProducts(datas);
    });
  }, []);
  return products;
};
export default useFetchProducts;
