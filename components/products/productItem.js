import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";
const ProductItem = ({ data }) => {
  console.log(data);
  return (
    <Card
      sx={{
        minWidth: "12rem",
        height: "15rem",
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "5rem",
          overflow: "hidden",
          boxShadow:1
        }}
      >
        <Image
          alt={data.title}
          style={{
            height: "10rem",
            width: "10rem",
            translate:'0 3px',
            scale:'1.2'
          }}
          src={data.images[0]}
          width={500}
          height={500}
        />
      </Box>
      <Box>
        <Typography variant="body1">
          {data.title}
        </Typography>
        <Typography variant="body1">
          {data.price}
        </Typography>
      </Box>
    </Card>
  );
};

export default ProductItem;
