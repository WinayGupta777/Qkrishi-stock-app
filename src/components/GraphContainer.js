import { Box } from '@mui/material';
import React from 'react'
import StockGraph from './StockGraph';

const GraphContainer = () => {
  return (
    <Box sx={{
        margin: '30px 0'
    }}>
        <StockGraph />
    </Box>
  )
}

export default GraphContainer;
