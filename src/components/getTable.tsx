import { useState } from "react";

interface ticket {
    id: number
    status: string
    url:string
  }

export default function GetTable(body:any, tableName?:string){
    let trs: any = [];
    const data: ticket[]  = JSON.parse(JSON.stringify(body.data || []));
    const[rowEles,setRowEles]= useState([]);
    data.forEach(ele => trs.push(<tr>
        <td>{ele.id}</td>
        <td>{ele.status}</td>
        <td><a href={ele.url}>{ele.id}</a></td>
    </tr>));

    //  setRowEles(trs);
    return(
        <>
        {/* <p>{trs}</p> */}
        <table 
        // id={tableName}
        >
            <th>
                <td>ID</td><td>Status</td><td>URL</td>
            </th>
           {trs }
        </table>
        
        </>
    );
}