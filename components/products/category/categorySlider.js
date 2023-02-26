import CategoryData from "./CategoryData";
import CategoryItems from "./CategoryItems";

import Stack from "@mui/material/Stack";
const CategorySlider = ({ categoryItems: data, imageUrl }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        width: "100%",
        mx: "auto",
        overflowX: "scroll",
        bgcolor: "primary.light",
        height: "auto",
        p: 3,
        my: 1,
        borderRadius: 1,
        backgroundColor: "rgb(51,51,51)",
        background:
          "linear-gradient(90deg, rgba(57,10,57,1) 4%, rgba(203,28,141,0.8100490196078431) 40%, rgba(238,105,173,0.7988445378151261) 71%, rgba(203,28,141,0) 100%);",
      }}
    >
      <CategoryData data={data[1].category} imageUrl={imageUrl} />
      <CategoryItems data={data} />
    </Stack>
  );
};

export default CategorySlider;
