import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiAction } from "@/store/ui";
import Box from "@mui/material/Box";
import { Tabs as TabS, Tab } from "@mui/material";

const Tabs = () => {
  const uiStore = useSelector((store) => store.ui);
  const dispatch = useDispatch();
  const value = uiStore.dashboardTabIndex;
  const handleChange = (event, newValue) => {
    dispatch(uiAction.changeTab(newValue));
  };
  return (
    <Box>
      <TabS
        orientation="vertical"
        sx={{ borderRight: 1, borderColor: "divider" }}
        value={value}
        onChange={handleChange}
      >
        <Tab label="Cart"     />
        <Tab label="Saved" />
        <Tab label="History" />
      </TabS>
    </Box>
  );
};

export default Tabs;
