import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const containerWidth = document.getElementById("root").offsetWidth/3;
const containerHeight = window.innerHeight-250;

const columns = [
  { field: 'name', headerName: 'Quest Name', width: containerWidth/1.75 },
  { field: 'type', headerName: 'Typ'},
  { field: 'location', headerName: 'Ort'}
];

function QuestList({quests, onSelectHandler}) {
  return (
      <div style={{ height: containerHeight, width: '100%' }}>
        <DataGrid
          rows={quests}
          columns={columns}
          pageSize={15}
          onRowClick={(cell) => onSelectHandler(cell.row)}
        />
      </div>
  );
}

export default QuestList;