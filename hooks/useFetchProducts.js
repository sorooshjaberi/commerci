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
    const ss = sessionStorage.getItem("products");
    if (ss) {
      setProducts(JSON.parse(ss));
    } else {
      Promise.all([
        fetchCategory(defaultUrl + "1"),
        fetchCategory(defaultUrl + "2"),
        fetchCategory(defaultUrl + "3"),
        fetchCategory(defaultUrl + "4"),
        fetchCategory(defaultUrl + "5"),
      ]).then(() => {
        setProducts(datas);
        sessionStorage.setItem("products", JSON.stringify(datas));
      });
    }
  }, []);

  return products;
};
export default useFetchProducts;
