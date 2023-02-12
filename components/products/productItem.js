import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";
const ProductItem = ({ data }) => {
  console.log(data);
  return (
    <Card
      sx={{
        minWidth: "14rem",
        height: "18rem",
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
      <Box
        sx={{
          borderRadius: "5rem",
          overflow: "hidden",
          boxShadow: 1,
        }}
      >
        <Image
          id="imagee"
          className="image"
          alt={data.title}
          style={{
            transition: "all ease .5s",
            height: "10rem",
            width: "10rem",
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
        <Typography variant="body1" textAlign={"center"} mb={3}>
          {data.title}
        </Typography>
        <Typography variant="body1" mb={1}>
          ${data.price}
        </Typography>
      </Box>
    </Card>
  );
};

export default ProductItem;
