import { Outlet, Link, Navigate } from "react-router-dom";
import '../App.css';
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";
import Avatar from 'react-avatar';
import App from "../App";
import { isJsxElement } from "typescript";
import Login from "./Login";
export const Layout = () => {
  const navigate = useNavigate();
  
 var UserID='';
 var lvl:number;
function setLvl(level:number)
{
  lvl=level;
}


  return (
    <div className="App">
      <header style={{ display: "flex" }}>
        <img src="https://lloydstechnologycentre.com/assets/site/lloyds-logo.svg" alt="logo" />
        <br/>
        <title>EMA</title>
        <h1 style={{marginInline: "auto"}}>EMA Application</h1>
        
        <Avatar skypeId="sitebase" name="Wim Mostmans" color="green" round={true} size="50"  style={{mar: "auto"}}/>
       
      </header>
      <div className="dashButtons" style={{ display: "flex" }}>
        
      <button className="lyds-dash-button" onClick={() => navigate('Login', { replace: true })}>
          Login
        </button>

        <button className="lyds-dash-button" onClick={() => navigate('Table', { replace: true })}>
          Employee Dashboard
        </button>

        <button className="lyds-dash-button" onClick={() => navigate('ApprovReqs', { replace: true })}>
          Approval Request
        </button>

        <button className="lyds-dash-button" onClick={() => navigate('NewReq', { replace: true })}>
          New Request
        </button>
        <button className="lyds-dash-button" style={{ marginLeft: "auto" }} onClick={() => navigate('MyProfile', { replace: true })}>
          My Profile
        </button>
      </div>
      <Outlet />
    </div>
  )
};

export default Layout;