import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.PNG'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import {userReducer} from '../../Redux/userReducer'
//import '../Card/Card.css'

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(state => state.userReducer);
    const {fullName}=user.user;
    //console.log(fullName);
   // console.log(user);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });
        navigate('/login');
    }


    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand ms-5">
                        <img src={logo} height='45px' alt='logo ' />
                    </NavLink>
                    <form className="d-flex me-md-5" role="search ">
                        <input className=" searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <NavLink className="nav-link   searchIcon  allIcon fs-5 text-dark" href="#simple-list-item-1"><i className="fa-solid fa-magnifying-glass"></i></NavLink>
                        <NavLink className="nav-link allIcon ms-5 me-5 fs-5 text-dark" to="/posts"><i className="fa-solid fa-house"></i></NavLink>
                        {fullName!==undefined ?

                                 

                            <a className="nav-link allIcon me-5 fs-5 text-dark" href="#simple-list-item-2"><i className="fa-regular fa-heart"></i></a> : ""}
                        
                            
                         {
                            fullName!==undefined ?
                                <div className="dropdown">
                                    <>
                                        <a className=" " href="#" role="button" data-bs-toggle="dropdown">
                                            <img className='mt-3 mt-md-0  navbar-profile-pic ' src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="profile pic" />
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li><NavLink className="nav-link  ms-3" to='/myprofile'>My Profile</NavLink> </li>

                                            <li><a onClick={() => { logout() }} className="dropdown-item" href="#">Log Out</a></li>

                                        </ul>
                                    </>

                                </div>
                                : ""}


                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;