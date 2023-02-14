import React from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
  Paper,
  TextField,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  FormHelperText,
  Stack,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import FormGroup from "./FormGroup";

const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length <= 7) {
    errors.password = "Password must be more than 8 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.name) {
    errors.name = "Required";
  } else if (!/^\w{4,}$/i.test(values.name)) {
    errors.name = "Name should have at least 4 characters ";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (!/^\w{4,}$/i.test(values.lastName)) {
    errors.lastName = "Name should have at least 4 characters ";
  }

  return errors;
};
const Signup = ({showLogin}) => {
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
      alert(JSON.stringify(values, null, 2));
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
        <FormGroup styles={styles} formik={formik} title={"Name"} type="name" />
        <FormGroup
          styles={styles}
          formik={formik}
          title={"Last name"}
          type="lastName"
        />

        <Button
          fullWidth
          sx={{ height: "5rem", fontSize: "2rem" }}
          type="submit"
        >
          Register
        </Button>
        <Divider sx={{ mx: "auto !important", width: "80%" }} />
        <Stack textAlign={"center"} spacing={2}>
          <Box onClick={showLogin}>
            <Typography variant="h6">
              <Link sx={{ cursor: "pointer" }}>
                Already have an account ?
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </form>
  );
};

export default Signup;
