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
  }
];


function App() {
  const [quests, setQuests] = React.useState(quest);
  const [activeQuest, setActiveQuest] = React.useState(null);

  const addQuest = () => {
    let questLength = quests.length;
    const newQuest = {
      name: "Quest " + (questLength + 1).toString(),
      description: "Description " + (questLength + 1).toString(),
      type: "Type " + (questLength + 1).toString(),
      location: "Location " + (questLength + 1).toString(),
      reward: "Reward " + (questLength + 1).toString()
    };
    setQuests([...quests, newQuest]);
  };

  const deleteQuest = () => {
    quests.pop();
    setQuests([...quests]);
  };

  return (
    <div className="App" id='app'>

      <NavBar />

      <Grid container spacing={2}>

        <Grid item xs={12} sm={3}>
          <FadeIn duration={1000}>
          <div className="QuestList">
              <QuestList quests={quests} onSelectHandler={setActiveQuest}/>
              <Button onClick={addQuest}> Add Quest </Button>
              <Button onClick={deleteQuest}> Delete Quest </Button>
            </div>
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
    </div>
  );
}

export default App;