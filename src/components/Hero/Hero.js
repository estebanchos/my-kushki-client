import { Link } from 'react-router-dom';
import './Hero.scss'

function Hero() {
    return ( 
        <div className='hero'>
            <div className='hero__content-container'>
                <h2 className='hero__title'>HERO</h2>
                <p className='hero__copy'>Hero copy where we say something clever</p>
            </div>
            <div className='hero__action-container'>
                <Link className='hero__register' to='/register'>Get Started</Link>
            </div>
        </div>
     );
}

export default Hero;