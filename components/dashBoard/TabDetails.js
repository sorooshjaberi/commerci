import React from "react";
import { Paper } from "@mui/material";
import TabPanel from "./TabPanel";
import { useSelector } from "react-redux";
import SavedItems from "./SavedItems";
import HistoryTable from "./HistoryTable";
const TabDetails = ({ user }) => {
  const uiStore = useSelector((store) => store.ui);
  const userStore = useSelector((store) => store.user);
  console.log(userStore);
  return (
    <Paper sx={{ flex: "1" }}>
      <TabPanel index={0} value={+uiStore.dashboardTabIndex}>
        <SavedItems savedItems={userStore.saved} />
      </TabPanel>
      <TabPanel index={1} value={+uiStore.dashboardTabIndex}>
        <HistoryTable historyItems={userStore.userData.history} />
      </TabPanel>
      <TabPanel index={2} value={+uiStore.dashboardTabIndex}>
        Item 3
      </TabPanel>
    </Paper>
  );
};

export default TabDetails;
