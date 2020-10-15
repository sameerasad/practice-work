import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';


const Child2 = () => {
    
 let [ state, dispatch] = useReducer(CounterReducer, 11)   
    return (
        <div>
            
            <h3>counter functionality using useReducer </h3>
            <span><p1>the value of reducer state:{state}</p1></span>
            <br/>
            <br/>

            <button onClick={()=>dispatch("increment")} >increament</button>
            <br/>
            <br/>
            <button  onClick={()=>dispatch("decrement")} >decreament</button>
            
            
        </div>
    )
}

export default Child2
