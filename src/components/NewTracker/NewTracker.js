import './NewTracker.scss';
import NumberFormat from 'react-number-format';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useEffect, useState } from 'react';
import addIcon from '../../assets/icons/add_box_light.svg';
import axios from 'axios';
import { apiUrl } from '../../utils/api';
import { Popover } from 'antd';

const budgetTips = (
    <div>
        <p><b>Housing:</b> rent, mortgage, property taxes, security deposit, insurance</p>
        <p><b>Transport:</b> car payments, car insurance, car maintenance, gas, parking, public transport</p>
        <p><b>Groceries</b></p>
        <p><b>Health:</b> medicines, expenses not covered by provincial health, gym</p>
        <p><b>Utilities:</b> hydro, water, home internet, mobile phone, home supplies</p>
        <p><b>Entertainment:</b> eating out, going out</p>
        <p><b>Subscriptions:</b> netflix, disney+, magazines, newspapers, apps</p>
        <p><b>Saving:</b> monthly auto-deposit to savings or investments account</p>
        <p><b>Emergency Fund:</b> unexpected expenses</p>
        <p><b>Others:</b> daycare, petfood</p>
    </div>
)

function NewTracker({ budget, tracker, setTracker, authHeader, validTrackerExists }) {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [expenseAmount, setExpenseAmount] = useState(null)
    const [expenseItem, setExpenseItem] = useState('')
    const [totalRemaining, setTotalRemaining] = useState(0)

    const budgetAmountArray = budget.map(item => Number(item.amount))
    let budgetTotal = 0
    const budgetCategories = budget.map(item => item.category)
    let categoriesList = []
    let categoriesActualSpend = [] // used to track how much spent on each category
    let budgetTracking = [] // used to track budget category's plan and remaining amounts
    if (budgetAmountArray.length > 0) {
        budgetTotal = budgetAmountArray?.reduce((a, b) => a + b)
        categoriesList = budgetCategories
        // create a new array that hold the total expenses for each category
        categoriesActualSpend = categoriesList.map(category => {
            let categoryExpenses = tracker.filter(item => item.category === category)
            let catTotal = 0
            if (categoryExpenses.length > 0) {
                if (categoryExpenses.length === 1) {
                    catTotal = categoryExpenses[0].amount
                } else {
                    let categoryAmountsOnly = categoryExpenses.map(expense => expense.amount)
                    catTotal = categoryAmountsOnly.reduce((a, b) => a + b)
                }
            }
            let catTotalSpend = {
                category: category,
                amount: catTotal
            }
            return catTotalSpend
        })

        // create a new array that holds category name, plan amount and remaining amount
        budgetTracking = budget.map(category => {
            let currentCategory = (categoriesActualSpend.find(item => item.category === category.category))
            let currentCategorySpend = Number(currentCategory.amount)
            let trackedCategory = {
                category: category.category,
                plan: category.amount,
                remaining: Number(category.amount) - Number(currentCategorySpend)
            }
            return trackedCategory
        })
    }

    useEffect(() => {
        let expenses = categoriesActualSpend.map(category => category.amount)
        let totalExpenses = expenses.reduce((a, b) => a + b, 0)
        setTotalRemaining(budgetTotal - totalExpenses)
    }, [tracker])

    const handleSubmit = () => {
        if (selectedCategory && expenseAmount && expenseItem) {
            const newExpenseItem = {
                item: expenseItem,
                category: selectedCategory,
                amount: Number(expenseAmount)
            }
            axios.post(apiUrl + '/users/newExpense', newExpenseItem, { headers: authHeader })
                .then(_res => {
                    setTracker([...tracker, newExpenseItem])
                    setSelectedCategory('')
                    setExpenseAmount(0)
                    setExpenseItem('')
                    let expenses = categoriesActualSpend.map(category => category.amount)
                    let totalExpenses = expenses.reduce((a, b) => a + b)
                    setTotalRemaining(budgetTotal - totalExpenses)
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <section className='new-tracker'>
            <h2 className='new-tracker__title'>Track your monthly expenses</h2>
            <ul className='new-budget__list'>
                <li className='new-budget__list-item'>Enter an expense soon after paying for a product or service</li>
                <li className='new-budget__list-item'>Or you can review expenses later on your bank or credit card statement</li>
                <li className='new-budget__list-item'>Track the remaining budget for each category</li>
                <li className='new-budget__list-item'>Select a category for the expense: <Popover title='Category and sample expenses' content={budgetTips} trigger='click'><span className='new-budget__list-link'>Category Examples</span>
                </Popover>
                </li>
                <li className='new-budget__list-item'>Review our <a className='new-budget__list-link' href='/learn/articles/basics-budget' target='_blank'>Budget Basics</a> article for tips on sticking to a budget
                </li>

            </ul>
            <div className='new-tracker__container'>
                <section className='new-tracker__budget-tracker'>
                    <article className='expenses-budget__container'>
                        <h2 className='expenses-budget__title'>Remaining Budget</h2>
                        <ul className='expenses-budget__table'>
                            <li className='expenses-budget__labels'>
                                <ul className='labels'>
                                    <li className='labels__label'>Category</li>
                                    <li className='labels__label'>Plan</li>
                                    <li className='labels__label'>Remaining</li>
                                </ul>
                            </li>
                            {budgetTracking?.map((item, index) => {
                                return (
                                    <li key={index} className='expenses-budget__item'>
                                        <ul className='item'>
                                            <li className='item__value'>{item.category}</li>
                                            <li className='item__value'>
                                                <NumberFormat
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'$'}
                                                    value={item.plan}
                                                />
                                            </li>
                                            <li className='item__value'>
                                                <NumberFormat
                                                    className={item.remaining >= 0 ? '' : 'budget-category--over'}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'$'}
                                                    value={item.remaining}
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                )
                            })}
                            <li className='expenses-budget__total'>
                                <ul className='total'>
                                    <li className='total__text'>Total</li>
                                    <li className='total__value'>
                                        <NumberFormat
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'$'}
                                            value={budgetTotal}
                                        />
                                    </li>
                                    <li className='total__value'>
                                        <NumberFormat
                                            className={totalRemaining >= 0 ? '' : 'total-spent--over'}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'$'}
                                            value={totalRemaining}
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </article>
                </section>
                <div className='new-tracker__expenses-container'>
                    <section className='new-tracker__expenses-input'>
                        <div className='new-expense'>
                            <h2 className='new-expense__title'>New Expense</h2>
                            <div className='expense-inputs'>
                                <div className='expense-inputs__inputs'>
                                    <div className='expense-inputs__inputs-container'>
                                        <DropdownMenu
                                            expenseClassName='--expenses'
                                            options={categoriesList}
                                            value={selectedCategory}
                                            onChange={setSelectedCategory}
                                        />
                                        <input
                                            className='expense-inputs__item'
                                            name='item'
                                            id='item'
                                            placeholder='Item purchased / paid...'
                                            value={expenseItem}
                                            onChange={(e) => setExpenseItem(e.target.value)}
                                        />
                                        <div className='expense-inputs__amount-container'>
                                            <NumberFormat
                                                className='expense-inputs__amount'
                                                placeholder='Amount...'
                                                displayType={'input'}
                                                prefix={'$'}
                                                thousandSeparator={true}
                                                value={expenseAmount}
                                                onValueChange={(values) => {
                                                    const { formattedValue, value } = values
                                                    setExpenseAmount(value)
                                                }}
                                                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                                            />
                                        </div>
                                    </div>
                                    <div className='expense-inputs__action-container' onClick={handleSubmit}>
                                        <img className='expense-inputs__icon' src={addIcon} alt='add item icon' />
                                        <span className='expense-inputs__cta'>Add</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={validTrackerExists() ? 'new-tracker__expenses-tracker' : 'new-tracker__expenses-tracker--hidden'}>
                        <article className='expenses__container'>
                            <h2 className='expenses__title'>Your Expenses</h2>
                            <ul className='expenses__table'>
                                <li className='expenses__labels'>
                                    <ul className='labels'>
                                        <li className='labels__label'>Category</li>
                                        <li className='labels__label'>Item</li>
                                        <li className='labels__label'>Amount</li>
                                    </ul>
                                </li>
                                {tracker?.map((item, index) => {
                                    return (
                                        <li key={index} className='expenses__item'>
                                            <ul className='item'>
                                                <li className='item__value'>{item.category}</li>
                                                <li className='item__value'>{item.item}</li>
                                                <li className='item__value'>
                                                    <NumberFormat
                                                        displayType={'text'}
                                                        thousandSeparator={true}
                                                        prefix={'$'}
                                                        value={item.amount}
                                                    />
                                                </li>
                                            </ul>
                                        </li>
                                    )
                                })}
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default NewTracker;