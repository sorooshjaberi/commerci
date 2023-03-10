import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/abeezee"

const ProductItemContent = ({ data }) => {
  return (
    <Link href={`/${data.category.id}/${data.id}`}>
      <Box
        sx={{
          borderRadius: "8rem",
          overflow: "hidden",
          boxShadow: 1,
          mb: 4,
        }}
      >
        <Image
          id="imagee"
          className="image"
          alt={data.title}
          quality={20}
          style={{
            transition: "all ease .5s",
            height: "16rem",
            width: "16rem",
            translate: "0 3px",
            scale: "1.2",
          }}
          src={data.images[0]}
          width={300}
          height={300}
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
        <Typography variant="h5" textAlign={"center"} mb={1.5} fontFamily='ABeeZee'>
          {data.title}
        </Typography>
        <Typography variant="h5" fontWeight={'bold'} mb={1}>
          ${data.price}
        </Typography>
      </Box>
    </Link>
  );
};

export default ProductItemContent;
