import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import QuestList from './components/QuestList.js';
import Counter from './components/Counter';
import QuestDetails from './components/QuestDetails';
import { CardActions, CardContent, Grid } from '@mui/material';
import { Button } from '@mui/material';
import { LoremIpsum } from "lorem-ipsum";
import { Card } from '@mui/material';

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
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <NavBar />
      </Grid>
        <Grid item xs={12} sm={4}>
            <Card className="QuestList">
              <div className="QuestList">
                <CardContent>
                  <QuestList quests={quests} onSelectHandler={setActiveQuest} />
                </CardContent>
                  <CardActions>
                  <Button onClick={addQuest}> Add Quest </Button>
                  <Button onClick={deleteQuest}> Delete Quest </Button>
                </CardActions>
              </div>
            </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
              <Card>
                <QuestDetails quest={activeQuest} />
              </Card>
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