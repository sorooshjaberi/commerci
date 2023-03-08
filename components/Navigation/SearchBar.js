import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import searchHandler from "@/lib/searchHandler";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const searchInputHandler = (event, value) => {
    console.log(`log  => file: SearchBar.js:12  => event:`, event);
    console.log(`log  => file: SearchBar.js:12  => value:`, value);
    setSearchValue(value);
  };
  useEffect(() => {
    if (searchValue) {
      router.push("/search");
    }
    const timeOut = setTimeout(() => {
      searchHandler(searchValue);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchValue]);
  const searchIcon = (
    <SearchIcon
      sx={{
        color: "action.active",
        mr: 1,
        my: 0.5,
        fontSize: 40,
        color: "rgba(255,0,130,1)",
        opacity: ".5",
        scale: "-1 1",
        position: "relative",
      }}
    />
  );
  const Label = (
    <Box sx={{ display: "flex", alignItems: "center", translate: "0 -1rem" }}>
      {searchIcon}
      <Typography fontSize={"2rem"}>Search</Typography>
    </Box>
  );

  return (
    <Box
      display={"flex"}
      alignItems="flex-end"
      width={"70%"}
      sx={{
        ml: { md: "3rem", sm: "5rem" },
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
      }}
    >
      {/* {searchIcon} */}
      <Autocomplete
        freeSolo
        fullWidth
        id="free-solo-2-demo"
        disableClearable
        options={["Shoe", "Black coat"]}
        onChange={searchInputHandler}
        inputValue={searchValue}
        onInputChange={searchInputHandler}
        renderInput={(params) => (
          <TextField
            sx={{
              "& label": { overflow: "visible" },
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                router.push("/");
              } else {
                searchInputHandler(e);
                console.log(5);
              }
            }}
            {...params}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            fullWidth
            label={Label}
            variant="standard"
          />
        )}
      />
    </Box>
  );
};

export default SearchBar;
