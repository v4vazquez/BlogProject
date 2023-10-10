import React from 'react'
import {Link} from 'react-router-dom'

function navbar() {
  return (
    <nav className ="border-b-4 border-blue-700 text-center fixed top-0 bg-blue-600 font-bold w-full txt-lg text-white">
        <ul>
            <li className ="inline-block py-4">
            <Link to="/" className="pl-6 pr-8">Home</Link>
            </li>

            <li className ="inline-block py-4">
            <Link to="/about" className="pl-6 pr-8">About</Link>
            </li>

            <li className ="inline-block py-4">
            <Link to="/blogpostlist" className="pl-6 pr-8">Blog Posts</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar