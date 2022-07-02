import './DashboardPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../utils/api'
import MenuOption from '../../components/MenuOption/MenuOption';
import NewBudget from '../../components/NewBudget/NewBudget';

function DashboardPage({ isAuth }) {

    const [budget, setBudget] = useState([])
    const [tracker, setTracker] = useState([])
    const [newBudgetModal, setNewBudgetModal] = useState(false)
    const [newTrackerModal, setNewTrackerModal] = useState(false)

    const token = sessionStorage.getItem('token')
    const authHeader = { Authorization: 'Bearer ' + token }

    function budgetExists() {
        if (budget.length < 1) {
            return false
        }
        return true
    }

    function trackerExists() {
        if (tracker.length < 1) {
            return false
        }
        return true
    }

    useEffect(() => {
        if (isAuth) {
            axios.get(apiUrl + '/users/budget', { headers: authHeader })
                .then(res => {
                    setBudget(res.data)

                    axios.get(apiUrl + '/users/expenses', { headers: authHeader })
                        .then(res => {
                            setTracker(res.data)
                        })
                })
                .catch(err => console.error(err))
        }
    }, [])

    if (!isAuth) {
        return <div>Sign in please</div>
    }

    return (
        <main className='main-dp'>
            <h1 className='main-dp__title'>Welcome to your Dashboard</h1>
            <section className='main-dp__menu'>
                <MenuOption
                    title='Budget'
                    copy='Plan your monthly expenses'
                    enableOpen={budgetExists()}
                    enableNew={true}
                />
                <MenuOption
                    title='Tracker'
                    copy={`Get control of your monthly expenses${!budgetExists() ? '. Create a budget first, then you can start tracking your expenses' : ''}`}
                    enableOpen={trackerExists()}
                    enableNew={budgetExists()}
                />
            </section>
            <NewBudget />
        </main>
    );
}

export default DashboardPage;