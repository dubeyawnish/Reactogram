import React, { useState } from 'react'
import './PostOverview.css'
import Card from '../../Components/Card/Card';
import { useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import Swal from 'sweetalert2';

const PostOverview = () => {
    const [allPost, setAllPost] = useState([]);


    const getAllPost = async () => {
        //console.log("all post");
        const response = await axios.get(`${API_BASE_URL}/allposts`);
        if (response.status === 200) {
            setAllPost(response.data.author);
            //debugger;
        }
        else {
            Swal.fire({
                icon: "error",
                title: 'Some error occured while getting all posts'
            })
        }

    }

    useEffect(() => {
        getAllPost();
    }, [])



    return (
        <div className='container'>
            <div className='row mt-md-5 mt-3'>

                {
                    allPost.map((post) => {
                        return (
                            <div className='col-md-4 mb-2'>
                                <Card postData={post} />
                            </div>
                        )
                    })
                }



            </div>

        </div>
    )
}

export default PostOverview;