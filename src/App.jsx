import { useState } from 'react'

import './App.css'
import Header from './Components/Hader/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {

  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handelAddToBookmark = blog => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }
  const handelReadingTime = times =>{
    setReadingTime (readingTime+times);
    
  }

  return (
    <>


      <Header></Header>
      <div className='flex mx-auto p-4 my-6 max-w-7xl'>
        <Blogs
        handelReadingTime={handelReadingTime}
        handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmark bookmark={bookmark} readingTime={readingTime}></Bookmark>
      </div>

    </>
  )
}

export default App
