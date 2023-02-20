import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { field: 'leadName', headerName: 'Lead name', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'followUpDate', headerName: 'Followup Date', width: 120 },
  { field: 'lastNote', headerName: 'Last note', width: 150 },
  { field: 'assigned', headerName: 'Assigned', width: 150 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'preferredCountries', headerName: 'Preferred Countries', width: 150 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'source', headerName: 'Source', width: 120 },
  { field: 'actions', headerName: 'Actions', width: 120 },
 
];

const rows = [
  { id: 1, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: 'Jon', age: 35 },
  { id: 2, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: 'Cersei', age: 42 },
  { id: 3, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: 'Jaime', age: 45 },
  { id: 4, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: 'Arya', age: 16 },
  { id: 5, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: 'Daenerys', age: null },
  { id: 6, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: null, age: 150 },
  { id: 7, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: 'Ferrara', age: 44 },
  { id: 8, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: 'Rossini', age: 36 },
  { id: 9, phone: '+88012321337332', Source: 'Facebook', email: 'abc@xyz.com',preferredCountries:'Bangladesh', followUpDate: '-', lastNote: 'Not Note Created!', status: 'Not Interested', leadName: 'Harvey', age: 65 },
];
const DataTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        DeleteIcon
      />
    </div>
  )
}

export default DataTable