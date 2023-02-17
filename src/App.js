import React from 'react';
import './App.css';
import { Grid, Card, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import QuestContainer from './components/QuestContainer';


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
            <NavBar />
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