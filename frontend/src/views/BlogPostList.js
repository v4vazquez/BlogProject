import React from 'react'

import BlogPostInfo from "./BlogPostInfo";
import Blogs from "../components/Blogs";

function BlogPostList() {
  return (
    <div>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>All Blog posts</h1>
    <div>
        <div>
            <Blogs blogs ={BlogPostInfo}/>
        </div>
    </div>
    </div>
  )
}

export default BlogPostList