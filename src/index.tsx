import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import JiraTableComponent from "./components/SnowJiraTable";
import CreateNewRequest from "./components/CreateNewRequest";
import SelAndApproveTickets2 from "./components/ApproveTable";
import Layout from "./components/Layout";
import Login from './components/Login';
import EmployeeTicketsTable from './components/EmployeeTickets';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<App />}>

          <Route path="Login" element={<Login/>} /> 
            <Route path="Layout" element={<Layout/>} /> 
            <Route path="/EmployeeDashBoard" Component={EmployeeTicketsTable}/>
            <Route path="/NewReq" Component={CreateNewRequest} />
            <Route path="/ApprovReqs" element={<SelAndApproveTickets2 />} />
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
