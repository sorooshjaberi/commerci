 
import Paper from '@mui/material/Paper'
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
        bgcolor:'rgb(7,192,234)',
        background:'linear-gradient(90deg, rgba(7,192,234,1) 0%, rgba(103,83,220,1) 0%, rgba(223,66,201,1) 42%, rgba(255,0,130,1) 100%)',
        boxShadow:'box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;'
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
