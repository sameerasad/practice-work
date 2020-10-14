import React,{useState} from 'react';
import {Parent} from './Parent';
import dataContext from './DataContext';



function App() {
  const setData = useState(2)
 return (
    <dataContext.Provider value ={setData}>
      <div >
        <Parent  name ="sameerasad" />

      </div>
    </dataContext.Provider>
  );
}

export default App;
