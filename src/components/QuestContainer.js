import React from "react";
import { 
    Grid, Card, CardActions, CardContent, Button, 
    Dialog, DialogActions, DialogContent, DialogContentText, 
    DialogTitle, Snackbar 
} from "@mui/material";
import { LoremIpsum } from "lorem-ipsum";
import QuestList from "./QuestList";
import QuestDetails from "./QuestDetails";

const containerWidth = document.getElementById("root").offsetWidth;
const containerHeight = window.innerHeight;

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

function QuestContainer() {
    const [quests, setQuests] = React.useState(quest);
    const [activeQuest, setActiveQuest] = React.useState(null);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);

    const handleClickDelete = () => {
        if (!activeQuest) {
            console.log("No quest selected");
            handleDeleteAltert();
            return;
        }
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleDeleteAltert = () => {
        setOpenDeleteAlert(true);
    };

    const handleCloseDeleteAlert = () => {
        setOpenDeleteAlert(false);
    };

    const addQuest = () => {
        let lastId;
        if (quests.length === 0) {
            lastId = 0;
        } else {
            lastId = quests[quests.length - 1].id;
        }
        console.log(lastId);
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
        if (!activeQuest) {
            return;
        }
        let newQuests = quests.filter((quest) => quest.id !== activeQuest.id);
        setQuests(newQuests);
        setActiveQuest(null);
        setOpenDeleteDialog(false);
    };
    return ( 
        <>  
            <Snackbar 
                open={openDeleteAlert} 
                autoHideDuration={6000} 
                onClose={handleCloseDeleteAlert}
                message="Please select a quest to delete"
            />
            <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
                <DialogTitle> Delete Quest? </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this quest?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog}> Cancel </Button>
                    <Button onClick={deleteQuest}> Delete </Button>
                </DialogActions>
            </Dialog>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card className="QuestList">
                        <div className="QuestList">
                            <CardContent>
                                <QuestList quests={quests} onSelectHandler={setActiveQuest} />
                            </CardContent>
                            <CardActions>
                                <Button onClick={addQuest}> Add Quest </Button>
                                <Button onClick={handleClickDelete}> Delete Quest </Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Card>
                        <QuestDetails quest={activeQuest} />
                    </Card>
                </Grid>
            </Grid>
        </>
     );
}

export default QuestContainer;