import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Post from "./post";
const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setBlogs(res.data.products)
        setRecords(res.data.products)
    })
      .catch((err) => console.log(err));
  }, []);
  const getInputData = (event)=>{
     setBlogs(records.filter(r=>r.title.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div className="posts">
      <div className="search-container">
        <input type="text" placeholder="search"
        onChange={getInputData} className="search-input" />
      </div>
      <div className="blog-icon">
        <h3>Blogs</h3>
        <i className="fa fa-calculator"></i>
      </div>
      <div className="main-container">
        <div className="posts-container">
          {blogs.map((blog, index) => {
            return <Post key={index} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Posts;
