import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './routes/home'
import TestComponent from './routes/testComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <button id="next">{">"}</button>
      <button id="prev">{"<"}</button>
      <div id="bgStripe"/>
    </>
  )
}

export default App
