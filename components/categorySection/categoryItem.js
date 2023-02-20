import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItem = ({ data }) => {
  console.log(data.name);

  return (
      <Link href={`${data.id}`}>
    <Box display={'flex'} flexDirection="column" alignItems={'center'} justifyContent="space-between">
        <Paper
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "200px",
            overflow: "hidden",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%"  , marginBottom:'2rem'}}
            width={400}
            height={400}
            src={data.image}
          />
        </Paper>
        <Typography variant="h6" mt={2} color={"white"}>
          {data.name}
        </Typography>
    </Box>
      </Link>
  );
};

export default CategoryItem;
