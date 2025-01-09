import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl"><Link to="/">Logo</Link></h1>
        </div>
        <div>
          <ul className="flex space-x-5 list-none">
          <li>
            <Link to="/" 
            className="list-none hover:text-orange-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" 
            className="list-none hover:text-orange-400">
              Product
            </Link>
          </li>
          <li>
            <Link to="/about" 
            className="list-none hover:text-orange-400">
              About
            </Link>
          </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
