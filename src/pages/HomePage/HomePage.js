import ActionArticle from '../../components/ActionArticle/ActionArticle';
import Hero from '../../components/Hero/Hero';
import Intro from '../../components/Intro/Intro';
import './HomePage.scss'
import introImg from '../../assets/images/kushki.jpeg';
import house from '../../assets/images/house.png';
import invest from '../../assets/images/invest.png';
import retirement from '../../assets/images/retirement.png';
import taxes from '../../assets/images/taxes.png';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

function HomePage() {
    return (
        <>
            <Hero />
            <main className='main-hp'>
                <Intro
                    title='Manage your money the right way'
                    copy='How to budget, how to save, where to invest? The answers to these questions will impact your financial health.'
                    nextSteps='Learning the art of managing your money will help you make better financial decisions.'
                    introImg={introImg}
                />
                <div className='questions'>
                    <h3 className='questions__title'>Be ready to make your financial decisions</h3>
                    <div className='questions__gallery'>
                        <Carousel autoplay autoplaySpeed={5000} dots={false}>
                            <div className='questions__container'>
                                <img className='questions__image' src={house} alt='person working with a small model of a house' />
                                <p className='questions__question'>Buying or renting a place?</p>
                            </div>
                            <div className='questions__container'>
                                <img className='questions__image' src={invest} alt='person working with a small model of a house' />
                                <p className='questions__question'>Investing by myself or hiring someone?</p>
                            </div>
                            <div className='questions__container'>
                                <img className='questions__image' src={retirement} alt='person working with a small model of a house' />
                                <p className='questions__question'>Saving for retirement or education?</p>
                            </div>
                            <div className='questions__container'>
                                <img className='questions__image' src={taxes} alt='person working with a small model of a house' />
                                <p className='questions__question'>Using accounts that have tax advantages?</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <ActionArticle
                    title='Informed decisions make better decisions'
                    copy="We’ve prepared a learning path to teach you the basics of budgeting, saving, investing and taxes.  We’ve also put together some articles from sites like Investopedia and Wealthsimple that we think will be valuable for your learning journey."
                    link='/learn'
                    cta='Start Learning'
                />
                <ActionArticle
                    title='The right tools can define your financial health'
                    copy="We’ve put together some tools that will help you in your path to keeping healthy finances. First, you'll need to create an account. That way you'll be able to save and access the tools anywhere."
                    link='/register'
                    cta='Get Started'
                />
            </main>
        </>
    );
}

export default HomePage;