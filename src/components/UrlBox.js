import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import setURL  from "../redux/url/urlAction";

const UrlBox = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const onChangeMethod = (e) => {
    setUrl(e.target.value);
  }

  const handleRunClick = () => {
    dispatch(setURL(url));
  }

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
          <TextField
            fullWidth
            size='small'
            sx={{
              borderRadius: '0px',
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
            }}
            inputProps={{ style: { fontSize: 24 } }}
            onChange={(e) => onChangeMethod(e)}
          />
        </Box>
        <Box>
          <Button
            onClick={() => handleRunClick()}
            variant='outlined'
            type='submit'
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
