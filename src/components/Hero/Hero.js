import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import './Hero.scss'

function Hero() {

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    }

    return (
        <div className='hero'>
            <div className='hero__content-container'>
                <h1 className='hero__title'>Build Your Financial Future</h1>
                <p className='hero__copy'>Learn to save, invest and more</p>
                <p className='hero__copy'>Create the budget that fits your needs</p>
                <p className='hero__copy'>Track your financial wellbeing</p>
            </div>
            <div className='hero__action-container'>
                <Link className='hero__register' to='/register'>Get Started</Link>
            </div>
        </div>
    );
}

export default Hero;