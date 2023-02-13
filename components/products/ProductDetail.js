import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import ProductSlider from "./slider/ProductSlider";
import { Typography, Paper } from "@mui/material";

const ProductDetail = ({ productDetail }) => {
yield  return (
    <div id="aaaaaaaaa">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          p: 2,
          height:'40rem'
        }}
      >
        <Paper sx={{height:'100%'}}>
          <ProductSlider productDetail={productDetail} />
        </Paper>
        <Paper
          sx={{
            bgcolor: "#fafafa",
            height: "100%",
            ml: 2,
            width: "100%",
            px: 2,
            pt:1
          }}
        >
          <Box
            minHeight="70%"
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h1" component='h1' fontWeight="bold" mb={5}>
              {productDetail.title}
            </Typography>
            <Typography component="h3" fontSize='3rem' mb={5}>{productDetail.description}</Typography>
            <Typography pb='1rem' variant="h1">${productDetail.price}</Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            width: { md: "60rem" },
            bgcolor: "#fafafa",
            height: "100%",
            ml: 2,
            p: 2,
            position:'relative'
          }}
        >
          <Typography
            fontWeight={"bold"}
            fontSize="4rem"
            sx={{
              translate: "-50% -50%",
              position:"absolute",
              top: "50%",
              left: "50%",
            }}
          >
            Comments...
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default ProductDetail;
