import { Link } from 'react-router-dom';
import './ModalNav.scss';
import expandIcon from '../../assets/icons/expand.svg'
import { useState } from 'react';

function ModalNav({ isShowingNav }) {

    const [isShowingLearn, setIsShowingLearn] = useState(false)
    const showLearnChildren = () => setIsShowingLearn(!isShowingLearn)

    return (
        <nav className={isShowingNav ? 'modal' : 'modal--hidden'}>
            <ul className='modal-nav'>
                <li className='modal-nav__parent-item'>
                    <div className='modal-nav__parent-container'>
                        <Link className='modal-nav__link' to='/learn'>Learn</Link>
                        <img className={`modal-nav__icon${isShowingLearn ? '--rotate' : ''}`} src={expandIcon} onClick={showLearnChildren} />
                    </div>
                    <ul className={`children${isShowingLearn ? '' : '--hidden'}`}>
                        <li className='children__item'>
                            <Link className='modal-nav__link' to='/learn/basics'>The Basics</Link>
                        </li>
                        <li className='children__item'>
                            <Link className='modal-nav__link' to='/learn/intermediate'>Intermediate</Link>
                        </li>
                        <li className='children__item'>
                            <Link className='modal-nav__link' to='/learn/advanced'>Advanced</Link>
                        </li>
                    </ul>
                </li>
                <li className='modal-nav__item'>
                    <Link className='modal-nav__link' to='/do'>Do</Link>
                </li>
                <li className='modal-nav__item'>
                    <Link className='modal-nav__link' to='/contactus'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default ModalNav;