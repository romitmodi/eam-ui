import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApprovalTable from "./ApprovalTable";
import Layout from "./components/Layout";

import DataTable, { createTheme } from 'react-data-table-component';
import React from 'react';

import reportWebVitals from './reportWebVitals';
import JiraTableComponent from "./components/SnowJiraTable";
import SelectPlatformLabFeatureTeamRole from "./components/CreateNewRequest";
import SelAndApproveTickets from "./components/CreateNewReq";
import SelAndApproveTickets2 from "./components/ApproveTable";
import Login from "./components/Login";
export default function App() {



  return (
      <>
      <Layout/>
      </>
   
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


