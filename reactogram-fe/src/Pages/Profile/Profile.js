import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container shadow mt-3 p-4'>
      <div className='row'>
        <div className='col-md-6 '>

          <div className='d-flex flex-column '>
            <img className='img-fluid profil-pic p-2' src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Profile pic' />
            <p className='ms-3 fs-5 fw-bold'>john_doe_ful4</p>
            <p className='ms-3 fs-5'>john doe </p>
            <p className='ms-3 fs-5'>UI/UX Designer @udonixo follow @rhsul </p>
            <p className='ms-3 fs-5'>My portfolio on www.portfolio.com/jhon </p>

          </div>

        </div>
        <div className='col-md-6 d-flex flex-column  justify-content-between'>
          <div className='d-flex justify-content-equal'>
            <div className='count-section pe-md-5 pe-4 text-center fw-bold' >
              <h6> 10</h6>
              <p> Post</p>
            </div>
            <div className='count-section text-center fw-bold ps-md-5 pe-md-5 ps-4 pe-4'>
              <h6> 20</h6>
              <p> Followers</p>
            </div>
            <div className='ps-md-5 ps-4 text-center fw-bold'>
              <h6> 20</h6>
              <p> Following</p>
            </div>

          </div>
          <div className='mx-auto mt-md-0 mt-4' >
            <button className='px-md-4 custom-btn custom-btn-white me-md-3 me-2'>
              <span className='fs-6'>Edit Profile</span>
            </button>
            <button className=' px-4  custom-btn custom-btn-white'>
              <span className='fs-6'>Upload Post</span>
            </button>

          </div>

        </div>
      </div>

      <div className=' row my-3'>
        <div className='col-12'>
          <hr />
        </div>
      </div>

      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12 mb-md-0  mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className=" card-img-top" alt="..."/>
              
          </div>
        </div>

        <div className='col-md-4 col-sm-12 mb-md-0 mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className=" card-img-top" alt="..."/>
              
          </div>
        </div>

        <div className='col-md-4 col-sm-12 mb-md-0 mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
              
          </div>
        </div>
      </div>

      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12 mb-md-0  mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className=" card-img-top" alt="..."/>
              
          </div>
        </div>

        <div className='col-md-4 col-sm-12 mb-md-0 mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className=" card-img-top" alt="..."/>
              
          </div>
        </div>

        <div className='col-md-4 col-sm-12 mb-md-0 mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
              
          </div>
        </div>
      </div>

      <div className='row mb-4'>
        <div className='col-md-4 col-sm-12 mb-md-0  mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className=" card-img-top" alt="..."/>
              
          </div>
        </div>

        <div className='col-md-4 col-sm-12 mb-md-0 mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className=" card-img-top" alt="..."/>
              
          </div>
        </div>

        <div className='col-md-4 col-sm-12 mb-md-0 mb-2'>
          <div className="card" >
            <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
              
          </div>
        </div>
      </div>

     
    </div>
  )
}

export default Profile;