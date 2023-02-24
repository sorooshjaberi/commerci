import "swiper/css";
import Box from "@mui/material/Box";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper } from "swiper/react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Slides from "./slides";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@mui/material";

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
        cssMode={true}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        pagination={true}
        // mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        loop={true}
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
      <Box sx={{ mt: 1 }}>
        <Button className="prev">
          <ArrowBack />
        </Button>
        <Button className="next">
          <ArrowForward />
        </Button>
      </Box>
    </Box>
  );
};

export default ProductSlider;
