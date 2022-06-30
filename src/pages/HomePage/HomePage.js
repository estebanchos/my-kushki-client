import ActionArticle from '../../components/ActionArticle/ActionArticle';
import Hero from '../../components/Hero/Hero';
import Intro from '../../components/Intro/Intro';
import './HomePage.scss'


function HomePage() {
    return (
        <main className='main-hp'>
            <Hero />
            <Intro
                title='Manage your money the right way'
                copy='How to budget, how to save, where to invest? The answers to these questions will impact your financial health.
                Learning the art of managing your money will help you make better financial decisions.'
            />
            <div className='questions'>
                <div className='questions__container'>
                    <h3 className='questions__title'>Throughout your life, you'll make many financial decisions</h3>
                    <p className='questions__question--right'>"Buying or renting a place?"</p>
                    <p className='questions__question--left'>"Investing by myself or hiring someone?"</p>
                    <p className='questions__question--right'>"Saving for retirement or education?"</p>
                    <p className='questions__question--left'>"Using accounts that have tax advantages?"</p>
                </div>
            </div>
            <ActionArticle
                title='Learning some financial basics will help you make better decisions'
                copy="We’ve prepared a learning path to teach you the basics of budgeting, saving, investing and taxes.  We’ve also put together some articles from sites like Investopedia and Wealthsimple that we think will be valuable for your learning journey."
                link='/learn'
                cta='Start Learning'
            />
            <ActionArticle
                title='Tools are an important part of managing your finances'
                copy="We’ve put together some tools that will help you in your path to keeping healthy finances. First, you'll need to create an account. That way you'll be able to save and access the tools anywhere."
                link='/register'
                cta='Get Started'
            />
        </main>
    );
}

export default HomePage;