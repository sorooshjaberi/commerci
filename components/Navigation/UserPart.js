import SignButton from "./SignButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { uiAction } from "@/store/ui";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

const UserButtons = () => {
  const { data, status } = useSession();
  const LoggedIn = !!data;
  const dispatch = useDispatch();
  const openCart = () => {
    dispatch(uiAction.changeTab(0));
  };
  const buttonStyle = {
    bgcolor: "rgb(7,192,234)",
    background:
      "linear-gradient(90deg, rgba(7,192,234,1) 0%, rgba(103,83,220,1) 0%, rgba(223,66,201,1) 42%, rgba(255,0,130,1) 100%)",
    boxShadow:
      "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
  };
  const enteringButton = LoggedIn ? (
    <>
      {/* <Link href={"/dashboard"}>
        <Paper sx={{ p: 1, cursor: "pointer",...buttonStyle }}>
          <PersonIcon sx={{ color: "white", fontSize: "5rem" }} />
        </Paper>
      </Link> */}
      {/* <Divider */}
        {/* orientation="vertical"
        sx={{ width: "auto", height: "auto", borderColor: "white" }}
      /> */}
      <Link href={"/dashboard"}>
        <Paper
          onClick={openCart}
          sx={{ p: 1, cursor: "pointer"  , ...buttonStyle  , height:'5rem'}}
        >
          <ShoppingCartIcon sx={{ color: "white", fontSize: "4rem" }} />
        </Paper>
      </Link>
    </>
  ) : (
    <Link href={"/sign-in"}>
      <SignButton />
    </Link>
  );
  return (
    <Stack
      direction={"row"}
      spacing={2}
      justifyContent="end"
      sx={{
        width: "30%",
      }}
    >
      {enteringButton}
    </Stack>
  );
};

export default UserButtons;
