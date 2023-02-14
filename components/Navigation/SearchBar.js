import React from "react";
import Box from '@mui/material/Box'
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";



const SearchBar = () => {
  return (
    <Box
    
      display={"flex"}
      alignItems="flex-end"
      width={"70%"}
      ml="3rem"
      sx={{
        "& label": {
          color: "#fff",
          fontSize: "2rem",
        },
        "& div::before": {
          borderBottomColor: "#fff ",
        },
        "& input": {
          fontSize: "2rem",
          color: "#fff",
          borderColor: "#fff",
        },
        "& input:focus ": {
          // display:'none'
        },
      }}
    >
      <SearchIcon
        sx={{
          color: "action.active",
          mr: 1,
          my: 0.5,
          fontSize: 40,
          color: "##ffffff59",
          opacity: ".5",
          scale: "-1 1",
          position: "relative",
        }}
      />
      <TextField  fullWidth label="Search" variant="filled" />
    </Box>
  );
};

export default SearchBar;
