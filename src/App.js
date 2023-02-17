import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import QuestList from './components/QuestList.js';
import FadeIn from './components/FadeIn';
import Counter from './components/Counter';
import QuestDetails from './components/QuestDetails';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

let quest = [
  {
      id: 1,
      name: lorem.generateWords(4),
      description: lorem.generateParagraphs(1),
      type: lorem.generateWords(1),
      location: lorem.generateWords(2),
      reward: lorem.generateWords(1)
  }
];


function App() {
  const [quests, setQuests] = React.useState(quest);
  const [activeQuest, setActiveQuest] = React.useState(null);

  const addQuest = () => {
    let lastId = quests[quests.length - 1].id;
    const newQuest = {
      id: lastId + 1,
      name: lorem.generateWords(4),
      description: lorem.generateParagraphs(1),
      type: lorem.generateWords(1),
      location: lorem.generateWords(2),
      reward: lorem.generateWords(1)
    };
    setQuests([...quests, newQuest]);
  };

  const deleteQuest = () => {
    console.log(activeQuest)
    let newQuests = quests.filter((quest) => quest.id !== activeQuest.id);
    setQuests(newQuests);
  };

  return (
    <div className="App" id='app'>

      <NavBar />

      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <FadeIn duration={1000}>
            <div className="QuestList">
              <QuestList quests={quests} onSelectHandler={setActiveQuest} />
              <Button onClick={addQuest}> Add Quest </Button>
              <Button onClick={deleteQuest}> Delete Quest </Button>
            </div>
          </FadeIn>
        </Grid>

        <Grid item xs={12} sm={8}>
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