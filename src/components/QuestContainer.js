import React from "react";
import { 
    Grid, Card, CardActions, CardContent, Button, 
    Dialog, DialogActions, DialogContent, DialogContentText, 
    DialogTitle, Snackbar 
} from "@mui/material";
import QuestList from "./QuestList";
import QuestDetails from "./QuestDetails";
import TextField from "@mui/material/TextField";

let quest = [
  {
      id: 1,
      name: "The First Quest",
      description: "This is the first quest, please edit this quest or delete it and add a new one.", 
      type: "Main Quest",
      location: "Saint Denis",
      reward: "Money"
  }
];

function QuestContainer() {
    const [quests, setQuests] = React.useState(quest);
    const [activeQuest, setActiveQuest] = React.useState(null);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [openNotSelectedAlert, setOpenNotSelectedAlert] = React.useState(false);
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [openEmptyFieldsAlert, setOpenEmptyFieldsAlert] = React.useState(false);

    const questNameEditRef = React.useRef();
    const questDescriptionEditRef = React.useRef();
    const questTypeEditRef = React.useRef();
    const questLocationEditRef = React.useRef();
    const questRewardEditRef = React.useRef();

    const handleDeleteDialog = () => {
        setOpenDeleteDialog(!openDeleteDialog);
    };

    const handleEditDialog = () => {
        setOpenEditDialog(!openEditDialog);
    };

    const handleNotSelectedAlert = () => {
        setOpenNotSelectedAlert(!openNotSelectedAlert);
    };

    const handleEmptyFieldsAlert = () => {
        setOpenEmptyFieldsAlert(!openEmptyFieldsAlert);
    };

    const checkIfQuestIsSelected = () => {
        if (activeQuest === null) {
            handleNotSelectedAlert();
            return false;
        }
        return true;
    };

    const handleClickDelete = () => {
        if (checkIfQuestIsSelected()) {
            handleDeleteDialog();
        }
    };
    

    const handleClickEdit = () => {
        if (checkIfQuestIsSelected()) {
            handleEditDialog();
        }
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
            name: "",
            description: "",
            type: "",
            location: "",
            reward: ""
        };
        setActiveQuest(newQuest);
        setQuests([...quests, newQuest]);
        handleEditDialog();
    };

    const deleteEmptyQuest = () => {
        if (activeQuest.name === "") {
            const newQuests = quests.filter((quest) => quest.id !== activeQuest.id);
            setQuests(newQuests);
            setActiveQuest(null);
        }
        handleEditDialog();
    };


    const editQuest = () => {
        if (
            questNameEditRef.current.value === "" ||
            questDescriptionEditRef.current.value === "" ||
            questTypeEditRef.current.value === "" ||
            questLocationEditRef.current.value === "" ||
            questRewardEditRef.current.value === ""
        ) {
            handleEmptyFieldsAlert();
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
                open={openNotSelectedAlert} 
                autoHideDuration={6000} 
                onClose={handleNotSelectedAlert}
                message="Please select a quest"
            />
            <Snackbar 
                open={openEmptyFieldsAlert} 
                autoHideDuration={6000} 
                onClose={handleEmptyFieldsAlert}
                message="You need to fill out all fields"
            />
            <Dialog open={openDeleteDialog} onClose={handleDeleteDialog}>
                <DialogTitle> Delete Quest? </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this quest?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialog}> Cancel </Button>
                    <Button onClick={deleteQuest}> Delete </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openEditDialog} onClose={deleteEmptyQuest} fullScreen>
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
                    <Button onClick={deleteEmptyQuest}>Cancel</Button>
                    <Button onClick={editQuest}>Submit</Button>
                </DialogActions>
            </Dialog>
            <Grid container spacing={2} style={{height: '100%'}}>
                <Grid item xs={12} sm={4}>
                    <Card className="QuestList">
                        <CardContent>
                            <QuestList quests={quests} onSelectHandler={setActiveQuest} />
                        </CardContent>
                        <CardActions>
                            <Button onClick={addQuest}> Add Quest </Button>
                            <Button onClick={handleClickDelete}> Delete Quest </Button>
                            <Button onClick={handleClickEdit}> Edit Quest </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} style={{height: '100%'}}>
                    <Card style={{height: '100%'}}>
                        <QuestDetails quest={activeQuest} />
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default QuestContainer;