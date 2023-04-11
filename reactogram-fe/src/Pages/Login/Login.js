import React from 'react'
import './Login.css'
import SocialDesk from '../../Images/social-desktop.PNG';
import SocialMob from '../../Images/social-mobile.PNG';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';
import { API_BASE_URL } from '../../config';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {


     const dispatch=useDispatch();
     const navigate=useNavigate();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [loader, setLoader] = useState(false);


     const login = (event) => {
          event.preventDefault();
          setLoader(true);

          const requestData = { email, password };
          axios.post(`${API_BASE_URL}/login`, requestData)
               .then((result) => {
                    if (result.status === 201) {
                         setLoader(false);
                         localStorage.setItem("token",result.data.result.token);
                         localStorage.setItem('user',JSON.stringify(result.data.result.user));
                         dispatch({type:"LOGIN_SUCCESS",payload:result.data.result.user});
                         navigate('/myprofile')
                    }
                    setEmail("");

                    setPassword("");
               })
               .catch((error) => {
                    console.log(error);
                    setLoader(false);
                    Swal.fire({
                         icon: 'error',
                         title: error.response.data.error
                    })
               });
     }

     return (
          <div className="container login-container">
               <div className="row">
                    <div className=" col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
                         <img className='socialDesktop' style={{ height: '85%' }} src={SocialDesk} alt="social img" />
                         <img className='socialMobile' src={SocialMob} alt="social img" />
                    </div>
                    <div className="col-md-5 col-sm-12 ">
                         <div className="card shadow mb-5 bg-body rounded" >
                              <div className="card-body px-5">
                                   {loader ?
                                        <div className='mb-3 col-md-12 text-center'>
                                             <div class="  spinner-border text-primary" role="status">
                                                  <span class="visually-hidden"></span>
                                             </div>
                                        </div>
                                        : ""}

                                   <h4 className="card-title text-center fw-bold">Log In</h4>
                                   <form onSubmit={(e) => { login(e) }}>

                                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="p-2 mb-2 mt-4 form-control input-bg" placeholder='Phone number,username or email' />
                                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="p-2 my-2 form-control input-bg" placeholder='Password' />
                                        <div className="mt-3 d-grid">
                                             <button type="submit" className="custom-btn custom-btn-blue">Log in</button>
                                        </div>
                                        <div className='my-4'>
                                             <hr />
                                             <h5 className='text-center text-muted'>OR</h5>
                                             <hr />
                                        </div>
                                        <div className=" mb-5 mt-3 d-grid">
                                             <button className="custom-btn custom-btn-white"><span className='text-muted fs-6'>Dont't have an account?</span><Link to='/signup' className='ms-1 text-info fw-bold'> Signup</Link></button>
                                        </div>



                                   </form>

                              </div>
                         </div>
                    </div>
               </div>

          </div>
     )
}

export default Login;