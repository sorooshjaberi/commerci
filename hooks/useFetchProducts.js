import { useState, memo, useEffect } from "react";
const defaultUrl = "https://api.escuelajs.co/api/v1/products/?categoryId=";
const datas = [];

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchCategory = async (url) => {
    const data = await (await fetch(url)).json();
    datas.push(data);
    return data;
  };

  const dataPusher = async (url) => {
    const data = await fetchCategory(defaultUrl + url);
    console.log(data);
    setProducts((prev) => [...prev, data]);
    const prevSessionStorage = sessionStorage.getItem("products") || "[]";
    const prevSessionStorageJs = JSON.parse(prevSessionStorage);
    prevSessionStorageJs.push(data);
    sessionStorage.setItem("products", JSON.stringify(prevSessionStorageJs));
  };

  useEffect(() => {
    const ss = sessionStorage.getItem("products");
    if (ss) {
      setProducts(JSON.parse(ss));
    } else {
      dataPusher("1");
      dataPusher("2");
      dataPusher("3");
      dataPusher("4");
      dataPusher("5");
      // Promise.all([
      //   fetchCategory(defaultUrl + "1"),
      //   fetchCategory(defaultUrl + "2"),
      //   fetchCategory(defaultUrl + "3"),
      //   fetchCategory(defaultUrl + "4"),
      //   fetchCategory(defaultUrl + "5"),
      // ]).then(() => {
      //   setProducts(datas);
      //   sessionStorage.setItem("products", JSON.stringify(datas));
      // });
    }
  }, []);

  return products;
};
export default useFetchProducts;
