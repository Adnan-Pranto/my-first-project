import { useEffect, useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs]= useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h1 className="text-4xl text-teal-700">Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;