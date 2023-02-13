import React from "react";
import Paper from '@mui/material/paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
const SignButton = () => {
    const paperStyle = {
        height: "6rem",
        minWidth: "9rem",
        borderRadius: 4,
        bgcolor: "transparent",
        // border: "1px solid white",
      };
  return (
    <Paper
      sx={{
        ...paperStyle,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4.5,
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <Typography color={"white"} variant="h4">
          SignUp
        </Typography>
        <Divider
          orientation="vertical"
          sx={{ height: "auto", width: "auto", borderColor: "white" }}
        />
        <Typography color={"white"} variant="h4">
          SignIn
        </Typography>
      </Stack>
    </Paper>
  );
};

export default SignButton;
