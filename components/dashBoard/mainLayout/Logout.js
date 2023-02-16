 
import * as MLogout from '@mui/icons-material/Logout'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { signOut } from "next-auth/react";
const Logout = () => {
  return (
    <Button
      onClick={signOut}
      variant="contained"
      sx={{
        backgroundColor: "error.light",
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        translate: "-50% -50%",
      }}
    >
      <Typography variant="h5" mr="5px">
        Logout
      </Typography>
      <MLogout />
    </Button>
  );
};

export default Logout;
