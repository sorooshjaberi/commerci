import React from 'react'
import Products from '@/components/products/products';
const HomePage = (props) => {
  console.log(props.products);
  return (
    <div>HomePage</div>
  )
}

export default HomePage
export async function getStaticProps(){
  const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
  const json = await response.json();
  return {
    props:{
      products:json
    }
  }
}
