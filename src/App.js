import React, {useState}  from 'react'
import {Message} from './Message'
import './App.css';

     const App = () => {
   
    const [count, setCount] = useState(0)
    let [isDay, setDay] = useState(true)

    return (
        <div className={`box ${isDay ? "dayLight" : ""}`}>
            <Message counter={count} />
            <br/>
            <button onClick={()=>setCount(count+1)}  >Click Me</button>


            
            <br/>
            <br/>

            <button onClick={()=>setCount(count-1)}>Click Me For Decrement</button>
            <br/>
            <br/>
            <button onClick={()=>setDay(!isDay)}>changeColor</button>
        </div>
    )
}

export default App
