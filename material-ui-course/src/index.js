import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { orange,pink, red } from '@mui/material/colors';
import PasswordGenrator from './PasswordGenrator';


const theme = createTheme({
  palette:{
    primary:{
      main:"#CCC",
      light:"red"
    },
    secondary:{
      main:orange[500]
    },
    myCustomColor:{
      main: red[400],
      superDark:red[800],
      superLight:red[100]
    },
    mode:'dark'
  },
  typography:{
    myVariant:{
      fontSize:"3rem",
      color:pink[700]
    }
  },

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <PasswordGenrator/>
    </ThemeProvider>
  // </React.StrictMode>
);

