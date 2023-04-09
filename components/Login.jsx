import { useStateContext } from '@/context/StateContext';
import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';

const Login = () => {
    const { setShowLogin } = useStateContext();

  return (
    <div className='login-wrapper'>
        <div className="login-container">
            <div className="exit">
                <AiOutlineClose size={"2rem"} onClick={() => setShowLogin(0)} />
            </div>
            <div className="login-header">
                <h1>Hi There!</h1>
            </div>
            <div className="login-details">
                <div className="detail">
                    <h5>Username</h5>
                    <input type="text" />
                </div>
                <div className="detail">
                    <h5>Password</h5>
                    <input type="password" />
                </div>
            </div>
            <div className="login-buttons">
                <button className='submitBtn'>Login</button>
                <button className='signUpBtn'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Login