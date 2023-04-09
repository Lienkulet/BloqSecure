import React from 'react'
import Image from 'next/image'

const BlogBanner = () => {
  return (
    <div className='blogBanner'>
        <div className="blogBanner-block">
            <Image 
            width={673} 
            height={472} 
            className='image'
            />
        </div>
        <div className="blogBanner-block">
        <h3 className='categoryBtn'>CATEGORY</h3>
      <div>
      <h1>Date</h1>
        <h5>Author</h5>
        </div>
        <p>An API that allows your users to pay in fiat currency
          to interact with your smart contracts</p>
      
        </div>
    </div>
  )
}

export default BlogBanner