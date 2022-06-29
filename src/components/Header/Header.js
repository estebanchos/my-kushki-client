import './Header.scss';
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react';

function Header({ isAuth }) {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='container'>
            <header className='header'>
                <div className='header__top'>
                    <span className='header__logo'>My Kushki</span>
                    <div className='header__top-right'>
                        <span className='header__auth'>{isAuth ? 'Sign Out' : 'Sign In'}</span>
                        <Hamburger toggled={showNav} toggle={setShowNav} color='#fff' rounded label='Show navigation menu' />
                    </div>
                </div>
                <nav className='header__nav'>

                </nav>
            </header>
        </div>
    );
}

export default Header;