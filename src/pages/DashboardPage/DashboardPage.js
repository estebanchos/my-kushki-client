import './DashboardPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../../utils/api'

function DashboardPage({ isAuth }) {

    const [budget, setBudget] = useState([])
    const [tracker, setTracker] = useState([])
    const [newBudgetModal, setNewBudgetModal] = useState(false)
    const [newTrackerModal, setNewTrackerModal] = useState(false)



    const token = sessionStorage.getItem('token')
    const authHeader = { Authorization: 'Bearer ' + token }

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
                <div>Budget</div>
                <div>Tracker</div>
            </section>
        </main>
    );
}

export default DashboardPage;