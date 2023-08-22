import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components can also be implemented in react
//Props = it allows you to pass dynamic data throught react components
//Props are just arguments that you pass to react components they are passed by an attribute



const App = () =>  {
  //anything that uses the word use in react its a "Hook"
  //the first argument in the square brackets is the name of the component
  //the second argument is the setter function  
  const [counter, setCounter] = useState(0);

  //EVENTS = is an action that we interact
  /*CallBack function = is the one the doesnt have a name just an empty function*/

  
  return (
   <>
   <div className="app">
    <button onClick={() => setCounter((prevCount) => prevCount - 1)}>DECREMENT</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter((prevCount => prevCount + 1))}>INCREMENT</button>
   </div>
   </>
  );
}

export default App
