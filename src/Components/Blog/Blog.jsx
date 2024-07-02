import { FcBookmark } from "react-icons/fc";
import PropTypes from 'prop-types';
const Blog = ({ blog, handelAddToBookmark }) => {
    const { title, cover, author, author_img, reading_time,
        hashtags, posted_date } = blog;
    return (
        <div className='my-5 p-3 mb-20'>
            <img className='rounded-2xl mb-8' src={cover} alt={`cover pic title ${title}`} />
            <section className='my-5 flex justify-between'>
                <div className="flex mx-5 items-center">
                    {/* Author name & Photo section  */}

                    <img className='w-16 h-10 rounded-full' src={author_img} alt="" />

                    <div className='ml-5'>
                        <p className='font-bold text-2xl'>{author}</p>
                        <small className='text-gray-500'>{posted_date}</small>

                    </div>
                </div>
                {/* Time management section  */}
                <div className="flex items-center gap-2">
                    <p><small className='text-gray-500 text-xl'>{reading_time} min read</small></p>
                    <button onClick={handelAddToBookmark} className="text-xl"><FcBookmark></FcBookmark></button>
                </div>
            </section>
            {/* Title Section  */}
            <div >
                <h1 className='text-2xl my-5 font-semibold'>{title}</h1>
                <p>
                    {
                        hashtags.map((hash, idx) => <span key={idx} className='ml-4 text-green-700 font-semibold'> <a href=''>#{hash} </a> </span>)
                    }
                </p>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;