
import { Box, TextField, Typography, Button, styled } from '@mui/material';
import React from 'react'

const UrlBox = () => {

  const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderRadius: 0,
      '& fieldset': {
        borderColor: '#808080',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
  });

  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2, padding: 3,
      }}
      >
        <Box sx={{
          border: '1px solid gray', padding: '10px 20px'
        }}>
          <Typography sx={{ fontSize: 22 }}>PASTE YOUR URL HERE</Typography>
        </Box>
        <Box sx={{
          flex: 1
        }}>
          <CustomTextField
            fullWidth
            size='small'
            type='url'
            sx={{ borderRadius: '0px' }}
            inputProps={{ style: { fontSize: 26 } }}
            onClick={() => { }}
          />
        </Box>
        <Box>
          <Button
            onClick={() => { }}
            variant='outlined'
            sx={{
              padding: '5px 20px',
              fontSize: 24,
              borderRadius: 0,
            }}>RUN</Button>
        </Box>
      </Box>
    </>
  )
}

export default UrlBox;
