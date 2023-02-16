import Paper from "@mui/material/Paper";
import * as Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ProductItem from "../products/productItems/ProductItem";

const CategoryLayout = ({ data }) => {
  return (
    <>
      <Typography
        component={"h1"}
        mx={"auto"}
        textAlign="center"
        variant="h1"
        fontWeight={"bold"}
      >
        {data[0].category.name}
      </Typography>
      <Paper sx={{ m: 2, p: 2 }}>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid key={item.id} xs={4}>
              <ProductItem data={item} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default CategoryLayout;
