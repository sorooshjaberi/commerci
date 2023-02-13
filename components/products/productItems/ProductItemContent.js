import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import React from "react";
const ProductItemContent = ({ data }) => {
  return (
    <Link href={`/${data.category.id}/${data.id}`}>
      <Box
        sx={{
          borderRadius: "8rem",
          overflow: "hidden",
          boxShadow: 1,mb:4
        }}
      >
        <Image
          id="imagee"
          className="image"
          alt={data.title}
          style={{
            transition: "all ease .5s",
            height: "16rem",
            width: "16rem",
            translate: "0 3px",
            scale: "1.2",
          }}
          src={data.images[0]}
          width={500}
          height={500}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" textAlign={"center"} mb={3}>
          {data.title}
        </Typography>
        <Typography variant="h6" mb={1}>
          ${data.price}
        </Typography>
      </Box>
    </Link>
  );
};

export default ProductItemContent;
