import { Box, Typography } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log(value, index);
  return (
    <div hidden={value != index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default TabPanel;
