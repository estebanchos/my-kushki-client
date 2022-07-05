import { Link } from 'react-router-dom';
import Intro from '../../components/Intro/Intro';
import LearnCard from '../../components/LearnCard/LearnCard';
import './LearnPage.scss'

function LearnPage() {
    return (
        <main className='main-lp'>
            <div className='main-lp__main-container'>
                <h1 className='main-lp__title'>Learn</h1>
                <div className='main-lp__intro-container'>
                    <Intro
                        title='Start Your Learning Journey'
                        copy='Before making any financial decision, you should learn some financial basics to help you protect, save, invest and spend your money wisely.'
                        nextSteps='Once you understand some key concepts and the options available to you, you can take actions to enjoy your money today and protect your future financial health.'
                    />
                </div>
                <section className='main-lp__learning-paths'>
                    <div className='main-lp__path path'>
                        {/* ============ BASICS ============ */}
                        <h3 className='path__title'>Basics</h3>
                        <div className='path__carousel'>
                            <Link to={`/learn/articles/basics-budget`} >
                                <LearnCard
                                    title='Budget Basics'
                                    description='Understanding Cash Flow and how to create a budget'
                                    index='1'
                                />
                            </Link>
                            <LearnCard
                                title='Saving Basics'
                                description='Why save? How to save?'
                                index='2'
                            />
                            <LearnCard
                                title='Investing Basics'
                                description='Goals, risk, and investment options'
                                index='3'
                            />
                            <LearnCard
                                title='Money Traps'
                                description='Pay-day loans, credit card debt, and others'
                                index='4'
                            />
                        </div>
                    </div>
                    <div className='main-lp__path path'>
                        {/* ============ INTERMEDIATE ============ */}
                        <h3 className='path__title'>Intermediate</h3>
                        <div className='path__carousel'>
                            <LearnCard
                                title='Budget'
                                description='Fixed and variable expenses. The 50 / 30 / 20 rule'
                                index='1'
                            />
                            <LearnCard
                                title='Saving'
                                description='Emergency funds: why and how much'
                                index='2'
                            />
                            <LearnCard
                                title='Investing'
                                description='Self-investing alternatives'
                                index='3'
                            />
                            <LearnCard
                                title='Investing'
                                description='Tax implications: TFSA, RRSP and other accounts'
                                index='4'
                            />
                        </div>
                    </div>
                    <div className='main-lp__path path'>
                        {/* ============ ADVANCED ============ */}
                        <h3 className='path__title'>Advanced</h3>
                        <div className='path__carousel'>
                            <LearnCard
                                title='Planning'
                                description='Goals: retirement, education, financial independence'
                                index='1'
                            />
                            <LearnCard
                                title='Investing'
                                description='Active vs passive investing'
                                index='2'
                            />
                            <LearnCard
                                title='Investing'
                                description='Alternative investments: crypto, real estate, '
                                index='3'
                            />
                            <LearnCard
                                title='Tax Filing'
                                description='Advantages of filling tax: credits and benefits'
                                index='4'
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default LearnPage;