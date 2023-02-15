import { hashedPassword } from "./password-crypt-utils";
export const createAccount = async (data) => {
  //send to api to mongodb
  const hashed = await hashedPassword(data.password);
  data.password = hashed;
  try {
    const json = await postUserData(data);
    console.log(json);
  } catch (message) {
    console.log(message);
  }
};

const postUserData = async (data) => {
  const res = await fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) {
    throw new Error(json.message || "something went wrong. Please try again");
  }
  return json;
};

export const signupValidate = (values) => {
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

export const loginValidate = (values) => {
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

  return errors;
};
