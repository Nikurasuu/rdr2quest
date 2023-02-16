import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button, List } from "@mui/material";

function QuestList({quests, onSelectHandler}) {
  return (
    <div className="QuestList">
      <List>
        {quests.map((quest) => (
          <ListItem disablePadding>
            <ListItemButton onClick={() => onSelectHandler(quest)}>
              <ListItemText primary={quest.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default QuestList;