import { Outlet, Link, Navigate } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [UserID, setUid] = useState<string>("");
  const [password, setPwd] = useState<string>("");
  const [lvl, setLvl] = useState<string>("");
  return (
    <>
      <div id="loginComponent">
        <h1 className="screenheader">Please enter credentials to login</h1>
        <form id="loginform" className="form">
          <label>Employee ID:</label>
          <input
            id="UserID"
            value={UserID}
            onChange={(e) => setUid(e.target.value)}
            type="text"
          ></input>
          <br />
          <label>Password: </label>
          <input
            id="Password"
            type="Password"
            value={password}
            onChange={(e) => setPwd(e.target.value)}
          ></input>
          <br />
          <br />
          <button className="lyds-button">
            <a href="/Layout/EmployeeDashBoard" onClick={()=>hide()}>Login</a>
          </button>
        </form>
      </div>
    </>
  );
};

function hide(){
  let element: any = document.getElementById("loginButton");
  element.style.display = "none";
}


export default Login;
