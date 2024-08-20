import { Outlet, Link, Navigate } from "react-router-dom";
import '../App.css';
import ReactDOM from 'react-dom'
import { useNavigate } from "react-router-dom";
import Avatar from 'react-avatar';
import App from "../App";
import { isJsxElement } from "typescript";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import Login from "./Login";

export const LoginLayout = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [password, setPwd] = useState<string>("");
  var UserID = '';
  var lvl: number;
  function setLvl(level: number) {
    lvl = level;
  }


  return (
    <div className="App">
      <header style={{ display: "flex" }}>
        <img src="https://lloydstechnologycentre.com/assets/site/lloyds-logo.svg" alt="logo" />
        <br />
        <title>EMA</title>
        <h1 style={{ marginInline: "auto", color: "rgb(53, 122, 72)", fontSize: "50px" }}>EMA Application</h1>

        {/* <Avatar skypeId="sitebase" name="Wim Mostmans" color="green" round={true} size="50" style={{ mar: "auto" }} /> */}

      </header>
      <div className="dashButtons" style={{ display: "flex" }}>

        {activeIndex > 0 ? (
          <button className="lyds-dash-button" onClick={() => navigate('/Layout/EmployeeDashBoard', { replace: true })}>
            Employee Dashboard
          </button>
        ) : (
          <></>
        )}

        {activeIndex > 1 ? (
          <button className="lyds-dash-button" onClick={() => navigate('/Layout/ApprovReqs', { replace: false })}>
            Approval Request
          </button>
        ) : (
          <></>
        )}
        {activeIndex > 2 ? (
          <button className="lyds-dash-button" onClick={() => navigate('/Layout/NewReq', { replace: false })}>
            New Request
          </button>
        ) : (
          <></>
        )}

        <div style={{ marginLeft: "auto" }} >
          {activeIndex > 0 ? (
            <button className="lyds-dash-button" onClick={() => setActiveIndex(0)}>
              <a href="/" style={{ color: "white", textDecoration: "none" }} onClick={() => setActiveIndex(0)} >Logout</a>

            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      {activeIndex < 1 ? (
        <div id="loginComponent">
          <h1 className="screenheader">Please enter credentials to login</h1>
          <form id="loginform" className="form">
            <label>Employee ID:</label>
            <input
              id="UserID"
              value={UserID}
              // onChange={(e) => setUid(e.target.value)}
              type="text"
            ></input>
            <br />
            <label>Password: </label>
            <input
              id="Password"
              type="Password"
              value={password}
            // onChange={(e) => setPwd(e.target.value)}
            ></input>
            <br />
            <br />
            <button className="lyds-button" onClick={async () => {
              let data = await login();
              if (data === 200)
                setActiveIndex(2);
              else
                setActiveIndex(-1);
            }}>
              {/* <a href="/Layout" onClick={()=> setActiveIndex(2)}>Login</a> */}
              Login
            </button>
            {activeIndex === -1 ?
              (
                <p style={{ color: "red" }}>Incorrect Credentials !</p>
              ) : (<></>)
            }
          </form>
        </div>
      ) : (
        <></>
      )}
      <Outlet />
    </div>
  )
};

function hide() {
  let element: any = document.getElementById("loginButton");
  element.remove();
}


function login() {
  const data = axios.get(
    "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
  );


  // return (await data).status;

  return 200;
};
export default LoginLayout;