import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.PNG'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand ms-5">
                        <img src={logo} height='45px' alt='logo ' />
                    </NavLink>
                    <form className="d-flex me-md-5" role="search ">
                        <input className=" searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <a className="nav-link   searchIcon  allIcon fs-5 text-dark" href="#simple-list-item-1"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a className="nav-link allIcon ms-5 me-5 fs-5 text-dark" href="#simple-list-item-1"><i className="fa-solid fa-house"></i></a>
                        <a className="nav-link allIcon me-5 fs-5 text-dark" href="#simple-list-item-2"><i className="fa-regular fa-heart"></i></a>
                        <NavLink className="nav-link allIcon me-5 fs-5 text-dark" to='/myprofile'><i className="fa-solid fa-circle"></i></NavLink>

                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;