import dynamic from "next/dynamic";
import Paper from "@mui/material/Paper";
import TabPanel from "./TabPanel";
import { useSelector } from "react-redux";
import Spinner from "@/components/ui/Spinner";
const SavedItems = dynamic(() => import("../SavedItems/SavedItems"), {
  loading: () => <Spinner />,
});
const CartLayout = dynamic(() => import("../cart/CartLayout"), {
  loading: () => <Spinner />,
});
const HistoryTable = dynamic(() => import("../HistoryTable"), {
  loading: () => <Spinner />,
});

const TabDetails = ({ user }) => {
  const uiStore = useSelector((store) => store.ui);
  const userStore = useSelector((store) => store.user);
  return (
    <Paper sx={{ flex: "1" }}>
      <TabPanel index={0} value={+uiStore.dashboardTabIndex}>
        {uiStore.dashboardTabIndex == 0 && (
          <CartLayout user={user} data={userStore.cart} />
        )}
      </TabPanel>
      <TabPanel index={1} value={+uiStore.dashboardTabIndex}>
        {uiStore.dashboardTabIndex == 1 && (
          <SavedItems user={user} data={userStore.saved} />
        )}
      </TabPanel>
      <TabPanel index={2} value={+uiStore.dashboardTabIndex}>
        {uiStore.dashboardTabIndex == 2 && (
          <HistoryTable data={userStore.userData.history} />
        )}
      </TabPanel>
    </Paper>
  );
};

export default TabDetails;
