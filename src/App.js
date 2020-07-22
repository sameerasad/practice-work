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
            <h2>this is all about counter app</h2>
              <h3>value of count-{props.count}</h3>
               <h3>value of count-{props.count}</h3>
        </div>
    )
}

export default App
