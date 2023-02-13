import { Box, Typography } from "@mui/material";

function TabPanel(props) {
  console.log(props);
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value != index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
export default TabPanel;
