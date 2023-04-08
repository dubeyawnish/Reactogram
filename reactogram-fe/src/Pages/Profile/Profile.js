import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container shadow mt-3 p-4'>
       <div className='row'>
           <div className='col-md-6 '>
             
             <div className='d-flex flex-column '>
              <img className='img-fluid profil-pic p-2' src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Profile pic'  />
              <p className='ms-3 fs-5 fw-bold'>john_doe_ful4</p>
              <p className='ms-3 fs-5'>john doe </p>
              <p className='ms-3 fs-5'>UI/UX Designer @udonixo follow @rhsul </p>
              <p className='ms-3 fs-5'>My portfolio on www.portfolio.com/jhon </p>

             </div>

           </div>
           <div className='col-md-6 d-flex flex-column  justify-content-between'>
              <div className='d-flex justify-content-equal'>
                <div className='count-section pe-5 text-center fw-bold' >
                   <h6> 10</h6>
                   <p> Post</p>
                </div>
                <div className='count-section text-center fw-bold ps-5 pe-5'>
                   <h6> 20</h6>
                   <p> Followers</p>
                </div>
                <div className='ps-5 text-center fw-bold'>
                   <h6> 20</h6>
                   <p> Following</p>
                </div>

              </div>
              <div>bottom</div>
            
           </div>
       </div>
    </div>
  )
}

export default Profile;