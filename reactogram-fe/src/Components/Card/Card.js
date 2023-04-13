import React, { useState } from 'react'
import './Card.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../../config';


const Card = (props) => {
    const [commentBox, setCommentBox] = useState(false);
    const [comment, setComment] = useState('');

    const user = useSelector(state => state.userReducer);
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }

    const likeUnlikePost = async (postId, type) => {
        const request = { "postId": postId };
        const response = await axios.put(`${API_BASE_URL}/${type}`, request, CONFIG_OBJ);
        if (response.status === 200) {
            props.getAllPost();
        }
    }

    const submitComment = async (postId) => {
        setCommentBox(false);
        const request = { "postId": postId, "commentText": comment };
        const response = await axios.put(`${API_BASE_URL}/comment`, request, CONFIG_OBJ);
        console.log(response);
        if (response.status === 200) {
            props.getAllPost();
        }

    }


    return (
        <div >
            <div className="card shadow  "  >
                <div className="card-body  " >
                    <div className='row'>
                        <div className='col-6 d-flex'>
                            <img className=' p-2 post-profile-pic ' src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="profile pic" />
                            <div>
                                <p className='pt-2 fs-6 fw-bold'>{props.postData.author.fullName}</p>
                                <p className='location'>{props.postData.description}</p>
                            </div>
                        </div>
                        {props.postData.author._id === user.user._id ?
                            <div className='col-6 '>
                                <span style={{ cursor: 'pointer' }} onClick={() => props.deletePost(props.postData._id)} className='float-end'><i className=" fs-3 mt-3 fa-solid fa-ellipsis-vertical"></i></span>
                            </div> : ""}
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <img style={{ borderRadius: "15px" }} className='img-fluid post-img' src={props.postData.image} alt=" post pic" />

                        </div>
                    </div>


                    <div className='row mt-2'>
                        <div className='col-6 d-flex '>
                            <i onClick={() => { likeUnlikePost(props.postData._id, 'like') }} className="fs-4 ps-3 fa-regular fa-heart"></i>
                            <i onClick={() => { likeUnlikePost(props.postData._id, 'unlike') }} className="  fs-4 ps-3 fa-regular fa-thumbs-down"  ></i>
                            <i onClick={() => { setCommentBox(true) }} className="fs-4 ps-3 fa-regular fa-comment"></i>

                        </div>
                        <div className='col-6'><span className='pe-2 fs-6 float-end fw-bold'>{props.postData.likes.length} Likes </span></div>
                    </div>
                    <div className='row mt-2'>
                        {commentBox ?
                            <>
                                <div className='col-8'>
                                    <textarea onChange={(e) => { setComment(e.target.value) }} className='form-control'></textarea>
                                </div>
                                <div className='col-4'>
                                    <button className='btn btn-primary' onClick={() => submitComment(props.postData._id)}>Submit</button>
                                </div>
                            </> : ""}
                    </div>



                    {

                        props.postData.comments.map((comment) => {
                            return (
                                <div className='row'>
                                    <div className='col-12'>
                                        {comment.commentText} - {comment.commentedBy.fullName}

                                    </div>
                                </div>
                            )
                        })

                    }


                    <div className='row'>
                        <div className='col-12'><span className='ps-3 text-muted'>2 hours Ago</span></div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Card;