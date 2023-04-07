import React from 'react'
import './Card.css'


const Card = () => {
    return (
        <div >
            <div className="card shadow  " >
                <div className="card-body ">
                    <div className='row'>
                        <div className='col-6 d-flex'>
                            <img className=' p-2 profile-pic ' src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="profile pic" />
                            <div>
                                <p className='pt-2 fs-6 fw-bold'>Title</p>
                                <p className='location'>Description</p>
                            </div>
                        </div>
                        <div className='col-6 '>
                            <span className='float-end'><i className=" fs-3 mt-3 fa-solid fa-ellipsis-vertical"></i></span>
                        </div>
                    </div>
                   <div className='row'>
                      <div className='col-12'>
                        <img style={{borderRadius:"15px"}} className='img-fluid' src="https://images.unsplash.com/photo-1680809717295-57f2d693ad3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=" post pic"/>

                      </div>
                   </div>

                   <div className='row mt-2'>
                      <div className='col-6 d-flex '>
                      <i class="fs-4 ps-3 fa-regular fa-heart"></i>
                      <i class="fs-4 ps-3 fa-regular fa-comment"></i>
                      <i class="fs-4 ps-3 fa-solid fa-location-arrow"></i>
                      </div>
                      <div className='col-6'><span className='pe-2 fs-6 float-end fw-bold'>200 Likes</span></div>
                   </div>

                   <div className='row'>
                      <div className='col-12'><span className='ps-3 text-muted'>2 hours</span></div>
                   </div>


                </div>
            </div>
        </div>
    )
}

export default Card;