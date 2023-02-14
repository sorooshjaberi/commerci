import Card from "@mui/material/Card";
import ProductItemContent from "./ProductItemContent";
import ProductItemButtons from "./ProductItemButtons";
import ProductAmountControllers from "./ProductAmountControllers";
import { Divider } from "@mui/material";
const ProductItem = ({ data, isCart }) => {
  return (
    <Card
      sx={{
        position: "relative",
        minWidth: "22.4rem",
        height: isCart ? "34rem" : "28.8rem",
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        "&:hover": {
          "& #imagee": {
            scale: "1.5 !important",
            translate: "0 3px",
          },
        },
      }}
    >
      <ProductItemContent data={data} />
      <ProductItemButtons data={data} />
      {isCart && (
        <>
          <Divider sx={{ width: "100%", mb: "1rem", height: "auto" }} />
          <ProductAmountControllers data={data} />
        </>
      )}
    </Card>
  );
};

export default ProductItem;
