import React from 'react';
import './App.css';
import { Grid, Card, CssBaseline } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import QuestContainer from './components/QuestContainer';

import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <div className="App" id='app'>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card className='NavBar'>
              <NavBar />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            <QuestContainer/>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Card className='Counter'>
              <Counter />
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;