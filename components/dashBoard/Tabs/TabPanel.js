import { Box } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      style={{ height: "100%", overflow: "scroll" }}
      hidden={value != index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, height: "100%", overflow: "scroll !important" }}>
          {children}
        </Box>
      )}
    </div>
  );
}
export default TabPanel;
