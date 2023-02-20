import React from "react";
import { 
    Grid, Card, CardActions, CardContent, Button, 
    Dialog, DialogActions, DialogContent, DialogContentText, 
    DialogTitle, Snackbar 
} from "@mui/material";
import { LoremIpsum } from "lorem-ipsum";
import QuestList from "./QuestList";
import QuestDetails from "./QuestDetails";
import TextField from "@mui/material/TextField";

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
    const [openDeleteAlert, setOpenNotSelectedAlert] = React.useState(false);
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [openEditAlert, setOpenEditAlert] = React.useState(false);

    const questNameEditRef = React.useRef();
    const questDescriptionEditRef = React.useRef();
    const questTypeEditRef = React.useRef();
    const questLocationEditRef = React.useRef();
    const questRewardEditRef = React.useRef();

    const handleClickDelete = () => {
        if (!activeQuest) {
            handleNotSelectedAlert();
            return;
        }
        setOpenDeleteDialog(true);
    };

    const handleClickEdit = () => {
        if (!activeQuest) {
            handleNotSelectedAlert();
            return;
        }
        handleEditDialog();
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    const handleNotSelectedAlert = () => {
        setOpenNotSelectedAlert(true);
    };

    const handleCloseNotSelectedAlert = () => {
        setOpenNotSelectedAlert(false);
    };

    const handleEditDialog = () => {
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };

    const addQuest = () => {
        let lastId;
        if (quests.length === 0) {
            lastId = 0;
        } else {
            lastId = quests[quests.length - 1].id;
        }
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

    const handleEmptyEditQuestAlert = () => {
        setOpenEditAlert(true);
    };

    const handleCloseEditEmptyQuestAlert = () => {
        setOpenEditAlert(false);
    };

    const editQuest = () => {
        if (!activeQuest) {
            return;
        }
        if (
            questNameEditRef.current.value === "" ||
            questDescriptionEditRef.current.value === "" ||
            questTypeEditRef.current.value === "" ||
            questLocationEditRef.current.value === "" ||
            questRewardEditRef.current.value === ""
        ) {
            handleEmptyEditQuestAlert();
            return;
        }

        const newQuests = quests.map((quest) => {
            if (quest.id === activeQuest.id) {
                return {
                    ...quest,
                    name: questNameEditRef.current.value,
                    description: questDescriptionEditRef.current.value,
                    type: questTypeEditRef.current.value,
                    location: questLocationEditRef.current.value,
                    reward: questRewardEditRef.current.value
                };
            }
            return quest;
        });
        setQuests(newQuests);
        setActiveQuest(null);
        setOpenEditDialog(false);
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
                onClose={handleCloseNotSelectedAlert}
                message="Please select a quest"
            />
            <Snackbar 
                open={openEditAlert} 
                autoHideDuration={6000} 
                onClose={handleCloseEditEmptyQuestAlert}
                message="You need to fill out all fields"
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
            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                <DialogTitle>Edit Quest</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questName"
                        label="Quest Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questNameEditRef}
                        defaultValue={activeQuest === null ? '' : activeQuest.name}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questDescription"
                        label="Quest Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                        inputRef={questDescriptionEditRef}
                        defaultValue={activeQuest === null ? '' : activeQuest.description}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questType"
                        label="Quest Type"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questTypeEditRef}
                        defaultValue={activeQuest === null ? '' : activeQuest.type}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questLocation"
                        label="Quest Location"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questLocationEditRef}
                        defaultValue={activeQuest === null ? '' : activeQuest.location}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questReward"
                        label="Quest Reward"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questRewardEditRef}
                        defaultValue={activeQuest === null ? '' : activeQuest.reward}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog}>Cancel</Button>
                    <Button onClick={editQuest}>Submit</Button>
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
                            <Button onClick={handleClickEdit}> Edit Quest </Button>
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