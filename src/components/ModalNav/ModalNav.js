import { Link } from 'react-router-dom';
import './ModalNav.scss';
import expandIcon from '../../assets/icons/expand.svg'
import { useState } from 'react';

function ModalNav({ isShowingNav, showNavModal }) {

    const [isShowingLearn, setIsShowingLearn] = useState(false)
    const showLearnChildren = () => setIsShowingLearn(!isShowingLearn)

    return (
        <nav className={isShowingNav ? 'modal' : 'modal--hidden'}>
            <ul className='modal-nav'>
                <li className='modal-nav__item'>
                    <Link className='modal-nav__link' to='/' onClick={showNavModal}>Home</Link>
                </li>
                <li className='modal-nav__parent-item'>
                    <div className='modal-nav__parent-container'>
                        <Link className='modal-nav__link' to='/learn' onClick={showNavModal}>Learn</Link>
                        <img
                            className={`modal-nav__icon${isShowingLearn ? '--rotate' : ''}`}
                            src={expandIcon}
                            alt='icon to expand submenu'
                            onClick={showLearnChildren}
                        />
                    </div>
                    <ul className={`children${isShowingLearn ? '' : '--hidden'}`}>
                        <li className='children__item'>
                            <Link className='modal-nav__link' to='/learn/placeholder' onClick={showNavModal}>The Basics</Link>
                        </li>
                        <li className='children__item'>
                            <Link className='modal-nav__link' to='/learn/placeholder' onClick={showNavModal}>Intermediate</Link>
                        </li>
                        <li className='children__item'>
                            <Link className='modal-nav__link' to='/learn/placeholder' onClick={showNavModal}>Advanced</Link>
                        </li>
                    </ul>
                </li>
                <li className='modal-nav__item'>
                    <Link className='modal-nav__link' to='/dashboard' onClick={showNavModal}>Dashboard</Link>
                </li>
                <li className='modal-nav__item'>
                    <Link className='modal-nav__link' to='/contactus' onClick={showNavModal}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default ModalNav;