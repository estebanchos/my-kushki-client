import { Link } from 'react-router-dom';
import './Nav.scss'

function Nav() {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <Link className='nav__link' to='/'>Home</Link>
                </li>
                <li className='nav__item'>
                    <Link className='nav__link' to='/learn'>Learn</Link>
                </li>
                <li className='nav__item'>
                    <Link className='nav__link' to='/dashboard'>Dashboard</Link>
                </li>
                <li className='nav__item'>
                    <Link className='nav__link' to='/contactus'>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;