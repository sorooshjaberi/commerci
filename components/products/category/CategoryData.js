import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const CategoryData = ({ data , imageUrl }) => {
  console.log(data);

  return (
    <Box
      sx={{
        width: "8rem",
        height: "8rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        marginX:1
      }}
    >
      <Image
        style={{
          width: "8rem",
          height: "8rem",
        }}
        alt="a"
        src={imageUrl||data.image}
        width={500}
        height={500}
      />
      <caption>
        <Typography variant="body1">{data.name}</Typography>
      </caption>
    </Box>
  );
};

export default CategoryData;
