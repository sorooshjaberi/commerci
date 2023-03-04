 
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "@fontsource/acme"

const CategoryData = ({ data, imageUrl }) => {
  return (
    <Box
      sx={{
        width: "12.8rem",
        height: "12.8rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        marginX: 3,
      }}
    >
      <Typography
        color="#07c0ea"
        textAlign={"center"}
        component="h4"
        fontFamily={'Acme'}  
        fontWeight='bold'      
        fontSize={'3rem'}
      >
        {data.name}
      </Typography>

      <Box
        sx={{
          my: 2,
        }}
      >
        <Image
          style={{
            width: "12.8rem",
            height: "12.8rem",
          }}
          alt={data.name}
          src={imageUrl || data.image}
          width={300}
          height={300}
          quality={50}
          />
          
      </Box>

      <Typography
        sx={{
          "&:hover": {
            color: "#07c0ea",
          },
        }}
        color="grey.300"
        textAlign={"center"}
        variant="h5"
        fontFamily={'ABeeZee'}
      >
        <Link href={`${data.id}`}>See more &rArr;</Link>
      </Typography>
    </Box>
  );
};

export default CategoryData;