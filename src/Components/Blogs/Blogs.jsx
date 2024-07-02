import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handelAddToBookmark}) => {
    const [blogs, setBlogs]= useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h1 className="text-4xl text-teal-700">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    handelAddToBookmark={handelAddToBookmark}
                     blog={blog}> </Blog>)
            }
        </div>
    );
};

export default Blogs;