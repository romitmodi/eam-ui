import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import dat from '../data/SnowJiraforApprove.json';

  const data = dat.Tickets;

export default function SelAndApproveTickets() {
  const [selectedData, setSelectedData] = React.useState();

  const columns: TableColumn<{ jiraID: string, status:string }>[] = [
    {
      name: "JIRA/SNOW ID",
      selector: (row: { jiraID: any; }) => {
        return row.jiraID;
      },
    },
    {
      name: "STATUS",
      sortable: true,
      selector: (row: { status: any; }) => {
        return row.status;
    },
    }
  ];

  const handleChange = (state:any) => {
    setSelectedData(state.selectedRows);
    console.log(selectedData);
  };

  return (
    <div>
      <DataTable
        data={data}
        columns={columns}
        selectableRows
        onSelectedRowsChange={handleChange}
      />
    </div>
  );
};
