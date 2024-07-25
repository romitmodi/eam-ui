import DataTable, { createTheme } from 'react-data-table-component';
import dat from '../data/EmployeeTickets.json'
import SnowJiraTableComponent from './SnowJiraTable';


import dat2 from '../data/JIRAData.json'
import { wrap } from 'module';
import SnowJiraTableComponent2 from './SnowJiraTable copy';



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
    { 
		name: 'Ticket Details',
        cell: (row: { ticketDetails: any } )=> (
            
            <table>
            <th><td>ID</td><td>Status</td><td>URL</td></th>
            {row.ticketDetails.forEach}
            <tr><td>{row.ticketDetails[0].id}</td><td>{row.ticketDetails[0].status}</td><td><a href={row.ticketDetails[0].url}/></td></tr>
           
            </table>
		),

	},
];

const data = dat;

export default function EmployeeTicketsTable() {
    
	return (
    <form className='form'>
		<DataTable
			columns={columns}
			data={data}
            theme="solarized"
			expandableRows expandableRowsComponent ={SnowJiraTableComponent2}
		/>
    </form>
	);
};
