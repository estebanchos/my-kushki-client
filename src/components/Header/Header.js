import './Header.scss';
import { Cross as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import ModalNav from '../ModalNav/ModalNav';

function Header({ isAuth, userLoggedOut }) {

    const [isShowingNav, setShowNav] = useState(false)
    const showNavModal = () => setShowNav(!isShowingNav)
    const logOut = () => {
        sessionStorage.removeItem('token')
        userLoggedOut()
    }

    return (
        <div className='container'>
            <header className='header'>
                <div className='header__top'>
                    <Link
                        to='/'
                        className='header__logo-link'
                        onClick={() => setShowNav(false)}
                    >
                        <span className='header__logo'>my Kushki</span>
                    </Link>
                    <div className='header__top-right'>
                        <Link
                            to='/login'
                            className={`header__auth ${isAuth ? 'header__auth--hide' : ''}`}
                            onClick={() => setShowNav(false)}
                        >
                            Log In
                        </Link>
                        <button
                            className={`header__auth ${isAuth ? '' : 'header__auth--hide'}`}
                            onClick={() => {
                                logOut()
                                setShowNav(false)
                            }}>
                            Log Out
                        </button>
                        <Hamburger
                            toggled={isShowingNav}
                            toggle={setShowNav}
                            color='#fff'
                            rounded label='Show navigation menu'
                        />
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