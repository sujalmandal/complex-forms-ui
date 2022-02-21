import './StateView.css';
import axios from 'axios';
import {useState} from "react";

const StateComponent = function(){

    const [isStartState, setStartState] = useState(true);
    const [currentForm, setCurrentForm] = useState([]);

    const getNextState = function(){
        axios.post("http://localhost:8080/state/process",{}).then(res => {
            setCurrentForm(res.data.formToFill.elements);
            setStartState(false);
        });
    }


    const currentStateTemplate = <button onClick={getNextState}>Start</button>;

    return (
    <div className='state-view' id="state-view">
        {currentForm.map(element=>{
            console.log(element)
            return (
            <div key={'div_'+element.id}>
                <input id={element.id} name={element.name} type={element.type} placeholder={element.label}></input><br/>
            </div>
            )
        })}
        {isStartState==true?currentStateTemplate:""}
    </div>
    );

}

export {StateComponent as StateViewComponent}; 