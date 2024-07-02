import PropTypes from 'prop-types';
import Bokmrk from '../Bokmrk/Bokmrk';

const Bookmark = ({bookmark,readingTime}) => {
    return (
        <section className='w-1/3 ml-2 text-center'>
            <div>
                <h2 className='text-2xl text-blue-600 font-bold p-5 my-6 rounded-md bg-purple-50'>Spent time on read: {readingTime} min</h2>
                
            </div>
           <div className=" bg-gray-100 py-28 pt-10 rounded-md">
           <h1 className="text-2xl font-bold">Bookmark Blogs: {bookmark.length}</h1> 
           {
            bookmark.map((book,idx) => <Bokmrk key={idx} bookmark={book}></Bokmrk>)
           }
        </div> 
        </section>
        
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmark;