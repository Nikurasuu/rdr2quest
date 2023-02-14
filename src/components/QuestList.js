import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";

function App() {
  return (
    <div className="QuestList">
      
        <List>

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

        </List>
      
    </div>
  );
}

export default App;