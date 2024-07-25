import DataTable, { createTheme } from 'react-data-table-component';
import dat from '../data/EmployeeTickets.json'



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
		name: 'ID',
		selector: (row: { id: any; }) => {
            return row.id;
        },
		sortable: true,
	},
	{ 
		name: 'Status',
		selector: (row: { status: any; }) => {
            return row.status;
        },
		sortable: true,
	},
    {
		name: 'Jira/SNOW Link',
        button: true,
		cell: (row: { url: any, id:any; } )=> (
			<a href={row.url} target="_blank" rel="noopener noreferrer">
				{row.id}
			</a>
		),
		// selector: (row: { jiraURL: any; }) => {
        //     return row.jiraURL;
        // },
		sortable: false,
	},
];



const data = dat[0].ticketDetails;

export default function SnowJiraTableComponent2() {
	return (
    <form className='form'>
		<DataTable
			columns={columns}
			data={data}
            theme="solarized"
		/>
    </form>
	);
};
