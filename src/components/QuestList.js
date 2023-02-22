import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const containerWidth = document.getElementById("root").offsetWidth/3;

const columns = [
  { field: 'name', headerName: 'Quest Name', width: containerWidth/1.75 },
  { field: 'type', headerName: 'Typ'},
  { field: 'location', headerName: 'Ort'}
];

function QuestList({quests, onSelectHandler}) {
  return (
        <DataGrid
          rows={quests}
          columns={columns}
          pageSize={15}
          onRowClick={(cell) => onSelectHandler(cell.row)}
          autoHeight {...quests}
        />
  );
}

export default QuestList;