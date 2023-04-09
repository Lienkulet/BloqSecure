import { BlogBanner, Blog, Login } from '@/components'
import { useStateContext } from '@/context/StateContext';
import React from 'react'

const Blogs = () => {
  const { showLogin } = useStateContext();

  return (
    <div className='blogs'>
      {showLogin ? <Login /> : ''}
      <div className="blogheader">
        <p>An API that allows your users to pay in fiat currency to interact with your smart contracts</p>
      </div>

      <BlogBanner />

      <div className="blogs-display">
        <Blog />
        <Blog />
        <Blog />
      </div>

      <button className='viewBlogsBtn'>View all Blogs</button>
    </div>
  )
}

export default Blogs