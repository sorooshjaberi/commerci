import * as UiLink from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Link from "next/link";
import AppsOutage from "@mui/icons-material/AppsOutage";
import Outage from "../ui/Outage";
const HistoryTable = ({ data: historyItems }) => {
  if (historyItems.length === 0)
    return (
      <Outage/>
    );
  return (
    <Table
      sx={{
        minWidth: 650,
        "& *": {
          fontSize: "1.5rem !important",
          textAlign: "center !important",
        },
      }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Product Page</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {historyItems?.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>
              <Link href={row.link}>
                <UiLink component="i">visit product's page</UiLink>
              </Link>
            </TableCell>
            <TableCell>
              {new Date(row.time).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
                day: "2-digit",
              })}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HistoryTable;
