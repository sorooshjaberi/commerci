import Card from "@mui/material/Card";
import ProductItemContent from "./ProductItemContent";
import ProductItemButtons from "./ProductItemButtons";
const ProductItem = ({ data }) => {
  return (
    <Card
      sx={{
        position: "relative",
        minWidth: "22.4rem",
        height: "28.8rem",
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
    </Card>
  );
};

export default ProductItem;
