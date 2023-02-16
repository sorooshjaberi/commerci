import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "@/store/ui";
import React from "react";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const alertStore = useSelector((store) => store.ui.alert);
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(uiAction.changeAlert({ type: null, context: "" }));
  }, alertStore.duration);
  if (!alertStore.type) return;

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={!!alertStore.type} autoHideDuration={alertStore.duration}>
        <Alert severity={alertStore.type} sx={{ width: "100%" }}>
          <Typography variant="h4">{alertStore.context}</Typography>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
