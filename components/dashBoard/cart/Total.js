import { Box, Typography } from '@mui/material'
import React from 'react'

const Total = ({total}) => {
  return (
   <Box>
    <Typography variant='h5'>Total : ${total}</Typography>
   </Box>
  )
}

export default Total