import * as React from 'react'
import ReactDOM from 'react-dom/client'
import JiraData from './data/JIRAData.json'
import './index.css'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

type Tickets = {
    jiraID: string
    status: string
    jiraURL: string
    createdOn: string
}

const defaultData: Tickets[] = [
    {
        "jiraID": "JIRA137411",
        "status": "Closed",
        "jiraURL": "https://google.com",
        "createdOn": "22-4-2024"
    },
    {
        "jiraID": "JIRA137412",
        "status": "Opened",
        "jiraURL": "https://google.com",
        "createdOn": "26-4-1924"
    },
    {
        "jiraID": "JIRA137413",
        "status": "Closed",
        "jiraURL": "https://google.com",
        "createdOn": "22-4-2024"
    }
];

const columnHelper = createColumnHelper<Tickets>()

const columns = [
    columnHelper.accessor('jiraID', {
        cell: info => info.getValue(),
        header: () => <span>Jira ID</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor(row => row.status, {
        id: 'status',
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Status</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('jiraURL', {
        header: () => 'Navigate to the Ticket',
        cell: link => link.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('createdOn', {
        header: () => <span>createdOn</span>,
        footer: info => info.column.id,
    }),
]

export default function ApprovalTable():any {
    const [data, _setData] = React.useState(() => [...defaultData])
    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    if (false) {
        return (
            <div className="p-2">
                <table>
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        {table.getFooterGroups().map(footerGroup => (
                            <tr key={footerGroup.id}>
                                {footerGroup.headers.map(header => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.footer,
                                                header.getContext()
                                            )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
                </table>
                <div className="h-4" />
                <button onClick={() => rerender()} className="border p-2">
                    Rerender
                </button>
            </div>
        )
    }
    else
    {
        return 
            <h1 className='screenheader'>You are not authorized</h1>
        
    }
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <div>
        <ApprovalTable/>
        </div>
    </React.StrictMode>
)
