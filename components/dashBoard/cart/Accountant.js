import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import AccountantTable from "./AccountantTable";
import Total from "./Total";

const Accountant = ({ data }) => {
  console.log(data);
  const rows = data.map((cartItem) => ({
    name: cartItem.title,
    amount: cartItem.amount,
    id:cartItem.id
  }));
  const totalExpense = data.reduce((a, b) => {
    return (a += b.price * b.amount);
  }, 0);
  console.log(totalExpense);
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"100% "}
      p={2}
    >
      <AccountantTable data={rows} />
      <Box width={'90%'}>
        <Divider sx={{ width: "90%", mb: "1rem", height: "auto" }} />
        <Box display={'flex'} alignItems='center' justifyContent={'space-around'}>
          <Total total={totalExpense} />
          <Button variant="outlined" sx={{  height:'4rem' , fontSize:'1.5rem' }}>
            Buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Accountant;
