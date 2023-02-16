 
import {
    Box,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Divider,
  } from "@mui/material";
  import AccTableRow from "./AccTableRow";
const AccountantTable = ({ data }) => {
  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableBody>
          {data.map((row) => (
            <AccTableRow data={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AccountantTable;
