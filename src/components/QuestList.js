import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";
import Button from "@mui/material/Button";

function QuestList({quests}) {
  return (
    <div className="QuestList">
      <List>
        {quests.map((quest) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={quest.name} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </div>
  );
}

export default QuestList;