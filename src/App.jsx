import { useState } from 'react'

import './App.css'
import Header from './Components/Hader/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {

  const [bookmask, setBookmark] = useState([]);
  const handelAddToBookmark = blog => {
    console.log('add soon');
  }

  return (
    <>


      <Header></Header>
      <div className='flex mx-auto p-4 my-6 max-w-7xl'>
        <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmark></Bookmark>
      </div>

    </>
  )
}

export default App
