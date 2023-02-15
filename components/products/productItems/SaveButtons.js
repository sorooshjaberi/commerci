import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "@/store/user";
import { Paper } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { uiAction } from "@/store/ui";
const SaveButtons = ({ data, loginStatus }) => {
  const [isAdded, setIsAdded] = useState(false);
  const userStore = useSelector((store) => store.user.saved);
  const added = !!userStore.find((savedItem) => savedItem.id == data.id);
  useEffect(() => {
    if (added) {
      setIsAdded(true);
    }
  }, []);
  const dispatch = useDispatch();
  const addSavedHandler = (e) => {
    if (!loginStatus) {
      dispatch(
        uiAction.changeAlert({
          type: "error",
          context: "signin to save products",
        })
      );
      return;
    }
    e.stopPropagation();
    dispatch(userAction.setSavedData(data));
    setIsAdded(true);
  };
  const removeShoppingSavedHandler = (e) => {
    e.stopPropagation();
    dispatch(userAction.removeSavedData(data.id));
    setIsAdded(false);
  };

  const controllersStyle = {
    p: 1,
    opacity: ".7",
    m: "1rem",
    cursor: "pointer",
    mb: ".6rem",
  };
  const savedController = !isAdded ? (
    <Paper
      onClick={addSavedHandler}
      sx={{ ...controllersStyle, bgcolor: "grey.400" }}
    >
      <BookmarkAddIcon />
    </Paper>
  ) : (
    <Paper
      onClick={removeShoppingSavedHandler}
      sx={{ ...controllersStyle, bgcolor: "success.light" }}
    >
      <BookmarkRemoveIcon />
    </Paper>
  );
  return <>{savedController}</>;
};

export default SaveButtons;
