import './DashboardPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../utils/api'
import MenuOption from '../../components/MenuOption/MenuOption';
import NewBudget from '../../components/NewBudget/NewBudget';
import Budget from '../../components/Budget/Budget';
import NewTracker from '../../components/NewTracker/NewTracker';
import Login from '../../components/LogIn/Login';
import { Steps } from 'antd';

const { Step } = Steps

function DashboardPage({ isAuth, userLoggedIn }) {

    const [budget, setBudget] = useState([])
    const [tracker, setTracker] = useState([])
    const [budgetExists, setBudgetExists] = useState(false)
    const [trackerExists, setTrackerExists] = useState(false)
    const [progress, setProgress] = useState(0)
    const [showBudgetMenu, setShowBudgetMenu] = useState(true)
    const [showTrackerMenu, setShowTrackerMenu] = useState(false)
    const [showNewBudgetModal, setShowNewBudgetModal] = useState(false)
    const [showNewTrackerModal, setShowNewTrackerModal] = useState(false)

    const token = sessionStorage.getItem('token')
    const authHeader = { Authorization: 'Bearer ' + token }

    function validBudgetExists() {
        if (budget.length > 0) {
            return true
        }
        return false
    }

    function validTrackerExists() {
        if (tracker.length > 0) {
            return true
        }
        return false
    }

    const startNewBudget = () => {
        setShowNewBudgetModal(true)
        setShowBudgetMenu(false)
        setShowTrackerMenu(true)
    }

    const startNewTracker = () => {
        setShowTrackerMenu(false)
        setShowNewBudgetModal(false)
        setShowNewTrackerModal(true)
        setProgress(1)
        document.body.scrollTop = 0
    }

    useEffect(() => {
        if (isAuth) {
            axios.get(apiUrl + '/users/budget', { headers: authHeader })
                .then(res => {
                    setBudget(res.data)
                    if (validBudgetExists()) setBudgetExists(true)
                    axios.get(apiUrl + '/users/expenses', { headers: authHeader })
                        .then(res => {
                            setTracker(res.data)
                            if (validTrackerExists()) setTrackerExists(true)
                        })
                })
                .catch(err => console.error(err))
        }
    }, [isAuth])

    useEffect(() => {
        if (validBudgetExists() && !validTrackerExists()) {
            setShowNewBudgetModal(true)
            setShowBudgetMenu(false)
            setShowTrackerMenu(true)
        }
        if (validBudgetExists() && validTrackerExists()) {
            setProgress(2)
            setShowNewBudgetModal(false)
            setShowBudgetMenu(false)
            setShowNewTrackerModal(true)
            setShowTrackerMenu(false)
        }
    }, [budget, tracker])

    if (!isAuth) {
        return (
            <div className='main-unauth-dp'>
                <div className='main-unauth-dp__container'>
                    <h1 className='main-unauth-dp__title'>Welcome Back</h1>
                    <span className='main-unauth-dp__copy'>Please sign in to access your Dashboard</span>
                </div>
                <Login userLoggedIn={userLoggedIn} />
            </div>
        )
    }

    return (
        <main className='main-dp'>
            <h1 className='main-dp__title'>Welcome to your Dashboard</h1>
            <div className='main-dp__progress'>
                <Steps size="small" current={progress}>
                    <Step title="Create Budget" />
                    <Step title="Track Expenses" />
                    <Step title="Build your future" />
                </Steps>
            </div>
            <div className={showBudgetMenu ? `main-dp__menu-budget` : `main-dp__menu-hidden`}>
                <MenuOption
                    title='Budget'
                    copy='Plan your monthly expenses'
                    cta='Create Budget'
                    startNew={startNewBudget}
                />
            </div>
            <div className={showNewBudgetModal ? '' : 'show-new-budget--hidden'}>
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    authHeader={authHeader}
                />
            </div>
            <div className={validBudgetExists() && showNewBudgetModal ? '' : 'show-tracked-budget--hidden'}>
                <Budget budget={budget} />
            </div>
            <div className={showTrackerMenu ? `main-dp__menu-budget` : `main-dp__menu-hidden`}>
                <MenuOption
                    title='Expenses'
                    copy={`Done with the budget? Start tracking your monthly expenses`}
                    cta='Start Tracking'
                    startNew={startNewTracker}
                />
            </div>
            <div className={showNewTrackerModal ? '' : 'show-new-tracker--hidden'}>
                <NewTracker
                    budget={budget}
                    tracker={tracker}
                    setTracker={setTracker}
                    authHeader={authHeader}
                    validTrackerExists={validTrackerExists}
                />
            </div>
        </main>
    );
}

export default DashboardPage;