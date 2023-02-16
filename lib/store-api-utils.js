import fs from "fs";
import path from "path";
export async function getProductsByCategory() {
  // const responses = [];
  // for (let i = 1; i <= 5; i++) {
  //   const response = await fetch(
  //     `https://api.escuelajs.co/api/v1/categories/${i}/products`
  //   );
  //   responses.push(response);
  // }
  // const newResponses = responses.map((res) => {
  //   return res.json().then((res) => res);
  // });

  // const results = await Promise.all(newResponses);
  // return results
  const filePath = path.join(process.cwd(), "database.json");
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

export function getOneCategoryProducts(index) {
  const filePath = path.join(process.cwd(), `databases/cat${index}.json`);
  if (!fs.existsSync(filePath)) return;
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

export async function getUserData() {
  const filePath = path.join(process.cwd(), "userData.json");
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}
export async function getAllProducts() {
  const filePath = path.join(process.cwd(), "allProducts.json");
  const data = fs.readFileSync(filePath);
  // const data = await fetch("https://api.escuelajs.co/api/v1/products");
  return JSON.parse(data);
}
export async function getProductById(ids) {
  const allProducts = await getAllProducts();
  const products = ids.map((id) => {
    return allProducts.find((product) => {
      return product.id == id;
    });
  });

  return products;
}
export async function getCartItemById(cartObjs) {
  const allProducts = await getAllProducts();
  const products = cartObjs.map((obj) => {
    const cartProduct = allProducts.find((product) => {
      return product.id == obj.id;
    });
    return { ...cartProduct, amount: obj.amount };
  });

  return products;
}
