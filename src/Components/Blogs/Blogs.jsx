import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handelAddToBookmark, handelReadingTime }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            {/* <h1 className="text-4xl text-teal-700">Blogs: {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    handelReadingTime={handelReadingTime}
                    handelAddToBookmark={handelAddToBookmark}
                    blog={blog}> </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handelAddToBookmark: PropTypes.func,
    handelReadingTime: PropTypes.func
}

export default Blogs;