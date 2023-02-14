import React from "react";
import { TableRow, TableCell, Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Stack } from "@mui/system";

const AccTableRow = ({ data }) => {
  const row = data;
  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Typography variant="h6">{row.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h4">{row.amount}<code>x</code></Typography>
      </TableCell>
      <TableCell align="right">
        <div>
          <Button>
            <AddIcon />
          </Button>
          <Button>
            <RemoveIcon />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AccTableRow;
