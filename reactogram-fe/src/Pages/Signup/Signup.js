import React, { useState } from 'react'
import SocialDesk from '../../Images/social-desktop.PNG';
import SocialMob from '../../Images/social-mobile.PNG';
import { Link } from 'react-router-dom';
import './Signup.css'
import axios from 'axios';
import Swal from "sweetalert2";
import { API_BASE_URL } from '../../config';

const Signup = () => {

     const [fullName, setFullName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [loader, setLoader] = useState(false);


     const signup = (event) => {
          event.preventDefault();
          setLoader(true);

          const requestData = { fullName: fullName, email, password };
          axios.post(`${API_BASE_URL}/signup`, requestData)
               .then((result) => {
                    if (result.status === 201) {
                         setLoader(false);
                         Swal.fire({
                              icon: 'success',
                              title: 'User successfully registered'
                         });
                    }
                    setEmail("");
                    setFullName("");
                    setPassword("");
               })
               .catch((error) => {
                    console.log(error);
                    setLoader(false);
                    Swal.fire({
                         icon: 'error',
                         title: 'Some error occured please try again later!'
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

                                   <h4 className="card-title text-center fw-bold">Sign Up</h4>
                                   <form onSubmit={(e) => signup(e)}>
                                        <input type="text" className="p-2 mb-2 mt-4 form-control input-bg" placeholder='Phone ' />

                                        <input value={email} type="email" onChange={(e) => { setEmail(e.target.value) }} className="p-2 mb-2  form-control input-bg" placeholder='Email' />
                                        <input value={fullName} type="text" onChange={(e) => { setFullName(e.target.value) }} className="p-2 mb-2  form-control input-bg" placeholder='Full name' />
                                        <input value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} className="p-2 my-2 form-control input-bg" placeholder='Password' />
                                        <div className="mt-3 d-grid">
                                             <button type="submit" className="custom-btn custom-btn-blue">Sign Up</button>
                                        </div>
                                        <div className='my-4'>
                                             <hr />
                                             <h5 className='text-center text-muted'>OR</h5>
                                             <hr />
                                        </div>
                                        <div className="mt-3 mb-3 d-grid">
                                             <button className="custom-btn custom-btn-white"><span className='text-muted fs-6'>Already have an account?</span><Link to='/login' className='ms-1 text-info fw-bold'> Login</Link></button>
                                        </div>



                                   </form>

                              </div>
                         </div>
                    </div>
               </div>

          </div>
     )
}

export default Signup;