import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Post = ({ blog, key }) => {
  return (
    <Link to={`/read/${blog.id}`} className="post-link">
     <div className="blog">
     <img className="blog-image" src={blog.thumbnail} alt="img" />
     <div className="blog-title">
       <h2>{blog.title}</h2>
       <p>{blog.description}</p>
     </div>
   </div>
    
    </Link>
  );
};

export default Post;
