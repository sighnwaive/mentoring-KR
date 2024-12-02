import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("")
  const inputHandler=(event)=>{
    setUserInput(event.target.value);
  }
  return (
    <div className="App">
      <input type='text' onChange={inputHandler}>
      
      </input>
      <div>
      {userInput}
      </div>
    </div>
  );
}

export default App;
