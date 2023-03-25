import Image from "next/image";
import Paper from "@mui/material/Paper";
import { SwiperSlide } from "swiper/react";

const Slides = ({ productDetail }) => {
  const images = productDetail.images?.map((imageUrl) => {
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
        quality={50}
        src={imageUrl}
      />
    );
  });
  const imagesPreveiw = images?.map((image) => {
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
  let imageSlides = images.map((image) => {
    return <SwiperSlide key={Math.random()}>{image}</SwiperSlide>;
  });
  return {
    preveiw: imagesPreveiw,
    slides: imageSlides,
  };
};

export default Slides;
