import React, { useState } from 'react';
import Link from 'next/link';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Login, NavMenu } from '.';
import { useStateContext } from '@/context/StateContext';

const Navbar = () => {

    const [howItWorks, setHowItWorks] = useState(false);
    const [documentation, setDocumentation] = useState(false);
    const [blogs, setBlogs] = useState(false);
    const [team, setTeam] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const { showLogin, setShowLogin} = useStateContext();
    

    const handlePageChange = (val1, val2, val3, val4) => {
        setHowItWorks(val1);
        setDocumentation(val2);
        setBlogs(val3);
        setTeam(val4);
    }

    return (
        <div className='navbar'>
            {showMenu? <NavMenu /> : ''}
            <Link href={'/'} className="logo" onClick={() => handlePageChange(0,0,0,0)}>
                <h1>Bloq</h1>
                <h1>Secure</h1>
            </Link>
            <div className="nav-options">
                <Link href={'/HowItWorks'} className={howItWorks? 'active nav-option' : 'nav-option'} onClick={() => handlePageChange(1,0,0,0)}>
                How it works
                </Link>
                <Link href={'/'} className={documentation? 'active nav-option' : 'nav-option'} onClick={() => handlePageChange(0,1,0,0)}>
                Documentation
                </Link>
                <Link href={'/Blogs'} className={blogs? 'active nav-option' : 'nav-option'} onClick={() => handlePageChange(0,0,1,0)}>
                Blog
                </Link>
                <Link href={'/Team'} className={team? 'active nav-option' : 'nav-option'} onClick={() => handlePageChange(0,0,0,1)}>
                Team
                </Link>
            </div>
            <div>
                <button className='navbtn' onClick={() => showLogin? setShowLogin(0) : setShowLogin(1)}>Get Started</button>
            </div>
            <div className="nav-mobile">
                <GiHamburgerMenu size={"3rem"}  onClick={() => showMenu==true? setShowMenu(0) : setShowMenu(1)} />
            </div>
           
        </div>
    )
}

export default Navbar