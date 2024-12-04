import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {
    function Changename() {
        const names = ["Page", "Website"]
        const int = Math.floor(Math.random() * 2)
        return names[int]
    }
    return (
        <div className="container">
            <div className='navbar'>
                <h3>Logo</h3>
                <ul>
                    <li><Link to='/home' >Home</Link></li>
                    <li> <Link to='/about' >About</Link></li>
                    <li> <Link to='/Service'>Service</Link></li>
                    <li> <Link to='/help'>help</Link></li>
                    <li> <Link to='/contact' >Contact</Link></li>
                </ul>
            </div>
            <div className='section1'>
            <p>Welcome To My {Changename()}</p>
                
            </div>
        </div>
    )
}
