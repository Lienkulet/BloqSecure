import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className='blog'>
      <Image 
      width={380}
       height={236} 
      className='image' 
      />
      <h3 className='categoryBtn'>CATEGORY</h3>
      <h1>Date</h1>
      <div>
        <h5>Author</h5>
        <p>An API that allows your users to pay in fiat currency
          to interact with your smart contracts</p>
      </div>
    </div>
  )
}

export default Blog