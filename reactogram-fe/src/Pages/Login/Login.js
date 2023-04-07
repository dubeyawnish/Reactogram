import React from 'react'
import './Login.css'
import SocialDesk from '../../Images/social-desktop.PNG';

const Login = () => {
     return (
          <div className="container login-container">
               <div className="row">
                    <div className=" col-md-7 ">
                         <img src={SocialDesk} alt="social img" />
                    </div>
                    <div className="col-md-5 ">
                         <div className="card shadow p-3 mb-5 bg-body rounded" >
                              <div className="card-body px-5">
                                   <h4 className="card-title text-center fw-bold">Log In</h4>
                                   <form>
                                        
                                             <input  type="email" className="p-2 mb-2 mt-4 form-control input-bg" placeholder='Phone number,username or email'   />
                                             <input type="password" className="p-2 my-2 form-control input-bg" placeholder='Password'/>
                                             <button type="submit" className="btn btn-primary">Submit</button>
                                        
                                   </form>

                              </div>
                         </div>
                    </div>
               </div>

          </div>
     )
}

export default Login;