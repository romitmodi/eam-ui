import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import projects from '../data/projects.json'
import { useState } from 'react';



function CreateNewRequest() {
    const [selectedBU, setselectedBU] = useState('');
    const [selectedLAB, setselectedLAB] = useState([]);
    const [selectedTeam, setselectedTeam] = useState([]);

    const SelProjectCall = (e: any) => {
        setselectedBU(e.target.value);
        let labDetails: any = [];
        projects.forEach(data => {
            if (data.name === e.target.value) data.labDetails.forEach(lab => { labDetails.push(<option value={lab.name}>{lab.name}</option>) });
        })
        labDetails = [...labDetails];

        let teamDetails: any = [];
        let element:any = document.getElementById("Lab");
        element.value = "Select";
        element = document.getElementById("Team");
        element.value = "Select";
        setselectedLAB(labDetails);

    };

    const SelLabCall = (e: any) => {
        let teamDetails: any = [];
        let element:any = document.getElementById("Team");
        element.value = "Select";
        projects.forEach(proj => {
            proj.labDetails.forEach(lab => {
                if (lab.name === e.target.value) {
                    lab.teamDetails.forEach(team => { teamDetails.push(<option value={team.id}>{team.name}</option>) })
                }
            });
        });
        setselectedTeam(teamDetails);
    };

    return (

        <>
            <h1 className='screenheader'>Create New Request</h1>
            <form className='form'>
                <div>
                    <label>Provide Employee ID: </label>
                    <input type='text' ></input>
                </div>
                <br />
                <br />
                <div>
                    <label>Select Platform BU: </label>
                    <select name="BU" id="BU" defaultValue={['Select']} onChange={(event) => SelProjectCall(event)}>
                        <option value="Select">Select</option>
                        {projects.map(proj => <option key={proj.name} value={proj.name}>{proj.name}</option>)}
                    </select>
                </div>
                <br />
                <br />
                <div>
                    <label>Select Lab: </label>
                    <select name="Lab" id="Lab" onChange={(event) => SelLabCall(event)}>
                    <option value="Select">Select</option>
                    {selectedLAB}
                    </select>
                        {/* {selectedLAB.map(data => <option value={data}>{data}</option>)} */}
                        {/* {projects.filter(proj => proj.name===selectedBU)[0].labDetails.map(lab => <option value={lab.name}>{lab.name}</option>)} */}
                    {/* </select> */}
                </div>
                <br />
                <br />
                <div>
                    <label>Select Feature Team: </label>
                    <select name="Team" id="Team">
                        <option value="Select">Select</option>
                        {selectedTeam}
                    </select>
                </div>
                <br />
                <br />
                <div>
                    <label>Select Role: </label>
                    <select name="Role" id="Role">
                        <option value="QE">QE</option>
                        <option value="Dev">Dev</option>
                        <option value="Lead">Lead</option>
                    </select>
                </div>
                <br />
                <br />
                <button className="lyds-button" >
                    Submit Request
                </button>
            </form>
        </>


    );
}

function BU() {
    return (
        <>
            <div>
                <label>Select Platform BU: </label>
                <select name="BU" id="BU" onChange={e => (e.target.value)}>
                    Select Platform:
                    {projects.map(proj => <option>{proj.name}</option>)}
                </select>
            </div>
        </>
    );
}

function LAB() {
    return (
        <>
            <div>
                <label>Select Lab: </label>
                <select name="Lab" id="Lab">
                    {projects[0].labDetails.map(lab => <option>{lab.name}</option>)}
                </select>
            </div>
        </>
    );
}

function FT() {
    return (
        <>
            <div>
                <label>Select Feature Team: </label>
                <select name="FT" id="FT">
                    {projects[0].labDetails[0].teamDetails.map(team => <option>{team.name}</option>)}
                </select>
            </div>
        </>
    );
}

function Role() {
    return (
        <>
            <div>
                <label>Select Role: </label>
                <select name="Role" id="Role">
                    <option value="QE">QE</option>
                    <option value="Dev">Dev</option>
                    <option value="Lead">Lead</option>
                </select>
            </div>
        </>
    );
}

export default CreateNewRequest;