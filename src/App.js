import "./App.css";
import React from 'react';
import { createTheme, Paper, ThemeProvider } from '@mui/material';
import Layout from "./components/Layout";

const darkTheme = createTheme({
  palette: { mode: 'dark' }
});
const lightTheme = createTheme({});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "100vh", overflow: 'hidden' }} square={true}>
        <div className='app'>
          <Layout />
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App;
