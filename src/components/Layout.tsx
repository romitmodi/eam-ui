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
    <>
    <br/>
      <div className="dashButtons" style={{ display: "flex" }}>
        <button className="lyds-dash-button" onClick={() => navigate('EmployeeDashBoard', { replace: true })}>
          Employee Dashboard
        </button>

        <button className="lyds-dash-button" onClick={() => navigate('ApprovReqs', { replace: false })}>
          Approval Request
        </button>

        <button className="lyds-dash-button" onClick={() => navigate('NewReq', { replace: false })}>
          New Request
        </button>
        <button className="lyds-dash-button" style={{ marginLeft: "auto" }} onClick={() => navigate('MyProfile', { replace: false })}>
          My Profile
        </button>
      </div>
      <Outlet />
    </>
  )
};
function hide(){
  let element: any = document.getElementById("loginButton");
  element.innerText = "Home";
}


export default Layout;