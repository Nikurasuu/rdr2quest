import './App.css';
import NavBar from './components/NavBar';
import QuestList from './components/QuestList.js';
import FadeIn from './components/FadeIn';
import Counter from './components/Counter';
import QuestDetails from './components/QuestDetails';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
          <FadeIn duration={1000}>
            <QuestList />
          </FadeIn>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FadeIn duration={1000}>
            <div className="QuestDetails">
              <QuestDetails />
            </div>
          </FadeIn>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FadeIn duration={1000}>
            <div className="Counter">
              <Counter />
            </div>
          </FadeIn>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
