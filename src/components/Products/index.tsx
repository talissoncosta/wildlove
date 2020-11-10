import React from 'react';
import MUIDataTable from "mui-datatables";
import Box from '@material-ui/core/Box';

const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];


export default function Products() {
  return (
    
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
    />
  );
}