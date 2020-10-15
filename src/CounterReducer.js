
 const  CounterReducer =(state, action)=> {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1

    case "reset":
        return state + 0 
    
  }
}
export default CounterReducer;
