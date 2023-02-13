import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const CategoryData = ({ data, imageUrl }) => {

  return (
    <Box
      sx={{
        width: "12.8rem",
        height: "12.8rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        marginX: 3,
      }}
    >
      <Typography
        color="primary.contrastText"
        textAlign={"center"}
        variant="h4"
      >
        {data.name}
      </Typography>

      <Box
        sx={{
          my: 2,
        }}
      >
        <Image
          style={{
            width: "12.8rem",
            height: "12.8rem",
          }}
          alt={data.name}
          src={imageUrl || data.image}
          width={500}
          height={500}
        />
      </Box>

      <Typography
        sx={{
          "&:hover": {
            color: "white",
          },
        }}
        color="grey.300"
        textAlign={"center"}
        variant="h5"
      >
        <Link href={"/"}>See more &rArr;</Link>
      </Typography>
    </Box>
  );
};

export default CategoryData;
