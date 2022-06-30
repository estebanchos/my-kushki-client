import './Header.scss';
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import ModalNav from '../ModalNav/ModalNav';

function Header({ isAuth }) {

    const [isShowingNav, setShowNav] = useState(false)
    const showNavModal = () => setShowNav(!isShowingNav)

    return (
        <div className='container'>
            <header className='header'>
                <div className='header__top'>
                    <Link to='/' className='header__logo-link'>
                        <span className='header__logo'>My Kushki</span>
                    </Link>
                    <div className='header__top-right'>
                        <Link to='/login' className='header__auth'>{isAuth ? 'Log Out' : 'Log In'}</Link>
                        <Hamburger toggled={isShowingNav} toggle={setShowNav} color='#fff' rounded label='Show navigation menu' />
                    </div>
                </div>
                <div className='header__nav'>
                    <Nav />
                </div>
            </header>
            <ModalNav isShowingNav={isShowingNav} showNavModal={showNavModal} />
        </div>
    );
}

export default Header;