import Box from "@mui/material/Box";
import Link from "next/link";
import { Typography } from "@mui/material";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Box
        sx={{
          height: "6rem",
          width: "11rem",
          mr: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            background:
              "linear-gradient(90deg, rgba(103,83,220,1) 35%, rgba(223,66,201,1) 67%, rgba(255,0,130,1) 100%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
          component={"h2"}
          fontFamily="ABeeZee"
          letterSpacing={"1px"}
          fontSize="3rem"
          fontWeight={"bold"}
        >
          Commerci
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
