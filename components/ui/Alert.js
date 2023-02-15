import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useSelector } from "react-redux";
const Alert = () => {
    const alertStore = useSelector(store=>store.ui.alert)
    if(!alertStore.type)return;
  return (
    <Snackbar open={open} autoHideDuration={alertStore.duration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={alertStore.type} sx={{ width: "100%" }}>
        This is a success message!
      </Alert>
    </Snackbar>
  );
};

export default Alert;
