import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <Box sx={{ height: "6rem", width: "9rem" }}>
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          src={"/Logo.png"}
          width={300}
          height={200}
        />
      </Box>
    </Link>
  );
};

export default Logo;
