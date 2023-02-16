import Box from '@mui/material/Box'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
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
