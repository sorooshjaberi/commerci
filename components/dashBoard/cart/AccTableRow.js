 
import { TableRow, TableCell, Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Stack } from "@mui/system";
import { useDispatch } from "react-redux";
import { userAction } from "@/store/user";
const AccTableRow = ({ data }) => {
  console.log(data);
  const row = data;
  const dispatch = useDispatch();
  const onAdd =() => {
    dispatch(userAction.cartIncrement(data.id))
  }
  const onSub = () => {
    dispatch(userAction.cartDecrement(data.id))
  }
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
          <Button onClick={onAdd}>
            <AddIcon />
          </Button>
          <Button onClick={onSub}>
            <RemoveIcon />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AccTableRow;
