import React from 'react'
import { useNavigate } from 'react-router-dom'

import './style.css'
const navbar = ["Home", "About", "Contact"]

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className="nav-bar">
            <ul className='nav'>
                {
                    navbar?.map((item, ind) => <li key={ind} className='nav-item'>{item}</li>)
                }
            </ul>

            <div className="sign-up">
                <button className='sign-up-button'>Sign up</button>
                <button className='sign-up-button' style={{ marginLeft: "12px" }} onClick={() => navigate("/users")}>Users</button>
            </div>
        </div>
    )
}

export default NavBar;