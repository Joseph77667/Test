import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello Vite + React!</h1>
      <img src={reactLogo} alt="react logo" width="200" />
      <img src={viteLogo} alt="vite logo" width="200" />
      <button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </div>  
  )
}

export default App
