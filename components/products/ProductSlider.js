// import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ productDetail }) => {
  // const swiper = useSwiper();
  // const slide = useSwiperSlide();
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
  // const controllers = (
  //   <Box
  //     sx={{
  //       width: "10rem",
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "space-between",
  //       mt: "-3.5rem",
  //       zIndex: 10,
  //     }}
  //   >
  //     <Button

  //       sx={{ borderRadius: "2rem ", minWidth: "3rem ", minHeight: "3rem" ,zIndex:100}}
  //     >
  //       <ArrowBackIosIcon />
  //     </Button>
  //     <Button
  //       sx={{ borderRadius: "2rem ", minWidth: "3rem ", minHeight: "3rem" }}
  //       >
  //       <ArrowForwardIosIcon />
  //     </Button>
  //   </Box>
  // );
  
  return (
    <Box
      sx={{
        width: { md: "40rem" },
        height: { md: "100% " },
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: "#fafafa",
        p: 2,
      }}
    >
      <Swiper
        style={{ margin: "auto", width: "100%" }}
        spaceBetween={1}
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >

        {imageSlides}
      {/* {controllers} */}
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
