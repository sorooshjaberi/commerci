import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";
import Link from "next/link";
const ProductItem = ({ data }) => {
  return (
    <Link href={`/${data.category.id}/${data.id}`}>
      <Card
        sx={{
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
        <Box
          sx={{
            borderRadius: "8rem",
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
              height: "16rem",
              width: "16rem",
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
          <Typography variant="h5" textAlign={"center"} mb={3}>
            {data.title}
          </Typography>
          <Typography variant="h6" mb={1}>
            ${data.price}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ProductItem;
