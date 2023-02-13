import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "@/store/user";
import { Paper } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
const SaveButtons = ({data}) => {
  const [isAdded, setIsAdded] = useState(false);
  const userStore = useSelector((store) => store.user.saved);
  const dispatch = useDispatch();
  const addSavedHandler = (e) => {
    e.stopPropagation();
    dispatch(userAction.setSavedData(data));
    setIsAdded(true);
  };
  const removeShoppingSavedHandler = (e) => {
    e.stopPropagation();
    dispatch(userAction.removeSavedData(data.id));
    console.log(userStore);
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
      sx={{ ...controllersStyle, bgcolor: "success.light"  }}
    >
      <BookmarkRemoveIcon />
    </Paper>
  );
  return <>{savedController}</>;
};

export default SaveButtons;
