 
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Stack, Divider, Typography, Link } from "@mui/material";
import FormGroup from "./FormGroup";
import { loginValidate as validate } from "@/lib/sign-data-utils";
import { useSession } from "next-auth/react";
import { loginHandler } from "@/lib/api/login-util";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { uiAction } from "@/store/ui";
const Login = ({ hideLogin }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const styles = {
    inputs: { fontSize: "2rem " },
    inputLabel: { fontSize: "1.3rem" },
    inputHelper: { fontSize: "1.1rem", color: "orangered" },
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginHandler(values)
        .then((res) => {
          dispatch(
            uiAction.changeAlert({
              type: "success",
              context: "Logged in successfully",
            })
          );
          router.push("/");
        })
        .catch((err) => {
          dispatch(
            uiAction.changeAlert({
              type: "error",
              context: err.message || "something went wrong while loggin in",
            })
          );
        });
    },
    validate,
  });
  return (
    <form
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
      onSubmit={formik.handleSubmit}
    >
      <Stack direction={"column"} spacing={3}>
        <FormGroup
          styles={styles}
          formik={formik}
          title={"Email Address"}
          type="email"
        />
        <FormGroup
          styles={styles}
          formik={formik}
          title={"Password"}
          type="password"
        />

        <Button
          fullWidth
          sx={{ height: "5rem", fontSize: "2rem" }}
          type="submit"
        >
          submit
        </Button>
        <Divider sx={{ mx: "auto !important", width: "80%" }} />
        <Stack textAlign={"center"} spacing={2}>
          <Box>
            <Typography variant="h6">
              <Link sx={{ cursor: "pointer" }}>Forgot password?</Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" onClick={hideLogin}>
              <Link sx={{ cursor: "pointer" }}>
                Don't have an account yet? create one!
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </form>
  );
};

export default Login;
