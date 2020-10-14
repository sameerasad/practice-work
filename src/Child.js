import React,{useContext} from 'react'
import dataContext from './DataContext';
import { bindElementToQueries } from '@testing-library/react';



export const Child = (props) => {
    

     let counterValue = useContext(dataContext) 
     console.log(counterValue);
    
    
    return (
        <div>
            <h1>This is the first child {props.name}!</h1>
            <p>the counter value is:{counterValue[0]}</p>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>INCREAMENT COUNTER</button>
            <br/>
            <br/>
           < button onClick={()=>{counterValue[1](--counterValue[0])}}>DECREAMENT COUNTER</button> 
        

        </div>
    )
}
