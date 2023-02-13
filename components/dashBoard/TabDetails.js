import React from "react";
import { Paper } from "@mui/material";
import TabPanel from "./TabPanel";
import { useSelector } from "react-redux";
const TabDetails = () => {
  const uiStore = useSelector((store) => store.ui);
  console.log(uiStore.dashboadTabIndex);
  return (
    <Paper sx={{ flex: "1" }}>
      <TabPanel index={0} value={+uiStore.dashboardTabIndex}>
        Item 1
      </TabPanel>
      <TabPanel index={1} value={+uiStore.dashboardTabIndex}>
        Item 2
      </TabPanel>
      <TabPanel index={2} value={+uiStore.dashboardTabIndex}>
        Item 3
      </TabPanel>
    </Paper>
  );
};

export default TabDetails;
