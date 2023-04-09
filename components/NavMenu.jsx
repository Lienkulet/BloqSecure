import React from 'react'
import Link from 'next/link'

const NavMenu = () => {
  return (
    <div className="sectionsMobile">
        <Link href='/HowItWorks' className='section'>
        How It Works
        </Link>
        <Link href='/' className='section' >
        Documentation
        </Link>
        <Link href='/Blogs' className='section'>
        Blogs
        </Link>
        <Link href='/Team' className='section'>
        Team
        </Link>
      </div>
  )
}

export default NavMenu