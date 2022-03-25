import { ThemeProvider, createTheme, makeStyles  } from '@material-ui/core';
import React, { useState } from 'react';

import Home from './Home';


const useStyles = makeStyles({
  root: {},
});

function App() {


  const theme = createTheme({
	spacing: 4,
	palette: {
	  primary: {
		main: '#f44336',
	  },
	  secondary: {
		main: '#FFFFFF',
	  },
	  background: {
		
	  },
	},
  });

  const classes = useStyles();
  
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;