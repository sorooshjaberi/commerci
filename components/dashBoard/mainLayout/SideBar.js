 
import UserData from "./UserData";
import Tabs from "../Tabs/Tabs";
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'


import Stack from '@mui/material/Stack'

import Logout from "./Logout";
const SideBar = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        p: 2,
        minWidth: "25rem",
        "& *": {
          fontSize: "2rem",
        },
      }}
    >
      <Stack spacing={2} direction={"column"}>
        <UserData />
        <Divider />
        <Tabs />
      </Stack>
      <Logout />
    </Paper>
  );
};

export default SideBar;
