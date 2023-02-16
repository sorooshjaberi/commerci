import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const Total = ({total}) => {
  return (
   <Box>
    <Typography variant='h5'>Total : ${total}</Typography>
   </Box>
  )
}

export default Total