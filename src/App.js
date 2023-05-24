import "./App.css";
import React from 'react';
import UrlBox from './components/UrlBox';
import { createTheme, Paper, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: { mode: 'dark' }
});
const lightTheme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "100vh", overflow: 'hidden' }} square={true}>
        <div className='app'>
          <UrlBox />
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App;
