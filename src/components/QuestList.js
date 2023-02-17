import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: 'name', headerName: 'Quest Name', width: 400 },
  { field: 'type', headerName: 'Typ'},
  { field: 'location', headerName: 'Ort'}
];

function QuestList({quests, onSelectHandler}) {
  return (
      <div style={{ height: 891, width: '100%' }}>
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