import './NewTracker.scss';
import NumberFormat from 'react-number-format';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useState } from 'react';
import addIcon from '../../assets/icons/add_box_light.svg';
import axios from 'axios';
import { apiUrl } from '../../utils/api';

function NewTracker({ budget, tracker, setTracker, authHeader }) {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [expenseAmount, setExpenseAmount] = useState(null)
    const [expenseItem, setExpenseItem] = useState('')

    const budgetAmountArray = budget.map(item => item.amount)
    let budgetTotal = 0
    const budgetCategories = budget.map(item => item.category)
    let categoriesList = []
    if (budgetAmountArray.length > 0) {
        budgetTotal = budgetAmountArray?.reduce((a, b) => a + b)
        categoriesList = budgetCategories
    }

    const handleSubmit = () => {
        if (selectedCategory && expenseAmount && expenseItem) {
            const newExpenseItem = {
                item: expenseItem,
                category: selectedCategory,
                amount: expenseAmount
            }
            axios.post(apiUrl + '/users/newExpense', newExpenseItem, { headers: authHeader })
                .then(res => {
                    setTracker([...tracker, newExpenseItem])
                    setSelectedCategory('')
                    setExpenseAmount(0)
                    setExpenseItem('')
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <section className='new-tracker'>
            <h1 className='new-tracker__title'>Track your monthly expenses</h1>
            <div className='new-tracker__container'>
                <section className='new-tracker__budget-tracker'>
                    <article className='budget__container'>
                        <h2 className='budget__title'>Remaining Budget</h2>
                        <ul className='budget__table'>
                            <li className='budget__labels'>
                                <ul className='labels'>
                                    <li className='labels__label'>Category</li>
                                    <li className='labels__label'>Plan</li>
                                    <li className='labels__label'>Remaining</li>
                                </ul>
                            </li>
                            {budget?.map((item, index) => {
                                return (
                                    <li key={index} className='budget__item'>
                                        <ul className='item'>
                                            <li className='item__value'>{item.category}</li>
                                            <li className='item__value'>
                                                <NumberFormat
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'$'}
                                                    value={item.amount}
                                                />
                                            </li>
                                            <li className='item__value'>
                                                <NumberFormat
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    prefix={'$'}
                                                    value={100}
                                                />
                                            </li>
                                        </ul>
                                    </li>
                                )
                            })}
                            <li className='budget__total'>
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
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            prefix={'$'}
                                            value={100}
                                        />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </article>
                </section>
                <section className='new-tracker__expenses-tracker'>
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
                                        placeholder='Item...'
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
                                        />
                                        {/* <InvalidInput isValid={isValidAmount} message='Please enter a valid number' /> */}
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
            </div>
        </section>
    );
}

export default NewTracker;