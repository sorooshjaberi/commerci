import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import ProductSlider from "./ProductSlider";
import { Typography,Paper } from "@mui/material";

const ProductDetail = ({ productDetail }) => {
  console.log(productDetail);
  return (
    <div id="aaaaaaaaa">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          p:2
        }}
      >
        <Paper>
        <ProductSlider productDetail={productDetail} />
        </Paper>
        <Paper sx={{
          bgcolor:'#fafafa',
          height:'80vh',
          ml:2
          ,
          width:'100%'
,p:2
        }} >
            <Typography>
              {productDetail.title}
            </Typography>
            <Typography>
              {productDetail.description}
            </Typography>
            <Typography>
              {productDetail.price}
            </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default ProductDetail;
