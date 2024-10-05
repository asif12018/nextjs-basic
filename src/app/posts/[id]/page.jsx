import { getSinlgePost } from '@/app/services/singlePostApi';
import React from 'react';

const PostDetails = async({params}) => {
    console.log(params.id)
    const postSingleData = await getSinlgePost(params.id)
    // console.log(postSingleData);
    return (
        <div className='border p-4 rounded-md'>
            <h6>title:{postSingleData.title}</h6>
            <h6>body:{postSingleData.body}</h6>
            post details of {postSingleData.id}
        </div>
    );
};

export default PostDetails;