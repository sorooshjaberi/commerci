 
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import FormGroup from "./FormGroup";
import {
  signupValidate as validate,
  createAccount,
} from "@/lib/sign-data-utils";
import { useDispatch } from "react-redux";
import { uiAction } from "@/store/ui";
const Signup = ({ showLogin }) => {
  const dispatch = useDispatch();
  const styles = {
    inputs: { fontSize: "2rem " },
    inputLabel: { fontSize: "1.3rem" },
    inputHelper: { fontSize: "1.1rem", color: "orangered" },
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      lastName: "",
    },
    onSubmit: (values) => {
      createAccount(values)
        .then((_) => {
          dispatch(
            uiAction.changeAlert({
              type: "success",
              context: "Account created successfully",
            })
          );
        })
        .catch((err) => {
          dispatch(
            uiAction.changeAlert({ type: "error", context: err.message })
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
      <Stack direction={"column"} spacing={2}>
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
        <FormGroup styles={styles} formik={formik} title={"Name"} type="name" />
        <FormGroup
          styles={styles}
          formik={formik}
          title={"Last name"}
          type="lastName"
        />

        <Button
          fullWidth
          sx={{ height: "3rem", fontSize: "2rem" }}
          type="submit"
        >
          Register
        </Button>
        <Divider sx={{ mx: "auto !important", width: "80%" }} />
        <Stack textAlign={"center"} spacing={2}>
          <Box onClick={showLogin}>
            <Typography variant="h6">
              <Link sx={{ cursor: "pointer" }}>Already have an account ?</Link>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </form>
  );
};

export default Signup;
