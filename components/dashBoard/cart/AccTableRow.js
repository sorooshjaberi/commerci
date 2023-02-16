import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { userAction } from "@/store/user";
const AccTableRow = ({ data }) => {
  const row = data;
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(userAction.cartIncrement(data.id));
  };
  const onSub = () => {
    dispatch(userAction.cartDecrement(data.id));
  };
  return (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Typography variant="h6">{row.name}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h4">
          {row.amount}
          <code>x</code>
        </Typography>
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
