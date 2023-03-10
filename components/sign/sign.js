import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'


import Typography from '@mui/material/Typography'

import React, { useState } from "react";
import Login from "./Login";
import Signup from "./signup";

const Sign = () => {
  const [isLogin, setIsLogin] = useState(true);
  const hideLogin = () => {
    setIsLogin(false);
  };
  const showLogin = () => {
    setIsLogin(true);
  };
  return (
    <Paper
      sx={{
        bgcolor: "#fafafa",
        width: "80%",
        p: "2rem",
        pb: "5rem",
        mx: "auto",
        height: "80vh",
      }}
    >
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h2" fontWeight={"bold"}>
          {isLogin ? "Login" : "SignUp"}
        </Typography>
        <Paper sx={{ flex: 1, mt: 2, p: 3, width: "60%" }}>
          {isLogin && <Login hideLogin={hideLogin} />}
          {!isLogin && <Signup showLogin={showLogin} />}
        </Paper>
      </Box>
    </Paper>
  );
};

export default Sign;
