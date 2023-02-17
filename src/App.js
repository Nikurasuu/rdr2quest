import React from 'react';
import './App.css';
import { Grid, Card } from '@mui/material';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import QuestContainer from './components/QuestContainer';


function App() {
  return (
    <div className="App" id='app'>
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
    </div>
  );
}

export default App;