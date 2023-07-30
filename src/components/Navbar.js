import React from 'react'

import { useDispatch } from 'react-redux'
import { logout } from '../actions/authAction'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        await dispatch(logout())
        navigate('/')
    }

    return (
        <>

            <nav className="navbar navbar-expand-md navbar-light bg-light p-3">
                <div className="container">

                    <NavLink to='/' className="navbar-brand">Navbar</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0 nav-home mx-md-auto">
                            <li className="nav-item mt-3 mt-md-0">
                                <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/about' className="nav-link" aria-current="page">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-link" aria-current="page">Contact</NavLink>
                            </li>

                        </ul>

                        <form className="d-flex justify-content-center mt-4 mt-md-0">
                            <NavLink className='link' onClick={handleLogOut}>LOGOUT</NavLink>
                        </form>
                    </div>

                </div>
            </nav>

        </>
    )
}
