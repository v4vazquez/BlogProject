import React from 'react'
import {Link } from 'react-router-dom';



const Blogs = ({blogs}) => {
  return (
    <div>
       {blogs.map((blogpost,index)=>(
            
            <div key ={index}>
                <div>
                    <Link to={`/blogpost/${blogpost.name}`}>
                    <img src={blogpost.thumbnail} alt="blog" />
                    </Link>
                        <div>
                        <Link key={index} to={`/blogpost/${blogpost.name}`}>
                            <h2>{blogpost.title}</h2>
                        </Link>
                        <p>{blogpost.content[0].substring(0,110)}...</p>
                        <div>
                            <Link to={`/blogpost/${blogpost.name}`}> Read more!</Link>
                        </div>
                        </div>
                </div>
            </div>
            
            ))}

    </div>
  )
}

export default Blogs