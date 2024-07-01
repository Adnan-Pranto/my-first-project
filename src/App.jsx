import { useState } from 'react'

import './App.css'
import Header from './Components/Hader/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {


  return (
    <>

      <Header></Header>
      <div className='flex items-center mx-3 p-4 my-6'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>

    </>
  )
}

export default App
