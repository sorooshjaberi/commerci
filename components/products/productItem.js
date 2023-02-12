import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Image from "next/image";
const ProductItem = ({ data }) => {
  // useEffect(() => {
  //   // console.log(data.image);
  // }, []);
  return (
    <Card
      sx={{
        minWidth: "12rem",
        height: "15rem",
        p: 1,
      }}
    >
      {/* <Image src={data.image} /> */}
      {/* {JSON.stringify(data)} */}
    </Card>
  );
};

export default ProductItem;
