import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Stack, Divider, Typography, Link } from "@mui/material";
import FormGroup from "./FormGroup";
import { signupValidate as validate , createAccount} from "@/lib/sign-data-utils";

const Signup = ({ showLogin }) => {
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
      createAccount(values);
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
