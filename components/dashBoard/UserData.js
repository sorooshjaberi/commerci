import { Avatar, Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const UserData = () => {
  const spaceBetweenFlex = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <Box minHeight={"5rem"}>
      <Box sx={{ ...spaceBetweenFlex }}>
        <Box
          sx={{
            ...spaceBetweenFlex,
          }}
        >
          <Avatar sx={{ mr: 1.5 }}>SJ</Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography mb={0.5} variant="h6">
              Soroush Jaberi
            </Typography>
            <Typography variant="body1">09028454710</Typography>
          </Box>
        </Box>
        <Button>
          <EditIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default UserData;
