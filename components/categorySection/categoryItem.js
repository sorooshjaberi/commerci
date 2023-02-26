import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItem = ({ data }) => {
  return (
    <Link href={`${data.id}`}>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Paper
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "200px",
            overflow: "hidden",
            boxShadow:
              "rgb(255 255 255 / 50%) 0px 0px 50px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", marginBottom: "2rem" }}
            width={400}
            height={400}
            src={data.image}
            alt="category"
          />
        </Paper>
        <Typography sx={{
          background:'linear-gradient(90deg, rgba(7,192,234,1) 0%, rgba(103,83,220,1) 35%, rgba(223,66,201,1) 67%, rgba(255,0,130,1) 100%)',
          WebkitTextFillColor:'transparent' , 
          WebkitBackgroundClip:'text',
          fontFamily:'fantasy',
          letterSpacing:'1px'
        }} variant="h4" mt={2} color={"white"}>
          {data.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default CategoryItem;
