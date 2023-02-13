import "swiper/css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import React from "react";
import { Swiper } from "swiper/react";
import Slides from "./slides";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = ({ productDetail }) => {
  const slides = Slides({ productDetail });

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
        // cssMode={true}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {slides.slides}
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
        {slides.preveiw}
      </Box>
    </Box>
  );
};

export default ProductSlider;
