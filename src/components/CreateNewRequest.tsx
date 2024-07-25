import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import projects from '../data/TicketsToApprove.json'


function CreateNewRequest() {
    const navigate = useNavigate();
    return (
        
        <>
        <h1 className='screenheader'>Create New Request</h1>
        <form className='form'>
        <div>
        <label>Provide Employee ID: </label>
        <input type='text' ></input>
        </div>  
        <br/>
        <br/> 
        <BU/>
       <br/>
       <br/>
       <div>
        <label>Select Lab: </label>
        <select name="Lab" id="Lab">
            <option value="MA">MA</option>
            <option value="ECP">Opel</option>
        </select>
        </div>
        <br/>
        <br/>
        <div>
        <label>Select Feature Team: </label>
        <select name="Project" id="Project">
            <option value="Goals">Goals</option>
            <option value="INF">INF</option>
            <option value="PNF">PNF</option>
        </select>
        </div>
        <br/>
        <br/>
        <div>
        <label>Select Role: </label>
        <select name="Project" id="Project">
            <option value="QE">QE</option>
            <option value="Dev">Dev</option>
            <option value="Lead">Lead</option>
        </select>
        </div>
        <br/>
        <br/>
            <button className="lyds-button" onClick={() => navigate('MyProfile', { replace: true })}>
                Submit Request
            </button>
        </form>
        </>


    );
}

function BU(){
    
    
    

    return(
        <>   
        <label>Select Platform: </label>
        <select name="Platform" id="Platform">
            Select Platform:
            <option value="CR">CR</option>
            <option value="CT">CT</option>
        </select>
       </>
    );
}

export default CreateNewRequest;