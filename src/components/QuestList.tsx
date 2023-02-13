import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";
import Box from '@mui/material/Box';

function QuestList() {
  return (
    <div className="QuestList">
      
      <List>
        <Box>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Quest 1" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Quest 2" />
              </ListItemButton>
            </ListItem>
          </Box>
        </List>
    </div>
  );
}

export default QuestList;