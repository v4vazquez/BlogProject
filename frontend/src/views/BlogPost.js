import React from 'react'
import { useParams } from 'react-router-dom';
import BlogPostInfo from './BlogPostInfo'

import Blogs from "../components/Blogs"

const BlogPost = () => {
    const {blogname} = useParams();
    const blog = BlogPostInfo.find((blogpost) => blogpost.name === blogname);
    if(!blog) return <h1>You looking for something!?</h1>;
    const otherBlogs = BlogPostInfo.filter(blog => blog.name !== blogname)
  return (
    <div>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        {blog.title}
    </h1>
        {blog.content.map((paragraph, index ) =>(
            <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
                {paragraph}
                </p>
        ))}
        <h1>Other Articles</h1>
        <div><Blogs otherBlogs={otherBlogs}/></div>
    </div>
  );
};

export default BlogPost