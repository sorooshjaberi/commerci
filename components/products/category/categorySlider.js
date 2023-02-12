import React from "react";
import CategoryData from "./CategoryData";
import CategoryItems from "./CategoryItems";

import Stack from "@mui/material/Stack";
const CategorySlider = ({ categoryItems: data,imageUrl }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        width: "80%",
        mx: "auto",
        overflowX: "scroll",
        bgcolor: "primary.light",
        height: "auto",
        p: 2,
      }}
    >
      <CategoryData data={data[1].category} imageUrl={imageUrl} />
      <CategoryItems data={data} />
    </Stack>
  );
};

export default CategorySlider;
