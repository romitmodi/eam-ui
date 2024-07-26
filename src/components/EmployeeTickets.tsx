import DataTable, { createTheme } from 'react-data-table-component';
import dat from '../data/EmployeeTickets.json'

import axios from 'axios';
import SnowJiraTableComponent from './SnowJiraTable';


import dat2 from '../data/JIRAData.json'
import { wrap } from 'module';
import GetTable from './getTable';



createTheme('solarized', {
  text: {
    primary: '#000000',
    secondary: '#2aa198',
  },
  background: {
    default: '#FFFFF',
  },
  context: {
    background: 'rgb(53, 122, 72)',
    text: '#000000',
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  divider: {
    default: '#357a48',
  },
  action: {
    button: 'rgb(53, 122, 72)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'light');

const columns = [
  {
    name: 'Ticked ID',
    selector: (row: { id: any; }) => {
      return row.id;
    },
    sortable: true,
    
  },
  {
    name: 'Ticket Status',
    selector: (row: { status: any; }) => {
      return row.status;
    },
    sortable: true,
    
  },
  
];

const data = dat;




const ExpandedComponent = ({ data }: { data: any }) => {
 let a:string = JSON.stringify(data.ticketDetails);
  return <GetTable data = {data.ticketDetails}/>
   
};

const SnowJiraTableComponent2 = ({ data, columns }: { data: any, columns: any }) => {
  return (
    <>
    <h1 className='screenheader'>Employee DashBoard</h1>
    <form className='form'>
      <DataTable
        columns={columns}
        data={data}
        theme="solarized"
      />
    </form>
    </>
  );
};

const func =  async ()=>{
  const data = await axios.get('http://localhost:8890/api/requests/getUserRequests/15');
  return data;
}
let a= func();

console.log(a);

export default function EmployeeTicketsTable() {
  



  return (
    <form className='form'>
      <DataTable
        columns={columns}
        data={data}
        theme="solarized"
        expandableRows={true}
        expandableRowsComponent={ExpandedComponent}
      />
    </form>
  );
};
