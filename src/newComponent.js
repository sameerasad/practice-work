import React from 'react'

const newComponent = () => {
    const [count, setCount] = useState(0)
    let [isDay, setDay] = useState(true)
    return (

        
            <div className={`box ${isDay ? "dayLight" : ""}`}>
            <Message counter={count} />
            <br/>
            <button onClick={()=>setCount(count+1)} className="button" >Click Me</button>


            
            <br/>
            <br/>

            <button onClick={()=>setCount(count-1)} className="button">Click Me For Decrement</button>
            <br/>
            <br/>
            <button onClick={()=>setDay(!isDay)} className="button">changeColor</button>
            <h2>this is all about counter app</h2>
              
              
        
        </div>
    )
}

export default newComponent
