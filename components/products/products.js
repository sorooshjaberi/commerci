import React from "react";
import CategorySlider from "./category/categorySlider";
const Products = ({ products }) => {
  return (
    <div>
      <div>
        <CategorySlider categoryItems={products[0]} imageUrl="/clothes.webp" />
      </div>
      <div>
        <CategorySlider categoryItems={products[1]} imageUrl='/electronics.webp'/>
      </div>
      <div>
        <CategorySlider categoryItems={products[2]} imageUrl='/home.webp'/>
      </div>
      <div>
        <CategorySlider categoryItems={products[3]} imageUrl='/clothes.webp'/>
      </div>
      <div>
        <CategorySlider categoryItems={products[4]} imageUrl='/others.webp'/>
      </div>
    </div>
  );
};

export default Products;
