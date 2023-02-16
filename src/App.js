import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import QuestList from './components/QuestList.js';
import FadeIn from './components/FadeIn';
import Counter from './components/Counter';
import QuestDetails from './components/QuestDetails';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

let quest = [
  {
      name: "Quest 1",
      description: "Description 1",
      type: "Type 1",
      location: "Location 1",
      reward: "Reward 1"
  },
  {
      name: "Quest 2",
      description: "Description 2",
      type: "Type 2",
      location: "Location 2",
      reward: "Reward 2"
  },
  {
      name: "Quest 3",
      description: "Description 3",
      type: "Type 3",
      location: "Location 3",
      reward: "Reward 3"
  },
  {
      name: "Quest 4",
      description: "Description 4",
      type: "Type 4",
      location: "Location 4",
      reward: "Reward 4"
  },
  
];

function App() {
  const [quests] = React.useState(quest);
  const [activeQuest, setActiveQuest] = React.useState(null);
  console.log(activeQuest);

  return (
    <div className="App" id='app'>

      <NavBar />

      <Grid container spacing={2}>

        <Grid item xs={12} sm={3}>
          <FadeIn duration={1000}>
            <QuestList quests={quests} onSelectHandler={setActiveQuest}/>
          </FadeIn>
        </Grid>

        <Grid item xs={12} sm={7}>
          <FadeIn duration={1000}>
            <div className="QuestDetails">
              <QuestDetails quest={activeQuest} />
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
      <Button onClick={() => addQuest()}> Add Quest </Button>
    </div>
  );
}

function addQuest(){
  quest.push({
    name: "Quest 5",
    description: "Description 5",
    type: "Type 5",
    location: "Location 5",
    reward: "Reward 5"
  });
  console.log(quest);
}

export default App;
