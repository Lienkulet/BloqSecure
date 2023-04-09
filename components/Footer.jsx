import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="items">
      <div className="subscribe">
        <h1>SUBSCRIBE TO THE NEWSLETTER</h1>
        <div className="email">
          <input type="email" placeholder='Enter your email addres' />
          <button className='submitBtn'>Submit</button>
        </div>
        <div className="descrpition">
          <p>By submitting this form, you agree to receive marketing and other communications
            from BloqFin about the BloqFin Products and other company updates. You can unsubscribe
            from these communications at any time. For more information on our privacy practices,
            please review our <Link href='/' className='privacy'>Privacy Policy</Link>.</p>
        </div>
      </div>
      <div className="socials">
        <h1>FOLLOW BLOQFIN ON SOCIAL MEDIA</h1>
      
      </div>
      </div>
      
    </div>
  )
}

export default Footer