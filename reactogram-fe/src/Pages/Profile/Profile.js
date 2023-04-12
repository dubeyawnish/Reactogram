import React, { useState, useEffect } from 'react'
import './Profile.css'
import { Button, Modal } from 'react-bootstrap'
import { API_BASE_URL } from '../../config';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const navigate = useNavigate();

  const user = useSelector(state => state.userReducer);

  const [image, setImage] = useState({ preview: '', data: '' });

  const [show, setShow] = useState(false);

  const [loader, setLoader] = useState(false);

  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [myallposts, setMyallposts] = useState([]);

  const [showDetail,setShowDetail]= useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPost, setShowPost] = useState(false);

  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true);
  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }


  const handleFileSelect = (event) => {
    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0]
    }
    setImage(img);
  }

  const handleImgUpload = async () => {
    let formData = new FormData();
    formData.append('file', image.data);
    const response = axios.post(`${API_BASE_URL}/uploadFile`, formData);
    return response;
  }

  const addPost = async () => {

    if (image.preview === '') {
      Swal.fire({
        icon: 'error',
        title: 'Post image is mandatory'
      })
    }
    else if (caption === '') {
      Swal.fire({
        icon: 'error',
        title: 'Post caption is mandatory'
      })

    }
    else if (location === '') {
      Swal.fire({
        icon: 'error',
        title: 'Post location is mandatory'
      })

    }

    else {
      setLoader(true);
      const imgRes = await handleImgUpload();
      // add validation rule for caption and loacation
      const request = { description: caption, location: location, image: `${API_BASE_URL}/files/${imgRes.data.fileName}` }
      // write api call to create post
      const postResponse = await axios.post(`${API_BASE_URL}/createpost`, request, CONFIG_OBJ);
      setLoader(false);
      if (postResponse.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Post created Successfully'
        })
        navigate('/posts')
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Some error occured while creating post'
        })
      }

    }



  }

  useEffect(() => {
    getMyallpost();
  }, [])



  const getMyallpost = async () => {
    const response = await axios.get(`${API_BASE_URL}/myallposts`, CONFIG_OBJ);
    if (response.status === 200) {
      setMyallposts(response.data.author);
     // debugger;
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Some error occured while getting all your  post'
      })
    }

  }
 

  const showPostDetails= (post)=>{
     setShowDetail(post);

  }

  const deletePost=async(postId)=>{

    const response=await axios.delete(`${API_BASE_URL}/deletepost/${postId}`,CONFIG_OBJ);
    if(response.status===200){
      getMyallpost();
      setShow(false);
      Swal.fire({
        icon:'success',
        title:'Post deleted successfully'
      })
  }
  }



  return (
    <div className='container shadow mt-3 p-4'>
      <div className='row'>
        <div className='col-md-6 '>

          <div className='d-flex flex-column '>
            <img className='img-fluid profil-pic p-2' src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Profile pic' />
            <p className='ms-3 fs-5 fw-bold'>{user.user.email}</p>
            <p className='ms-3 fs-5'>{user.user.fullName} </p>
            <p className='ms-3 fs-5'>UI/UX Designer @{user.user.fullName} follow @rhsul </p>
            <p className='ms-3 fs-5'>My portfolio on www.portfolio.com/{user.user.fullName} </p>

          </div>

        </div>
        <div className='col-md-6 d-flex flex-column  justify-content-between'>
          <div className='d-flex justify-content-equal'>
            <div className='count-section pe-md-5 pe-4 text-center fw-bold' >
              <h6> {myallposts.length}</h6>
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
            <button onClick={handlePostShow} className=' px-4  custom-btn custom-btn-white'>
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

        {
          myallposts.map((post) => {
            return (
              <div className='col-md-4 col-sm-12 mb-md-0  mb-2'>
                <div className="card "style={{width:'23rem',height:'15rem'}} >
                  <img onClick={()=>{showPostDetails(post);
                  handleShow();}}  src={post.image} className=" card-img-top" alt="post" />

                </div>
              </div>
            )
          })

        }





      </div>







      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <div className="dropdown">
            <a className="btn "   role="button" data-bs-toggle="dropdown">
              <i className=" fs-4 fa-solid fa-ellipsis"></i>


            </a>

            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"><i className=" px-2 fa-regular fa-pen-to-square"></i> Edit Post</a></li>
              <li><a className="dropdown-item" onClick={()=>{deletePost(showDetail._id)}}><i className="px-2 fa-regular fa-trash-can"></i> Delete Post</a></li>

            </ul>
          </div>

        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={showDetail.image} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={showDetail.image} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={showDetail.image} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>


              </div>
            </div>


            <div className='col-md-6'>
              <div className='row'>
                <div className='col-6 d-flex'>
                  <img className=' p-2 post-profile-pic ' src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="profile pic" />
                  <div>
                    <p className='pt-2 fs-6 fw-bold'>{showDetail.location}</p>
                    <p className='location'>{showDetail.description}</p>
                  </div>
                </div>

              </div>

              <div className='row mb-2'>
                <div className='col-12'><span className='ps-3  fs-6 text-muted'>2 hours Ago</span></div>
              </div>


              <div className='row'>
                <div className='col-12'>
                  <p className='ps-3'>Lorem ipusum</p>

                </div>
              </div>

              <div className=' mt-2'>
                <div className='col-6 d-flex '>
                  <i className="fs-4 ps-3 fa-regular fa-heart"></i>
                  <i className="fs-4 ps-3 fa-regular fa-comment"></i>
                  <i className="fs-4 ps-3 fa-solid fa-location-arrow"></i>
                </div>
                <div className='col-12 mt-2 '><span className=' ps-3 pe-2 fs-6  fw-bold'>200 Likes </span></div>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal>



      <Modal show={showPost} onHide={handlePostClose} size='lg' centered>
        <Modal.Header closeButton>
          <span className='fs-5 fw-bold'>Upload Post</span>

        </Modal.Header>
        <Modal.Body>
          <div className='row  '>
            <div className='col-md-6 col-sm-12 mb-3'>
              <div className='uploadBox'>
                <div className="dropZoneContainer">
                  <input name="file" type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" onChange={handleFileSelect} />
                  <div className="dropZoneOverlay">
                    {image.preview && <img src={image.preview} width='150' height='150' />}

                    <i className="fa-solid fa-cloud-arrow-up fs-1"></i><br />Upload Photo From Computer</div>
                </div>


              </div>

            </div>
            <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-between'>
              <div className='row'>
                <div className=' col-sm-12 mb-3'>
                  <div className="form-floating">
                    <textarea onChange={(e) => { setCaption(e.target.value) }} className="form-control" placeholder="Add Caption" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Add Caption</label>
                  </div>

                </div>
                <div className=' col-sm-12'>
                  <div className="form-floating mb-3">
                    <input onChange={(e) => { setLocation(e.target.value) }} type="text" className="form-control" id="floatingInput" placeholder="Add Location" />
                    <label for="floatingInput"><i className="fa-solid fa-location-dot"></i> Add Location</label>
                  </div>

                </div>
              </div>

              <div className='row'>
                <div className='col-sm-12'>
                  {loader ?
                    <div className='mb-3 col-md-12 text-center'>
                      <div className="  spinner-border text-primary" role="status">
                        <span className="visually-hidden"></span>
                      </div>
                    </div>
                    : ""}
                  <button onClick={() => { addPost() }} className=' custom-btn-pink px-4  custom-btn  float-end'>
                    <span className='fs-6 fw-bold'>Post</span>
                  </button>

                </div>
              </div>
            </div>

          </div>


        </Modal.Body>

      </Modal>



    </div>
  )
}

export default Profile;