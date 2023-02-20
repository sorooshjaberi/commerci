import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState , useEffect } from "react";
import { useSelector } from "react-redux";

const UserData = () => {
  // console.log(`log  => file: UserData.js:8  => data:`, data);
  const [userData, setUserData] = useState({});
  const { firstName, lastName ,wallet } = useSelector((store) => store.user.userData);
  const spaceBetweenFlex = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  useEffect(() => {
    if (!firstName) return;
    const abbr = (firstName.slice(0, 1) + lastName.slice(0, 1)).toUpperCase();
    console.log(`log  => file: UserData.js:16  => abbr:`, abbr);
    setUserData({ firstName, lastName, abbr  , wallet});
  }, [firstName]);
  return (
    <Box minHeight={"5rem"}>
      <Box sx={{ ...spaceBetweenFlex }}>
        <Box
          sx={{
            ...spaceBetweenFlex,
          }}
        >
          <Avatar sx={{ mr: 3, scale: "1.5" }}>{userData.abbr}</Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography textTransform={"capitalize"} mb={1} variant="h4">
              {`${userData.firstName} ${userData.lastName}`}
            </Typography>
            <Typography variant="h6">${userData.wallet}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserData;
