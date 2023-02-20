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
    const [openAddDialog, setOpenAddDialog] = React.useState(false);
    const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);
    const [openAddEmptyQuestAlert, setOpenAddEmptyQuestAlert] = React.useState(false);

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

    const handleAddQuest = () => {
        setOpenAddDialog(true);
    };

    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
    };

    const handleDeleteAltert = () => {
        setOpenDeleteAlert(true);
    };

    const handleCloseDeleteAlert = () => {
        setOpenDeleteAlert(false);
    };

    const handleAddEmptyQuestAlert = () => {
        setOpenAddEmptyQuestAlert(true);
    };

    const handleCloseAddEmptyQuestAlert = () => {
        setOpenAddEmptyQuestAlert(false);
    };

    const addQuest = () => {
        let lastId;
        if (quests.length === 0) {
            lastId = 0;
        } else {
            lastId = quests[quests.length - 1].id;
        }
        //check if all fields are filled
        if (
            questNameRef.current.value === "" ||
            questDescriptionRef.current.value === "" ||
            questTypeRef.current.value === "" ||
            questLocationRef.current.value === "" ||
            questRewardRef.current.value === ""
        ) {
            handleAddEmptyQuestAlert();
            return;
        }
        const newQuest = {
            id: lastId + 1,
            name: questNameRef.current.value,
            description: questDescriptionRef.current.value,
            type: questTypeRef.current.value,
            location: questLocationRef.current.value,
            reward: questRewardRef.current.value
        };
        setQuests([...quests, newQuest]);
        handleCloseAddDialog();
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

    const questNameRef = React.useRef();
    const questDescriptionRef = React.useRef();
    const questTypeRef = React.useRef();
    const questLocationRef = React.useRef();
    const questRewardRef = React.useRef();


    return ( 
        <>  
            <Snackbar 
                open={openDeleteAlert} 
                autoHideDuration={6000} 
                onClose={handleCloseDeleteAlert}
                message="Please select a quest to delete"
            />
            <Snackbar 
                open={openAddEmptyQuestAlert} 
                autoHideDuration={6000} 
                onClose={handleCloseAddEmptyQuestAlert}
                message="You need to fill out all fields to add a quest"
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
            <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
                <DialogTitle>Add Quest</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questName"
                        label="Quest Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questNameRef}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questDescription"
                        label="Quest Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questDescriptionRef}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questType"
                        label="Quest Type"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questTypeRef}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questLocation"
                        label="Quest Location"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questLocationRef}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questReward"
                        label="Quest Reward"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={questRewardRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddDialog}>Cancel</Button>
                    <Button onClick={addQuest}>Submit</Button>
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
                            <Button onClick={handleAddQuest}> Add Quest </Button>
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