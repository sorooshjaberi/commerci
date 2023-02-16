import { Box, Typography } from '@mui/material'
 'react'

const Total = ({total}) => {
  return (
   <Box>
    <Typography variant='h5'>Total : ${total}</Typography>
   </Box>
  )
}

export default Total