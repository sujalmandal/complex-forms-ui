import './StateView.css';
import axios from 'axios';
import {useState} from "react";

const StateComponent = function(){

    const [isStartState, setStartState] = useState(true);
    const [data, setData] = useState(null);
    const [request, setRequest] = useState({});
 
    const getNextState = function(nextAction){
        let reqBody={};
        if(nextAction){
            reqBody = {
                "request": request,
                "fromState": data?data.currentStep:"",
                "action": nextAction?nextAction:"",
                "sequence" : data.sequence
            }; 
        }
        axios.post("http://localhost:8080/state/process", reqBody).then(res => {
            setData(res.data);
            setStartState(false);
        });
    }

    return (
    <div className='state-view' id="state-view">
        {data?data.formToFill.elements.map((element)=> 
            <div key={'div_'+element.id}>
                <input id={element.id} name={element.name} type={element.type} placeholder={element.label} 
                onChange={(e)=>{
                    setRequest(prevState=> ({...prevState,[e.target.name]:e.target.value}));
                }}></input><br/>
            </div>
        ):""}
        {
            isStartState?
            <>
                <button onClick={()=>getNextState()}>Start</button>
            </>:
            <>
                <>{data.nextAction?<button onClick={()=>getNextState(data.nextAction)}>Next</button>:""}</>
                <>{data.backAction?<button onClick={()=>getNextState(data.nextAction)}>Back</button>:""}</>
            </>
        }
    </div>
    );

}

export {StateComponent as StateViewComponent}; 