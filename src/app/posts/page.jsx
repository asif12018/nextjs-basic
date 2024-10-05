import React from 'react'
import { getPosts } from '../services/postApi';
import Link from 'next/link';

// server side rendering 

// const getPosts = async () => { 
//    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

//    const data = await res.json();
//    return data;

// }

const PostPage = async() => {
    const postsData = await getPosts();
    // console.log(postsData);
    return (
        <div>
            <h6>All post</h6>
            <div className='grid grid-cols-4 gap-3'>
              {
                postsData?.map((post)=><div className='border p-4 rounded-md' key={post.title}>
                   <h6>title:{post.title}</h6>
                   <h6>body:{post.body}</h6>
                   <button className='p-2 bg-cyan-300 rounded-xl'><Link href={`/posts/${post.id}`}>Details</Link></button>
                </div>)
              }
            </div>
        </div>
    )
}

export default PostPage
