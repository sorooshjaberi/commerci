import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const ProductSlider = ({ productDetail }) => {
  const images = productDetail.images.map((imageUrl) => {
    console.log(imageUrl);
    return (
      <Image
        style={{
          width: "100%",
          height: "100%",
        }}
        key={productDetail.id}
        alt={productDetail.title}
        width={300}
        height={300}
        src={imageUrl}
      />
    );
  });
  const imagesPreveiw = images.map((image) => {
    return (
      <Paper
        key={Math.random()}
        sx={{
          borderRadius: 1,
          overflow: "hidden",
          width: "100px",
          height: "100px",
          mx: 1,
        }}
      >
        {image}
      </Paper>
    );
  });

  let imageSlides = productDetail.images.map((imageUrl) => {
    return (
      <SwiperSlide key={Math.random()}>
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          key={productDetail.id}
          alt={productDetail.title}
          width={800}
          height={800}
          src={imageUrl}
        />
      </SwiperSlide>
    );
  });
  imageSlides = images.map((image) => {
    return (
      <SwiperSlide
        style={{ width: "100%", height: "100%" }}
        key={Math.random()}
      >
        {image}
      </SwiperSlide>
    );
  });
  return (
    <Box
      sx={{
        width: { md: "40vw" },
        height: { md: "40vw" },
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        bgcolor: "#fafafa",
        p: 2,
      }}
    >
      <Swiper
        style={{ margin: "auto", width: "100%" }}
        spaceBetween={1}
        slidesPerView={1}
      >
        {imageSlides}
      </Swiper>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {imagesPreveiw}
      </Box>
    </Box>
  );
};

export default ProductSlider;
