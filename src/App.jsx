import { useState } from 'react'
import { ReactDOM } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const getCurrentDate = () => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Adding leading zero if needed
    const day = String(dateObj.getDate()).padStart(2, '0'); // Adding leading zero if needed
    return `${year}-${month}-${day}`;

  };

  return (
    <>
      <h2>Date</h2>
      <h2>{getCurrentDate()}</h2>
      <h1>KAAm karo</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
