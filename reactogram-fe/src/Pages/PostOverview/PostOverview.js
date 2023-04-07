import React from 'react'
import './PostOverview.css'
import Card from '../../Components/Card/Card';

const PostOverview = () => {
  return (
    <div className='container'>
        <div className='row mt-md-5 mt-3'>
            <div className='col-md-4 mb-2'>
                <Card />
            </div>
            <div className='col-md-4 mb-2'>
                <Card />
            </div>
            <div className='col-md-4 mb-2'>
                <Card />
            </div>

        </div>
        
    </div>
  )
}

export default PostOverview;