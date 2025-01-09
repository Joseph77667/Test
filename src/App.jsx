import { useState } from 'react'
import { Link , Outlet} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    <main>
      <Outlet />
    </main>
    </> 
  )
}

export default App
