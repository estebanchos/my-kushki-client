import './Header.scss';
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react';

function Header({isAuth}) {
    
    const [showNav, setShowNav] = useState(false)
    
    return ( 
        <header className='header'>
            <div className='header__top'>
                <Hamburger toggled={showNav} toggle={setShowNav} />
                <span className='header__logo'>My Kushki</span>
                <span className='header__auth'>{isAuth ? 'Sign Out' : 'Sign In'}</span>
            </div>
            <nav className='header__nav'>

            </nav>
        </header>
     );
}

export default Header;