import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.PNG'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5">
                        <img src={logo} height='45px' alt='logo ' />
                    </a>
                    <form className="d-flex me-md-5" role="search ">
                        <input className=" searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <a className="nav-link   searchIcon  allIcon fs-5 text-dark" href="#simple-list-item-1"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a className="nav-link allIcon ms-5 me-5 fs-5 text-dark" href="#simple-list-item-1"><i className="fa-solid fa-house"></i></a>
                        <a className="nav-link allIcon me-5 fs-5 text-dark" href="#simple-list-item-2"><i className="fa-regular fa-heart"></i></a>
                        <a className="nav-link allIcon me-5 fs-5 text-dark" href="#simple-list-item-3"><i className="fa-solid fa-circle"></i></a>

                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;